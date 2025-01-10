import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
import './login.css'
import { useAlert } from 'react-alert'
// add clientId here
const clientId=""
function Logout() {
    const navigate=useNavigate();
    const alert =useAlert();
    const onSuccess=()=>{
        localStorage.clear();
        localStorage.setItem('login',false);
        alert.success("LogoutSuceesfuly");
         navigate('/');
    }
    return (
        <div className="logout">
           < GoogleLogout 
           clientId={clientId}
           buttonText={"logout"}
           onLogoutSuccess={onSuccess}
           />
        </div>
    )
}

export default Logout
