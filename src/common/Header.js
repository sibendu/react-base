import { BsGear, BsFillArrowRightSquareFill , BsArrowsFullscreen} from "react-icons/bs";
import { GoogleLogout } from 'react-google-login';
import React from "react";

const clientId = '100566415934-k4r4eks1aj94vcadle7kca0uqkv5etk4.apps.googleusercontent.com';

function hideLeftMenu(){
    var menu = document.getElementById("leftmenu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
export default function Header(props) {
    
    const {user, setUser} = props;
    
    let isGoogle = false;
    if(user.googleId){
        isGoogle = true;   
    }

    const onLogoutSucess = (res) => {
        setUser(null);
    }
    
    return (
        <nav id="topbar">
            <div className="topbar-header">
                <div id="header-left">
                    <BsArrowsFullscreen onClick={() => hideLeftMenu()}/>
                </div>  
                <div id="header-right">
                    Hello {user.name}  
                    
                    <img src={user.imageUrl} height="30" width="30"/>

                    <BsGear onClick={() => alert('Settings')}/> 
                    
                    {isGoogle? 
                        <GoogleLogout
                        clientId={clientId}
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</button>
                          )}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSucess}
                    ></GoogleLogout>
                    :
                        <BsFillArrowRightSquareFill onClick={() => onLogoutSucess()}/>
                    }

                </div>
                <br/>                
            </div>
        </nav>
    );
}