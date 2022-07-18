import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';

import './App.css';
import TeamSelect from './components/TeamSelect';
import TeamVote from './components/TeamVote';
import ProgressBar from './components/ProgressBar';
import {getPolls} from './services/get';

function App() {
  const [polls, setPolls] = useState([]);
  const [isSubmitted, setSubmitted] = useState(false);

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
      {!isSubmitted && <TeamSelect submitted={setSubmitted}/>}
      <Grid container
        direction="row" 
        justifyContent="center"
        spacing={12}
      >
        <Grid item>
          {isSubmitted && <TeamVote teamName={polls[0].label}/>}
          {isSubmitted && <ProgressBar percentage={polls[0].percentage} />}
        </Grid>
        <Grid item>
          {isSubmitted && <TeamVote teamName={polls[1].label}/>}
          {isSubmitted && <ProgressBar percentage={polls[1].percentage} />}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
