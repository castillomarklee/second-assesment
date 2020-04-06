import axios from 'axios';
import { NEWS_API } from '../constants/searchConstants';

const newsAPI = axios.create({
    baseURL: `${NEWS_API.API_ROOT_URL}`,
    headers: {
        Authorization: NEWS_API.API_KEY
    }
});

export const searchNews = async (headline, country, searchText) => {
    const headlineAPI = headline || NEWS_API.HEADLINE[1].NAME;
    const API_ENDPOINT = `/v2/${headlineAPI}`;
    const searchTextParams = {
        sortBy: 'popularity',
        q: searchText
    };

    const parameters = (headline === NEWS_API.HEADLINE[1].VALUE) ? searchTextParams : {
        country,
        q: searchText
    };

    const response = await newsAPI.get(API_ENDPOINT, {
        params: parameters
    });

    return response;
};