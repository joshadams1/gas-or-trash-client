import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';

import DropDown from './DropDown';
import {getTeams} from '../services/get';

const TeamSelect = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        async function retrieveTeams() {
            const response = await getTeams();
            console.log('fired', response);
            setTeams(response.data.teams);
        }
        retrieveTeams();
    }, []);

    return (
        <div>
            <Grid container 
                direction="row" 
                justifyContent="center"
                spacing={12}
            >
                <Grid item>
                    <DropDown teams={teams}/>
                </Grid>
                <Grid item>
                    <DropDown teams={teams}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default TeamSelect;