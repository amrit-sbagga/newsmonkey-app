import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "Nithya P Nair",
            "title": "Telegram Users Can Now Record Livestreams, New Update Brings Chat Themes, More - Gadgets 360",
            "description": "Telegram has released a new update for its app on iOS and Android that allows users to set different themes for individual chats, a new set of interactive emoji with fullscreen effects, and detailed read receipts in group chats. The update also lets users rec…",
            "url": "https://gadgets.ndtv.com/apps/news/telegram-update-features-livestream-record-video-chat-theme-customisation-read-receipts-interactive-emoji-2546873",
            "urlToImage": "https://i.gadgets360cdn.com/large/telegram_new_update_telegram_1632118413530.jpg",
            "publishedAt": "2021-09-20T06:26:14Z",
            "content": "Telegram has announced a major update that will now let users record livestreams and video chats on the app itself. The instant messaging platform's latest update also introduces eight chat themes. E… [+2414 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Firstpost"
            },
            "author": null,
            "title": "Inspiration4 crew tell us what it is like to live in ..ceX's Crew Dragon for three days while orbiting Earth - Firstpost",
            "description": "",
            "url": "https://www.firstpost.com/tech/science/inspiration4-crew-tell-us-what-it-is-like-to-live-in-spacexs-crew-dragon-for-three-days-while-orbiting-earth-9978791.html",
            "urlToImage": "https://images.firstpost.com/wp-content/uploads/2021/09/AP21253524753457-1.jpg",
            "publishedAt": "2021-09-20T06:25:40Z",
            "content": "Agence France-PresseSep 20, 2021 11:55:40 IST\r\nThe first space tourism mission by Elon Musk's SpaceX blasted off from Florida on Wednesday and the four crew members  a billionaire and three other Ame… [+3451 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Insider India"
            },
            "author": "Business Insider India",
            "title": "Report suggests Apple to launch new AirPods Pro, redesigned iPad Pro in 2022 - Business Insider India",
            "description": "Reports suggest Apple is expected to annouce the AirPods Pro earbuds, a redesigned iPad Pro next year. The AirPods models are expected to feature a new design",
            "url": "https://www.businessinsider.in/tech/news/report-suggests-apple-to-launch-new-airpods-pro-redesigned-ipad-pro-in-2022/articleshow/86360971.cms",
            "urlToImage": "https://www.businessinsider.in/photo/86360971/report-suggests-apple-to-launch-new-airpods-pro-redesigned-ipad-pro-in-2022.jpg?imgsize=12814",
            "publishedAt": "2021-09-20T06:14:00Z",
            "content": "Apple recently launched the \r\niPhone 13 series along with the iPad mini and now a new report has claimed that the Cupertino-based tech giant is planning to launch the new MacBook Pros as well as AirP… [+1064 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Actor Suriya's Appeal After NEET Suicides: \"Exams Alone Don't Make Life\" - NDTV",
            "description": "Actor Suriya Sivakumar has reached out to students tormented by the matter of appearing for the National Eligibility cum Entrance Test (NEET), the mandatory entrance test for medical admission. In a 1.54 minute video in Tamil, the actor recalled his",
            "url": "https://www.ndtv.com/south/actor-suriya-sivakumars-twitter-video-appeal-after-neet-suicides-exams-alone-dont-make-life-2546733",
            "urlToImage": "https://c.ndtvimg.com/2021-09/715tp8bg_actor-suriyas-video-appeal-on-twitter-after-neet-suicidessept-20_625x300_20_September_21.jpg",
            "publishedAt": "2021-09-20T06:13:00Z",
            "content": "Actor Suriya Sivakumar made an emotional appeal to students to not end their lives.\r\nChennai: Actor Suriya Sivakumar has reached out to students tormented by the matter of appearing for the National … [+2342 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Actor Sonu Sood Tweets After Tax Raids: \"Every Rupee In My Foundation...\" - NDTV",
            "description": "Actor Sonu Sood, breaking his silence on tax raids at his Mumbai home and offices last week and allegations of tax evasion, said today that \"every rupee\" in his foundation was \"awaiting its turn to save a life.\"",
            "url": "https://www.ndtv.com/india-news/sonu-sood-responds-after-income-tax-department-says-he-evaded-rs-20-crore-in-taxes-2546806",
            "urlToImage": "https://c.ndtvimg.com/2021-09/fp3a8tpg_sonu-sood_650x400_16_September_21.jpg",
            "publishedAt": "2021-09-20T05:48:45Z",
            "content": "Actor Sonu Sood responded in a tweet to the tax raids. (File)\r\nNew Delhi/ Mumbai: Actor Sonu Sood, breaking his silence on tax raids at his Mumbai home and offices last week and allegations of tax ev… [+2451 chars]"
        }]

    constructor(){
        super();
        console.log("constructor..");
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey : Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element) => {                
                   // console.log(element);
                   return (<div key={element.url} className="col-md-4">
                        <NewsItem
                            title={element.title.slice(0, 45)}
                            description={element.description.slice(0, 85)}
                            imgUrl={element.urlToImage} 
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
