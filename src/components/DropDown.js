import {useState, useEffect} from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


const DropDown = (props) => {
    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');
    const {teams} = props;

    
    return (
        <div>
            <InputLabel>Team</InputLabel>
            <Select>
                {
                    teams&&teams.map(team => (
                        <MenuItem>{team}</MenuItem>
                    ))
                }
            </Select>
        </div>
    );
}

export default DropDown;