import React from 'react'

class ImageList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { images: [] }
    }

    ImageList = () => {
        return (
            this.props.images.map(image => {
                return (
                    <div key={image.id} className='four wide column'>
                        <div className="ui segment">
                            <a href={image.webformatURL} target="_blank"><img className='ui image' src={image.webformatURL} alt={image.tags} /></a>
                            <div style={{ marginTop: '5px' }}>
                                <i class="heart outline icon"></i>
                                {image.likes}
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        return (
            <div className='ui grid container large images'>
                {this.ImageList()}
            </div>
        )
    }
}

export default ImageList