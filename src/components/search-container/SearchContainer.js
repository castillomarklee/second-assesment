import React from 'react';
import SearchDropDown from '../search-drop-down/SearchDropDown';
import SearchBar from '../search-bar/SearchBar';
import { SEARCH_DROPDOWN, SEARCH_BAR_PLACEHOLDER, NEWS_API } from '../constants/searchConstants';
import { searchNews } from '../api/searchNews';
import './style.scss';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchBarText: '',
            searchCountryText: '',
            searchHeadlineText: ''
        };
    }

    componentDidMount() {
        this.setState({ searchHeadlineText: SEARCH_DROPDOWN.HEADLINES });
    }

    isLoading = (isLoad) => {
        this.props.isLoading(isLoad);
    };

    setSearchBarText = (text) => {
        this.setState({ searchBarText: text }, () => {
            this.searchNews();
        });
    };

    getCountrySearchSelected = (text) => {
        this.setState({ searchCountryText: text });
    };

    getHeadlineSeachSelected = (text) => {
        this.setState({ searchHeadlineText: text });
    };

    setCountries = () => {
        const result = NEWS_API.INIT_COUNTRIES.map(data => {
            return {
                name: data.NAME,
                value: data.COUNTRY_CODE
            };
        });
        return result;
    };

    setHeadlines = () => {
        const result = NEWS_API.HEADLINE.map(data => {
            return {
                name: data.NAME,
                value: data.VALUE
            };
        });
        return result;
    }

    searchNews = () => {
        if (!this.state.searchCountryText && this.state.searchHeadlineText === NEWS_API.HEADLINE[0].VALUE) {
            this.props.setNewsItems([]);
            this.props.setIsSearchError(1);
            return;
        } else if (this.state.searchHeadlineText === NEWS_API.HEADLINE[1].VALUE && !this.state.searchBarText) {
            this.props.setNewsItems([]);
            this.props.setIsSearchError(2);
            return;
        }

        this.isLoading(true);

        searchNews(this.state.searchHeadlineText, this.state.searchCountryText, this.state.searchBarText).then(({ data }) => {
            const { articles } = data;
            this.props.searchCount(articles.length);
            this.props.setIsSearchError(0);
            this.props.setNewsItems(articles);
            this.isLoading(false);
        }).catch((error) => {
            this.isLoading(false);
        });
    };

    render() {
        return(
            <div className ="ui segment search-container">
                <div className="search-flex-container">
                    <div className="flex-box">
                        <SearchDropDown 
                            searchItems={this.setCountries()} 
                            defaultText={SEARCH_DROPDOWN.COUNTRY}
                            getSearchSelected={this.getCountrySearchSelected}
                            isShowDefaults={true}
                        />
                    </div>
                    <div className="flex-box">
                        <SearchDropDown 
                            searchItems={this.setHeadlines()} 
                            defaultText={SEARCH_DROPDOWN.HEADLINES} 
                            getSearchSelected={this.getHeadlineSeachSelected}
                            isShowDefaults={false}
                        /> 
                    </div>
                    <div className="flex-box">
                        <SearchBar placeholderText={SEARCH_BAR_PLACEHOLDER} setSearchBarText={this.setSearchBarText} />
                    </div>
                </div>
            </div>
        );
    }

};

export default SearchContainer;