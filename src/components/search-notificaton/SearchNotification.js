import React from 'react';
import './style.scss';

const SearchNotification = ({ searchResults, isSearchError }) => {
    const errorMessage = (isSearchError === 1) ? 'Please specify country.' : 'Please specify specific article!';  
    if (isSearchError !== 0) {
        return (
            <div className="ui segment search-notification-container">
                <h2>{errorMessage}</h2>
            </div>
        );
    }
    return (
        <div className="ui segment search-notification-container">
            <h2>Search Results!</h2>
            <h5>Found {searchResults} articles</h5>
        </div>
    );
};

export default SearchNotification;