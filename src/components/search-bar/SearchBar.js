import React, { useState } from 'react';
import ComponentPropsError from '../component-props-error/ComponentsPropsError';
import './style.scss';

const SearchBar = ({ placeholderText, setSearchBarText }) => {
    const [ searchText, setSearchText ] = useState('');
    const propsError = {
        header: 'Somethings wrong!',
        message: 'Please provide setSearchBarText function'
    };

    if (!setSearchBarText && typeof setSearchBarText !== 'function') {
        return (
            <ComponentPropsError header={propsError.header} message={propsError.message} />
        );
    }

    const callSearchText = (event) => {
        setSearchText(event.target.value);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        setSearchBarText(searchText);
        setSearchText('');
    };

    return(
        <form onSubmit={submitSearch}>
            <div className="ui small icon input search-bar-container">
                    <input 
                        type="text" 
                        placeholder={placeholderText || ''} 
                        value={searchText}
                        onChange={e => callSearchText(e)}
                    />
                    <i className="search icon" type="submit"></i>
            </div>
        </form>
    );
};

export default SearchBar;