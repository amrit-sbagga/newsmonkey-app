import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { KEY } from '../keys';
let defaultImgUrl = "https://ik.imagekit.io/demo/img/tr:di-default-image.jpg/original-image.jpg";

export class News extends Component {
    articles = []

    constructor(){
        super();
        console.log("constructor..", KEY);
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

    async componentDidMount(){
        console.log("componentDidMount");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${KEY}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles : parsedData.articles});
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element) => {                
                   // console.log(element);
                   return (<div key={element.url} className="col-md-4">
                        <NewsItem
                            title={element.title ? element.title.slice(0, 45) : ""}
                            description={element.description ? element.description.slice(0, 85) : ""}
                            imgUrl={element.urlToImage ? element.urlToImage : defaultImgUrl} 
                            newsUrl={element.url}
                            />
                    </div>)     
                })}  
                </div>    
            </div>
        )
    }
}

export default News
