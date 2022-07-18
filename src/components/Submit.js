import Button from '@mui/material/Button';

import {setTeams} from '../services/post';

const Submit = (props) => {
    const handleClick = () => {
        setTeams(props.team1, props.team2);
        props.setSubmitted(true);
        window.location.reload(false);
    }

    return (
        <Button onClick={handleClick} variant="contained">Submit Teams For Voting</Button>
    );
}

export default Submit;