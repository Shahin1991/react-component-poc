import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
import {updateUser,closeEditModal} from '../redux/user/userActions'

import styles from './EditUser.module.css'

function EditUser({closeEditModal,handleSave,userData}) {
  const [itemData, setitemData] = useState({
    id:0,
    name:"",
    username:"",
    email:"",
    phone:"",
    website:""
  });
  const [dataChanged, setdataChanged] = useState(false)

  useEffect(() => {
    setitemData({
      ...itemData,
      id:userData.userToEdit.id,
      name:userData.userToEdit.name,
      username:userData.userToEdit.username,
      email:userData.userToEdit.email,
      phone:userData.userToEdit.phone,
      website:userData.userToEdit.website
    });
    return () => {};
  }, [userData]);

  const handleChange = e => {
    setitemData({ ...itemData, [e.target.name]: e.target.value });
    setdataChanged(true)
  };



  return (
    <div>
      <h3>Edit Record</h3>
      <table className={styles.edituserTable}>
      <tbody>
        <tr>
          <td>
            <label>ID</label>
          </td>
          <td>
            <input
              type="text"
              name="id"
              disabled={true}
              value={itemData.id||''}
              onChange={e => handleChange(e)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Name</label>
          </td>
          <td>
            <input
              type="text"
              name="name"
              value={itemData.name||''}
              onChange={e => handleChange(e)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>UserName</label>
          </td>
          <td>
            <input
              type="text"
              name="username"
              value={itemData.username||''}
              onChange={e => handleChange(e)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Email</label>
          </td>
          <td>
            <input
              type="text"
              name="email"
              value={itemData.email||''}
              onChange={e => handleChange(e)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Phone</label>
          </td>
          <td>
            <input
              type="text"
              name="phone"
              value={itemData.phone||''}
              onChange={e => handleChange(e)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Website</label>
          </td>
          <td>
            <input
              type="text"
              name="website"
              value={itemData.website||''}
              onChange={e => handleChange(e)}
            />
          </td>
        </tr>
        </tbody>  
      </table>
    
      <div className={styles.edituserBtnContainer}>
        <button style={{display:dataChanged?"":"none"}} onClick={()=>handleSave(itemData)}>Save Changes</button>
        <button onClick={()=>closeEditModal()}>{dataChanged?'Cancel Changes':'Close'}</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleSave:(user)=>dispatch(updateUser(user)),
    closeEditModal:()=>dispatch(closeEditModal())
  }
}

const mapStateToProps = (state)=>{
  return{
    userData:state.userReducerData
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditUser);
