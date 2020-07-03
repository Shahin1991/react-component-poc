import React from "react";
import { connect } from "react-redux";
import { deleteUser, closeDeleteModal } from "../redux/user/userActions";
import styles from './DeleteUser.module.css'

function DeleteUser({handleDelete,userData,closeModal}) {
  return (
    <div>
      <h3>Delete Record</h3>
      <p>Are you sure you want to delete {userData.userIdToDelete}?</p>
      <div className={styles.deleteuserBtnContainer}>
        <button onClick={() => handleDelete(userData.userIdToDelete)}>Confirm</button>
        <button onClick={() => closeModal()}>Cancel</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: itemData => dispatch(deleteUser(itemData)),
    closeModal: () => dispatch(closeDeleteModal())
  };
};

const mapStateToProps = state => {
  return {
    userData: state.userReducerData
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteUser);
