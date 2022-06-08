import React from 'react'
import { useParams } from 'react-router-dom'

class Card extends React.Component {
    state = { user: '' }

    componentDidMount() {
        let user = this.props.params.user
        this.setState({ user })
    }

    render() {
        const { user } = this.state
        return (
            <div className="card">
                {user}
            </div>
        )
    }
}

export default (props) => (
    <Card
        {...props}
        params={useParams()}
    />
);