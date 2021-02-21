import React from 'react'

const UserOutput = (props) => {
    return (
        <div>
        <p>This is paragraph number one</p>
        <p>This is paragraph number two by username {props.username}</p>
        </div>
    )

}; 

export default UserOutput;