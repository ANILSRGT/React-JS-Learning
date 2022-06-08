import React from 'react'
import { createRoot } from 'react-dom/client'
import SingleComment from './SingleComment'
import UserCard from './UserCard'
import profile1 from './assets/images/pp1.jpg'
import profile2 from './assets/images/pp2.jpg'
import profile3 from './assets/images/pp3.jpg'


const root = createRoot(document.getElementById('root'));
const App = () => {
    const buttonText = 'Click me'

    return (
        <div className='ui comments'>
            <UserCard header="Alex S.">
                <SingleComment author='Alex' avatar={profile1} date='Today at 5:00 PM' text='Comment 1' />
            </UserCard>
            <UserCard header="John E.">
                <SingleComment author='John' avatar={profile2} date='Today at 8:00 PM' text='Comment 2' />
            </UserCard>
            <UserCard header="Lory H.">
                <SingleComment author='Lory' avatar={profile3} date='Today at 12:00 PM' text='Comment 3' />
            </UserCard>
        </div>
    )
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)