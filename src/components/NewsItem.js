import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description, imgUrl, newsUrl } = this.props;

        return (
            <div className="my-3">
                {/* "width": "18rem", */}
                <div className="card" style={{"marginTop":"0px"}}> 
                <img className="card-img-top" src={imgUrl} alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
