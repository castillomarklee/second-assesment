import React from 'react';
import NewsItem from '../news-item/NewsItem';

const NewsList = ({ newsItems }) => {
    if (!newsItems.length) {
        return <div></div>;
    }
    const news = newsItems.map((data, key) => {
        return (
            <div className="ui segment" key={key}>
                <NewsItem 
                    imageUrl={data.urlToImage} 
                    title={data.title} 
                    body={data.description} 
                    author={data.author}
                    articleLink={data.url}
                />
            </div>
        );
    });
    return(
        <div className="news-list-main-container">
            {news}
        </div>
    );
};

export default NewsList;