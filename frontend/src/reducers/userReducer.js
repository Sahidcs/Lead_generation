import{
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
  
  } from '../Constants/userConstants'
  export const userReducer = (state = { user: {}}, action) => {
      switch (action.type) {
          case LOGIN_REQUEST:
            case REGISTER_REQUEST:
           
            return {
              loading: true,
              isAuthentication:false,
            };
          case LOGIN_SUCCESS:
            case REGISTER_SUCCESS:
          
            return {
              loading: false,
              isAuthentication:true,
              user:action.payload
            };
        
          case LOGIN_FAIL:
            case REGISTER_FAIL:
         
            return {
              ...state,
              loading: false,
                isAuthentication:false,
                user:null,
                error: action.payload,
            };
     
          default:
            return state;
        }
  }