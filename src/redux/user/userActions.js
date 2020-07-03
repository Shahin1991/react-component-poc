import {
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_FAILURE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE,
  SHOW_ADD_MODAL,
  CLOSE_ADD_MODAL,
  SHOW_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  SHOW_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
} from './userTypes'
import axios from 'axios'

const fetchUsersRequest = ()=>{
  return({
    type:USER_FETCH_REQUEST
  })
}

const fetchUsersSuccess = (userData)=>{
  return({
    type:USER_FETCH_SUCCESS,
    payload:userData
  })
}

const fetchUsersFailure = (error)=>{
  return({
    type:USER_FETCH_FAILURE,
    payload:error
  })
}

export const fetchUsers = () =>{
  return(dispatch)=>{
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      const users = response.data
      dispatch(fetchUsersSuccess(users))
    })
    .catch(error=>{
      const errorMsg = error.message
      dispatch(fetchUsersFailure(errorMsg))
    })
  }
}






const addUserRequest = ()=>{
  return({
    type:USER_ADD_REQUEST
  })
}

const addUserSuccess = (user)=>{
  return({
    type:USER_ADD_SUCCESS,
    payload:user
  })
}

const addUserFailure = (error)=>{
  return({
    type:USER_ADD_FAILURE,
    payload:error
  })
}

export const addUser = (user)=>{
  return(dispatch)=>{
    dispatch(addUserRequest())
    const url = `https://jsonplaceholder.typicode.com/users/`
    axios.post(url,user).then((response)=>{
      const addedUser = response.data
      dispatch(addUserSuccess(addedUser))
    }).catch((error)=>{
      const errorMsg = error.message
      dispatch(addUserFailure(errorMsg))
    })
  }
}


export const showAddModal = ()=>(dispatch)=>{
  // console.log('showAddModal')
  return dispatch({
    type:SHOW_ADD_MODAL
  })
}

export const closeAddModal = ()=>(dispatch)=>{
  return dispatch({
    type:CLOSE_ADD_MODAL
  })
}






const updateUserRequest = ()=>{
  return({
    type:USER_UPDATE_REQUEST
  })
}

const updateUserSuccess = (user)=>{
  return({
    type:USER_UPDATE_SUCCESS,
    payload:user
  })
}

const updateUserFailure = (error)=>{
  return({
    type:USER_UPDATE_FAILURE,
    payload:error
  })
}

export const updateUser = (user)=>{
  return(dispatch)=>{
    dispatch(updateUserRequest())
    const url = `https://jsonplaceholder.typicode.com/users/${user.id}`
    axios.put(url,user).then((response)=>{
      const updatedUser = response.data
      dispatch(updateUserSuccess(updatedUser))
    }).catch((error)=>{
      const errorMsg = error.message
      dispatch(updateUserFailure(errorMsg))
    })
  }
}





export const showEditModal = (id)=>(dispatch)=>{
  return dispatch({
    type:SHOW_EDIT_MODAL,
    payload:id
  })
}

export const closeEditModal = ()=>(dispatch)=>{
  return dispatch({
    type:CLOSE_EDIT_MODAL
  })
}









const deleteUserRequest = ()=>{
  return({
    type:USER_DELETE_REQUEST
  })
}

const deleteUserSuccess = (userId)=>{
  return({
    type:USER_DELETE_SUCCESS,
    payload:userId
  })
}

const deleteUserFailure = (error)=>{
  return({
    type:USER_DELETE_FAILURE,
    payload:error
  })
}

export const deleteUser = (userId)=>{
  return(dispatch)=>{
    dispatch(deleteUserRequest())
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    axios.delete(url).then((response)=>{
      const deletedUser = response.data
      dispatch(deleteUserSuccess(userId))
    }).catch((error)=>{
      const errorMsg = error.message
      dispatch(deleteUserFailure(errorMsg))
    })
  }
}






export const showDeleteModal = (id)=>(dispatch)=>{
  return dispatch({
    type:SHOW_DELETE_MODAL,
    payload:id
  })
}


export const closeDeleteModal = ()=>(dispatch)=>{
  return dispatch({
    type:CLOSE_DELETE_MODAL
  })
}


  
