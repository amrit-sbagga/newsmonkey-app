import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="mytitle1" description="mydescription"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle2" description="mydescription"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle3" description="mydescription"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="mytitle4" description="mydescription"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle5" description="mydescription"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="mytitle6" description="mydescription"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
