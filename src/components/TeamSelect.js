import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';

import DropDown from './DropDown';
import Submit from './Submit';
import {getTeams} from '../services/get';
import images from '../assets/images';

const TeamSelect = (props) => {
    const [teams, setTeams] = useState([]);
    const [team1, setTeam1] = useState('');
    const [team2, setTeam2] = useState('');

    useEffect(() => {
        async function retrieveTeams() {
            const response = await getTeams();
            setTeams(response.data.teams);
        }
        retrieveTeams();
    }, []);

    return (
        <div>
            <img style={{width: '200px', height: '200px'}} src={images[team1.replaceAll(' ', '')]} />
            <img style={{width: '200px', height: '200px'}} src={images[team2.replaceAll(' ', '')]} />
            <Grid container
                direction="column" 
                justifyContent="center"
                spacing={12}
            >
                <Grid item>
                    <Grid container 
                        justifyContent="center"
                        spacing={8}
                    >
                        <Grid item>
                            <DropDown teams={teams} teamNumber={1} setTeam={setTeam1}/>
                        </Grid>
                        <Grid item>
                            <DropDown teams={teams} teamNumber={2} setTeam={setTeam2}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container
                        justifyContent="center"
                    >
                        <Grid item>
                            <Submit team1={team1} team2={team2} setSubmitted={props.submitted}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default TeamSelect;