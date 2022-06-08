import React from 'react'
import './HemisphereDisplay.css'

const hemisphereConfig = {
    northern: {
        text: 'Northern',
    },
    southern: {
        text: 'Southern',
    },
}

const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? 'northern' : 'southern'
    const { text } = hemisphereConfig[hemisphere]

    return (
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src="/" alt="hemisphere picture" />
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay