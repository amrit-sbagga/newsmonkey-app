import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
//import { KEY } from '../keys';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
let defaultImgUrl = "https://ik.imagekit.io/demo/img/tr:di-default-image.jpg/original-image.jpg";

const News = (props) => {
    const apiKey = process.env.REACT_APP_NEWS_API

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //document.title = capitalizeFirstLetter(`${props.category} - NewsMonkey`);
    
    const updateNews = async() => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true);

        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        //console.log(parsedData);
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
      
        props.setProgress(100);
    }

    useEffect(() => {
        async function fetchUpdatedNews() {
            await updateNews();
        }
        fetchUpdatedNews();
    }, [])

    const fetchMoreData = async() => {
        setPage(page + 1);
        
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`
        
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        
    }

    /** const handlePreviousClick = async(e) => {
        e.preventDefault();
        setPage(page - 1);
        console.log("handlePreviousClick page = " + page);
        await getNews("previous");
    }

    const handleNextClick = async(e) => {
        //let page = page;
        e.preventDefault();
        //if(!((page + 1) > Math.ceil(totalResults/props.pageSize))){
            console.log("next click!");
            setPage(page + 1);
            console.log("handleNextClick page = " + page);
            await getNews("next");
        //} 
    } **/

   
    return (
        // <div className="container my-3">
        <>
            <h1 className="text-center" style={{margin: '10px 0px'}}>NewsMonkey - Top {capitalizeFirstLetter(`${props.category}`)} Headlines</h1>
            {loading && <Spinner />}
            
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}>
                    <div className="container">
                        <div className="row">
                            {/* {!loading && articles.map((element) => {                 */}
                            {articles.map((element) => {                
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
                <button type="button" disabled={page <= 1} className="btn btn-dark mx-2"
                    onClick={handlePreviousClick}> &larr; Previous</button>    
                <button type="button" disabled={(page + 1) > Math.ceil(totalResults/props.pageSize)}
                    className="btn btn-dark mx-2" onClick={handleNextClick}>Next &rarr;</button>    
            </div>    */}
        </>
    )

}

News.defaultProps = {
    country : 'in',
    pageSize : 8,
    category : 'general'
}

News.propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
}

export default News
