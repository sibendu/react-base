import { BsGear, BsFillArrowRightSquareFill , BsArrowsFullscreen} from "react-icons/bs";

function logout(){
	alert('logout');
}

function hideLeftMenu(){
    var menu = document.getElementById("leftmenu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
export default function Header(props) {
    const {user} = props;
    return (
        <nav id="topbar">
            <div className="topbar-header">
                <div id="header-left">
                    <BsArrowsFullscreen onClick={() => hideLeftMenu()}/>
                </div>  
                <div id="header-right">
                    Hello {user.name}  <BsGear onClick={() => alert('Settings')}/> <BsFillArrowRightSquareFill onClick={() => logout()}/>
                </div>
                <br/>                
            </div>
        </nav>
    );
}