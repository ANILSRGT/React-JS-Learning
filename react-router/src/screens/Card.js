import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteCard, fetchUser } from '../actions/cardActions'

class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        const { users } = this.props;
        return (
            users.map(user => {
                <div key={user.id} className="card" style={{ margin: '20px' }}>
                    <div className="card-content">
                        <span className="card-title grey-text text-darken-4">
                            {user.name}
                        </span>
                        <p>
                            {user.email}
                        </p>
                    </div>
                </div>
            })
        )
    }
}


const MapStateToProps = (state) => {
    const { userId } = useParams()
    return {
        card: state.cards.find(card => card.id === userId),
        users: state.users
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (id) => { dispatch(deleteCard(id)) },
        fetchUser: () => { dispatch(fetchUser()) }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Card);