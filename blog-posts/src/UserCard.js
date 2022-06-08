import React from 'react'

const UserCard = (props) => {
    return (
        <div className='ui card'>
            <div className='content'>
                <div className='header'>
                    {props.header}
                </div>
                <div className='description'>
                    {props.children}
                </div>
            </div>
            <div className='ui bottom attached button'>
                <i className='add icon' />
                Add Friend
            </div>
        </div>
    )
}

export default UserCard