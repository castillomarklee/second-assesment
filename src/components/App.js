import React, { useState } from 'react';
import Header from './header/Header';
import SearchContainer from './search-container/SearchContainer';
import SearchNotification from './search-notificaton/SearchNotification';
import NewsList from './news-list/NewsList';
import Spinner from './spinner/Spinner';
import './style.scss';

export const App = () => {
    const [spinner, setSpinner] = useState(false);
    const [searchCount, setSearchCount] = useState(0);
    const [isSearchError, setIsSearchError] = useState(0);
    const [newsItems, setNewsItems] = useState([]);
    const name = 'Mark Lee Castillo';
    const isLoading = (isShow) => {
        setSpinner(isShow);
    };
    return (
        <div className="ui container main-app-container">
            <Header name={name} />
            <div className="search-container">
                <SearchContainer 
                    isLoading={isLoading} 
                    searchCount={setSearchCount} 
                    setIsSearchError={setIsSearchError} 
                    setNewsItems={setNewsItems} 
                />
                <SearchNotification searchResults={searchCount} isSearchError={isSearchError} />
            </div>
            <div className="news-list-container">
                <NewsList newsItems={newsItems} />
            </div>
            <Spinner isShow={spinner} />
        </div>
    );
};

export default App;