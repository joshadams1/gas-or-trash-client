import axios from 'axios';

export const setTeams = async (team1Name, team2Name) => {
    const params = new URLSearchParams();

    params.append('team1', team1Name);
    params.append('team2', team2Name);

    axios.post('https://gas-or-trash.herokuapp.com/set-poll', params);
}

export const addVote = async (team) => {
    const params = new URLSearchParams();

    params.append('add', team);

    axios.post('https://gas-or-trash.herokuapp.com/poll', params);
}