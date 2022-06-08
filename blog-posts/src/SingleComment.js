import React from 'react'

const SingleComment = (props) => {
    return (
        <div className='comment'>
            <a href="/" className='avatar'>
                <img src={props.avatar} alt="profile picture" />
            </a>
            <div className='content'>
                {props.author}
                <a href="/" className='author'></a>
                <div className='metadata'>
                    <span className='date'>{props.date}</span>
                </div>
                <div className='text'>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default SingleComment