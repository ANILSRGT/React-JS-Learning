import React from 'react'
import { Link } from 'react-router-dom'

class Contact extends React.Component {
    render() {
        return (
            <div className="contact" style={{ padding: '20px' }}>
                <h2 className="header">Contact</h2>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title grey-text text-darken-4">Alex</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse nihil ab, magnam veritatis officia veniam suscipit dolore quis corporis tempore reprehenderit rem quam aliquam nostrum sequi eum vitae accusamus.
                        </p>
                    </div>
                    <div className="card-action">
                        <p><Link to="/alex">contact</Link></p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title grey-text text-darken-4">Willma</span>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione nesciunt rerum pariatur soluta, id quidem praesentium, itaque, eos provident voluptatem deserunt distinctio velit! Illo nemo rerum reprehenderit error aliquid!
                        </p>
                    </div>
                    <div className="card-action">
                        <p><Link to="/willma">contact</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact