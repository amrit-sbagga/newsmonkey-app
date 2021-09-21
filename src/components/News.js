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
                    <div className="col-md-4">
                        <NewsItem title="mytitle1" description="mydescription" imgUrl="https://i.gadgets360cdn.com/large/telegram_new_update_telegram_1632118413530.jpg" />
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
