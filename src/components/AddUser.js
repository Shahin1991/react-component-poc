import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addUser,closeAddModal} from '../redux/user/userActions'
import styles from './AddUser.module.css'

function AddUser({closeAddModal,handleAdd,userData}) {

    const [itemData, setitemData] = useState({
        id:0,
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const [dataChanged, setdataChanged] = useState(false)

    const handleChange = e => {
        setitemData({ ...itemData, [e.target.name]: e.target.value });
        setdataChanged(true)
      };
    
       const newId = userData.users.length+1;
       if(!itemData.id)
        setitemData({...itemData,id:newId})

    return (
        <div>
            <h3>Add Record</h3>
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
              value={itemData.id}
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
              value={itemData.name}
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
              value={itemData.username}
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
              value={itemData.email}
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
              value={itemData.phone}
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
              value={itemData.website}
              onChange={e => handleChange(e)}
            />
          </td>
        </tr>
        </tbody>  
      </table>
    
      <div className={styles.edituserBtnContainer}>
        <button style={{display:dataChanged?"":"none"}} onClick={()=>handleAdd(itemData)}>Add</button>
        <button onClick={()=>closeAddModal()}>{dataChanged?'Cancel Changes':'Close'}</button>
      </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
      handleAdd:(user)=>dispatch(addUser(user)),
      closeAddModal:()=>dispatch(closeAddModal())
    }
  }
  
  const mapStateToProps = (state)=>{
    return{
      userData:state.userReducerData
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(AddUser);
