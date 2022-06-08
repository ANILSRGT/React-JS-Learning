import React from 'react'
import { createRoot } from 'react-dom/client'


const root = createRoot(document.getElementById('root'));
const App = () => {
    const buttonText = 'Click me'

    return (
        <div>
            <label htmlFor="name" className='label'>enter e-mail</label>
            <input type="text" id='name' />
            <button style={{ backgroundColor: 'red', color: 'white' }}>
                {buttonText}
            </button>
        </div>
    )
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)