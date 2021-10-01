import React from 'react';

const NewsItem = (props) => {
    
    let { title, description, imgUrl, newsUrl, author, publishedAt, source } = props;

    return (
        <div className="my-3">
            {/* "width": "18rem", */}
            <div className="card" style={{"marginTop":"0px"}}> 
            {/* <span className="position-absolute top-0 translate-middle badge badge-secondary" 
            // style={{left:'0%', 'zIndex':1}}
            >{source}
            </span> */}
            <div style={{display:'flex', justifyContent:'flex-end', position:'absolute',right:0}}>
                <span className="badge rounded-pill bg-danger">{source}</span>
            </div>
            <img className="card-img-top" src={imgUrl} alt="img"/>
                <div className="card-body">
                    <h5 className="card-title">{title}...
                    
                    </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author}</small></p>
                    <p className="card-text"><small className="text-muted">{publishedAt}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
    
}

export default NewsItem
