import Button from '@mui/material/Button';

import { addVote } from '../services/post';

const TeamVote = (props) => {
    const handleClick = () => {
        addVote(props.teamName);
        window.location.reload(false);
        window.sessionStorage.setItem("voted", true);
    }

    return(
        <div>
            <h3>{props.teamName}</h3>
            <p>{props.percentage}</p>
            <Button onClick={handleClick} variant="contained">Vote</Button>
        </div>
    )
}

export default TeamVote;