import React from 'react'
import Axios from 'axios';
import SearchInput from './SearchInput'
import ImageList from './ImageList'

class App extends React.Component {
    state = { images: [] }

    onSearchSubmit = async (entry) => {
        const res = await Axios.get(`https://pixabay.com/api/?key=23733000-4eaa9b1250190c24bcc2edce4&q=${entry}&image_type=photo`)
        this.setState({ images: res.data.hits })
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop: '30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default App