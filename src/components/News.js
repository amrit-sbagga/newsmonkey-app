import React, { Component } from 'react';
import NewsItem from './NewsItem';
//import { KEY } from '../keys';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
let defaultImgUrl = "https://ik.imagekit.io/demo/img/tr:di-default-image.jpg/original-image.jpg";

export class News extends Component {
    apiKey = process.env.REACT_APP_NEWS_API
    static defaultProps = {
        country : 'in',
        pageSize : 8,
        category : 'general'
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        //console.log("constructor..", KEY);
        this.state = {
            articles : [],
            loading : true,
            page : 1,
           // pageSize : 20,
            totalResults : 0
        }
        document.title = this.capitalizeFirstLetter(`${this.props.category} - NewsMonkey`);
    }

    //getNews = async function(){
    updateNews = async(type) => {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({
            loading : true
        });
        // let pageNo = 1;
        // if(type === "next"){
        //     pageNo = this.state.page + 1;
        // } else if(type === "previous"){
        //     pageNo = this.state.page - 1;
        // } 
        // console.log("getNews pageNo = " + pageNo)
        
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        this.props.setProgress(70);
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading : false
        });
        this.props.setProgress(100);
    }

    async componentDidMount(){
        console.log("componentDidMount");
        await this.updateNews();
    }

    fetchMoreData = async() => {
        this.setState({
            page : this.state.page+1
        })
        //await this.updateNews();
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        // this.setState({
        //     loading : true
        // });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles : this.state.articles.concat(parsedData.articles),
            totalResults : parsedData.totalResults
        });
    }

    /** handlePreviousClick = async(e) => {
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
        //if(!((this.state.page + 1) > Math.ceil(this.state.totalResults/this.props.pageSize))){
            console.log("next click!");
            this.setState({
                page : this.state.page + 1
            });
            console.log("handleNextClick page = " + this.state.page);
            await this.getNews("next");
        //} 
    } **/

    render() {
        return (
            // <div className="container my-3">
            <>
                <h1 className="text-center" style={{margin: '10px 0px'}}>NewsMonkey - Top {this.capitalizeFirstLetter(`${this.props.category}`)} Headlines</h1>
                {this.state.loading && <Spinner />}
                
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}>
                        <div className="container">
                            <div className="row">
                                {/* {!this.state.loading && this.state.articles.map((element) => {                 */}
                                {this.state.articles.map((element) => {                
                                // console.log(element);
                                return (<div key={element.url} className="col-md-4">
                                        <NewsItem
                                            title={element.title ? element.title.slice(0, 45) : ""}
                                            description={element.description ? element.description.slice(0, 85) : ""}
                                            imgUrl={element.urlToImage ? element.urlToImage : defaultImgUrl} 
                                            newsUrl={element.url}
                                            author={!element.author ? "Unknown" : element.author }
                                            publishedAt={new Date(element.publishedAt).toUTCString()}
                                            source={element.source.name}
                                            />
                                    </div>)     
                                })}  
                            </div> 
                        </div>
                 </InfiniteScroll>
                {/* <div className="container d-flex justify-content-end">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark mx-2"
                        onClick={this.handlePreviousClick}> &larr; Previous</button>    
                    <button type="button" disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults/this.props.pageSize)}
                        className="btn btn-dark mx-2" onClick={this.handleNextClick}>Next &rarr;</button>    
                </div>    */}
            </>
        )
    }
}

export default News
