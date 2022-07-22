import Button from '@mui/material/Button';
import { addVote } from '../services/post';

const Reset = () => {
    const handleClick = () => {
        addVote({});
        window.location.reload(false);
    }

    return (
        <Button onClick={handleClick} variant="contained">Reset Vote</Button>
    );
}

export default Reset;