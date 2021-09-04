import request from '../utils/http';

export const fetchData = (query: any) => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};