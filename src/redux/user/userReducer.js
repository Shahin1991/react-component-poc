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
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
  showEditModal: false,
  userToEdit:{},
  showDeleteModal: false,
  userIdToDelete:0,
  showAddModal:false,
  userToAdd:{} //not req?
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_FETCH_REQUEST:
      return { ...state, loading: true, users: [], error: "" };

    case USER_FETCH_SUCCESS:
      return {...state,
        loading: false,
        users: action.payload,
        error: ""
      };
    case USER_FETCH_FAILURE:
      return {...state,
        loading: false,
        users: [],
        error: action.payload
      };



    case USER_UPDATE_REQUEST:
      return { ...state, loading: true };

    case USER_UPDATE_SUCCESS:
      return {...state,
        loading: false,
        users: state.users.map(user =>
          user.id === payload.id ? payload : user
        ),
        error: "",
        showEditModal:false,
        userToEdit:{}
      };

    case USER_UPDATE_FAILURE:
      return { ...state,
        loading: false, 
        error: action.payload,
        showEditModal:false,
        userToEdit:{}
       }

    case SHOW_EDIT_MODAL:
      return {...state,
        showEditModal:true,
        userToEdit:state.users.filter((user)=>{
         return(user.id==payload)
        })[0]
      }
    case CLOSE_EDIT_MODAL:
      return {...state,
        showEditModal:false,
        userToEdit:{}}





    case USER_DELETE_REQUEST:
      return { ...state, loading: true };

    case USER_DELETE_SUCCESS:
      return {...state,
        loading: false,
        users: state.users.filter(user =>
          user.id != payload
        ),
        error: "",
        showDeleteModal:false,
        userIdToDelete:0
      };

    case USER_DELETE_FAILURE:
      return { ...state, 
        loading: false, 
        error: action.payload,
        showDeleteModal:false,
        userIdToDelete:0
       }

    case SHOW_DELETE_MODAL:
      return {...state,
        showDeleteModal:true,
        userIdToDelete:payload
        }

    case CLOSE_DELETE_MODAL:
      return {...state,
        showDeleteModal:false,
        userIdToDelete:0
      }




      case USER_ADD_REQUEST:
      return { ...state, loading: true };

    case USER_ADD_SUCCESS:
      return {...state,
        loading: false,
        users: [...state.users,payload],
        error: "",
        showAddModal:false
      };

    case USER_ADD_FAILURE:
      return { ...state, 
        loading: false, 
        error: action.payload,
        showAddModal:false
       }

    case SHOW_ADD_MODAL:
      return {...state,
        showAddModal:true
        }

    case CLOSE_ADD_MODAL:
      return {...state,
        showAddModal:false
      }

    default:
      return state;
  }
};

export default userReducer;
