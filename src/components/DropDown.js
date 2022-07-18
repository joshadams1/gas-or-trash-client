import {useState, useEffect} from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


const DropDown = (props) => {
    const {teams} = props;

    const handleChange = (event) => {
        props.setTeam(event.target.value);
    };

    return (
        <div>
            <InputLabel>Team {props.teamNumber}</InputLabel>
            <Select
                onChange={handleChange}
            >
                {
                    teams&&teams.map(team => (
                        <MenuItem value={team}>{team}</MenuItem>
                    ))
                }
            </Select>
        </div>
    );
}

export default DropDown;