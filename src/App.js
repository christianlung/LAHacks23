import Videos from './components/videos.js'
import Grid from "@material-ui/core/Grid";
import './App.css';

function App() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
    // <div className="App">
    //   <div className="left">
    //     <Videos/>
    //   </div>
    //   <div className="right">
    //     <Videos/>
    //   </div>
    //   <div className="left">
    //     <Videos/>
    //   </div >
    //   <div className="right">
    //     <Videos/>
    //   </div>
    // </div>
  );
}

export default App;
