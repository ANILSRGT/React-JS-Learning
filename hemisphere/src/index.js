import React from 'react'
import { createRoot } from 'react-dom/client'
import HemisphereDisplay from './HemisphereDisplay'

const root = createRoot(document.getElementById("root"))

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            latitude: null,
            errorMessage: '',
        }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                })
            },
            (error) => {
                this.setState({
                    errorMessage: error.message,
                })
            }
        )
    }

    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return <div> <HemisphereDisplay latitude={this.state.latitude} /> </div>
        }

        return <div>Loading...</div>
    }
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)