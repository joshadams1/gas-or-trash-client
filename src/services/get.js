import axios from 'axios';

export const getTeams = async () => {
    const request = await axios({
        method: 'get',
        url: 'https://gas-or-trash.herokuapp.com/teams'
    });
    return request;
}