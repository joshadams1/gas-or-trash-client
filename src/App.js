import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';

import './App.css';
import TeamSelect from './components/TeamSelect';
import TeamVote from './components/TeamVote';
import ProgressBar from './components/ProgressBar';
import images from './assets/images';
import {getPolls} from './services/get';

function App() {
  const [polls, setPolls] = useState([]);
  const [isSubmitted, setSubmitted] = useState(false);

  const hasVoted = window.sessionStorage.getItem("voted") === 'true' ? true : false;

  useEffect(() => {
    async function retrievePolls() {
        const response = await getPolls();
        if (response.data.length === 2) setSubmitted(true);
        setPolls(response.data);
    }
    retrievePolls();
  }, []);

  return (
    <div className="App">
      <h1 style={{fontSize: '100px'}}>Gas or Trash</h1>
      <img style={{width: '200px', height: '200px'}} src={images[ polls[0]?.label.replaceAll(' ', '')]} />
      <img style={{width: '200px', height: '200px'}} src={images[polls[1]?.label.replaceAll(' ', '')]} />
      {!isSubmitted && !hasVoted ? <TeamSelect submitted={setSubmitted} /> : ''}
      <Grid container
        direction="row" 
        justifyContent="center"
        spacing={12}
      >
        <Grid item>
          {isSubmitted && !hasVoted ? <TeamVote teamName={polls[0].label}  /> : ''}
          {isSubmitted && hasVoted ? <ProgressBar percentage={polls[0].percentage} teamName={polls[0].label}/> : ''}
        </Grid>
        <Grid item>
          {isSubmitted && !hasVoted ? <TeamVote teamName={polls[1].label} /> : ''}
          {isSubmitted && hasVoted ? <ProgressBar percentage={polls[1].percentage} teamName={polls[1].label}/> : '' }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
