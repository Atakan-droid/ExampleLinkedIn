import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';


function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#
                { topic}
            </span>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                    src="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg"
                    alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar" >{user.email[0] }</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{ user.email}</h4>
            </div>
            
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed u</p>
                    <p className="sidebar__statNumber">2,533</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('rea')}
                {recentItem('developer')}
                {recentItem('develop')}

            </div>
        </div>
    )
}

export default Sidebar
