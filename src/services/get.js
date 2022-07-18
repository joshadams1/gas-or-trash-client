import axios from 'axios';

export const getTeams = async () => {
    const request = await axios({
        method: 'get',
        url: 'https://gas-or-trash.herokuapp.com/teams'
    });
    return request;
}

export const getPolls = async () => {
    const request = await axios({
        method: 'get',
        url: 'https://gas-or-trash.herokuapp.com/poll'
    });
    return request;
}