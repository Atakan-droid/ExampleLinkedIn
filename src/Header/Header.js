import React from 'react'
import './Header.css'
import { useDispatch} from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SuperVisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { logout} from '../features/userSlice';
import { auth } from '../firebase';
import AcUnitIcon from '@material-ui/icons/AcUnit';

function Header() {
    const dispatch = useDispatch();

    const logoutApp = () => {
        
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header" >

            <div className="header_left">
            <HeaderOption Icon={AcUnitIcon} title="Project Atakan" />
                <div className="header_search">
                    <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SuperVisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={true} onClick={logoutApp}
                    title="me" />
            </div>
        </div>
    )
}

export default Header
