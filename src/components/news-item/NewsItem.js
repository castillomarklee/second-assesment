import React from 'react';
import './style.scss';

const NewsItem = ({ imageUrl, title, body, author, articleLink }) => {
    return(
        <div className="news-item-container">
            <div className="news-item-flex-container">
                <div className="news-item-flex-box">
                    <img src={imageUrl} alt={author} />
                </div>
                <div className="news-item-flex-box">
                    <h2><a href={articleLink} target="_blank" rel="noopener noreferrer">{title}</a></h2>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;

