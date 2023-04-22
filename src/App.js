import Videos from './components/videos.js'
import Grid from "@material-ui/core/Grid";
import NavBar from './components/navbar.js';
import './App.css';

function App() {
  return (
    <div>
       <NavBar/>
      <div className="container">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Videos/>
          </Grid>
          <Grid item xs={6}>
            <Videos/>
          </Grid>
          <Grid item xs={6}>
            <Videos/>
          </Grid>
          <Grid item xs={6}>
            <Videos/>
          </Grid>
        </Grid>
      </div>
    </div>
   
 
  );
}

export default App;
