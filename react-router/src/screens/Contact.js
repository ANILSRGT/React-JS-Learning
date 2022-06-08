import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Contact = ({ cards }) => {
    return (
        <div className="contact" style={{ padding: '20px' }}>
            <h2 className="header">Contact</h2>
            {
                cards != null ? cards.map((card) => {
                    return <div className="card" key={card.id}>
                        <div className="card-content">
                            <span className="card-title grey-text text-darken-4">{card.title}</span>
                            <p>
                                {card.text}
                            </p>
                        </div>
                        <div className="card-action">
                            <p><Link to={`/${card.id}`}>contact</Link></p>
                        </div>
                    </div>
                }) : <div>Loading...</div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    const { cards } = state;
    return {
        cards
    }
}

export default connect(mapStateToProps)(Contact)