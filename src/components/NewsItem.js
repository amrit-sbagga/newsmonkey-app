import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description } = this.props;

        return (
            <div className="card" style={{"width": "18rem","marginTop":"25px"}}>
            <img className="card-img-top" src="https://i.gadgets360cdn.com/large/telegram_new_update_telegram_1632118413530.jpg" alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
        )
    }
}

export default NewsItem
