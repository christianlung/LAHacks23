import { useEffect, useRef, useState} from 'react';
import { addDoc, getDocs, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase.js"
import { CircularProgress, Grid} from '@mui/material';
import Router from "next/router"

function App() {
  const fetchVideos = async () => {
    await getDocs(collection(firestore, "videos"))
        .then((querySnapshot)=>{               
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setVideos(newData);       
                console.log(newData);
        })
  }

  const [videos, setVideos] = useState([])

  useEffect(() => { 
    fetchVideos()
  }, [])

  if (videos.length === 0) {
    return <CircularProgress />
  } else {
    return (
      <div className="App">
      <h1>Video List</h1>
      <button onClick={fetchVideos}>Refresh Videos</button>
      <div>
        {videos.map((video) => (
          <div key={video.id} style={{margin: "1rem"}}>
            <h3>{video.title}</h3>
            <iframe
              width="560"
              height="315"
              src={`${video.url}?autoplay=1&mute=1`}
              title={video.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            </div>
        ))}
      </div>
    </div>
    )
  }
 
  // return (
  //   <div className="App">
  //     <form onSubmit={submithandler}>
  //       <input type= "text" ref={dataRef} />
  //       <button type = "submit">Save</button>
  //       <button type = "button" onClick={logData}>Fetch</button>
  //     </form>
  //   </div>
  // // );
  // return (
  //   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  //     <Grid item xs={6}>
  //       <Videos/>
  //     </Grid>
  //     <Grid item xs={6}>
  //       <Videos/>
  //     </Grid>
  //     <Grid item xs={6}>
  //       <Videos/>
  //     </Grid>
  //     <Grid item xs={6}>
  //       <Videos/>
  //     </Grid>
  //   </Grid>
  // );

}
 
export default App;