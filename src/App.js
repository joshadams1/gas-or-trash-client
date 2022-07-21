import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';

import './App.css';
import TeamSelect from './components/TeamSelect';
import TeamVote from './components/TeamVote';
import Emoji from './components/Emoji';
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
      <h1 style={{fontSize: '100px', marginBottom: '150px'}}>Gas or Trash</h1>
      {!isSubmitted && !hasVoted ? <TeamSelect submitted={setSubmitted} /> : ''}
      <Grid container
        direction="row" 
        justifyContent="center"
        spacing={12}
      >
        <Grid item>
          {isSubmitted ? <img style={{width: '200px', height: '200px', borderStyle: 'none'}} src={images[ polls[0]?.label.replaceAll(' ', '')]} /> : ''}
          {isSubmitted && !hasVoted ? <TeamVote teamName={polls[0].label}  /> : ''}
          {isSubmitted && hasVoted ? <ProgressBar percentage={polls[0].percentage} teamName={polls[0].label}/> : ''}
          {isSubmitted && hasVoted && polls[0]?.percentage !== "50" && polls[1]?.percentage !== "50" ? <Emoji symbol={polls[0]?.percentage > polls[1]?.percentage && polls[0]?.percentage !== 50 && polls[1]?.percentage !== 50 ? "🔥" : "🗑"}/> : ''}
        </Grid>
        <Grid item>
          {isSubmitted ? <img style={{width: '200px', height: '200px', borderStyle: 'none'}} src={images[polls[1]?.label.replaceAll(' ', '')]} /> : ''}
          {isSubmitted && !hasVoted ? <TeamVote teamName={polls[1].label} /> : ''}
          {isSubmitted && hasVoted ? <ProgressBar percentage={polls[1].percentage} teamName={polls[1].label}/> : '' }
          {isSubmitted && hasVoted && polls[0]?.percentage !== "50" && polls[1]?.percentage !== "50" ? <Emoji symbol={polls[1]?.percentage > polls[0]?.percentage ? "🔥" : "🗑"}/> : ''}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
