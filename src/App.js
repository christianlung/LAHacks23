import Videos from './components/videos.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left">
        <Videos/>
      </div>
      <div className="right">
        <Videos/>
      </div>
      <div className="left">
        <Videos/>
      </div >
      <div className="right">
        <Videos/>
      </div>
    </div>
  );
}

export default App;
