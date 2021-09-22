import React, { Component } from 'react';
import NewsItem from './NewsItem';
import { KEY } from '../keys';
import Spinner from './Spinner';
let defaultImgUrl = "https://ik.imagekit.io/demo/img/tr:di-default-image.jpg/original-image.jpg";

export class News extends Component {
    articles = []

    constructor(){
        super();
        //console.log("constructor..", KEY);
        this.state = {
            articles : this.articles,
            loading : false,
            page : 1,
           // pageSize : 20,
            totalResults : 0
        }
    }

    //getNews = async function(){
    getNews = async(type) => {
        this.setState({
            loading : true
        });
        let pageNo = 1;
        if(type === "next"){
            pageNo = this.state.page + 1;
        } else if(type === "previous"){
            pageNo = this.state.page - 1;
        } 
        console.log("getNews pageNo = " + pageNo)
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${KEY}&page=${pageNo}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading : false
        });
    }

    async componentDidMount(){
        console.log("componentDidMount");
        await this.getNews();
    }

    handlePreviousClick = async(e) => {
        e.preventDefault();
        this.setState({
            page : this.state.page - 1
        });
        console.log("handlePreviousClick page = " + this.state.page);
        await this.getNews("previous");
    }

    handleNextClick = async(e) => {
        //let page = this.state.page;
        e.preventDefault();
        if(!((this.state.page + 1) > Math.ceil(this.state.totalResults/this.props.pageSize))){
            console.log("next click!");
            this.setState({
                page : this.state.page + 1
            });
            console.log("handleNextClick page = " + this.state.page);
            await this.getNews("next");
        } 
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {                
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
                <div className="container d-flex justify-content-end">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark mx-2"
                        onClick={this.handlePreviousClick}> &larr; Previous</button>    
                    <button type="button" disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults/this.props.pageSize)}
                        className="btn btn-dark mx-2" onClick={this.handleNextClick}>Next &rarr;</button>    
                </div>   
            </div>
        )
    }
}

export default News
