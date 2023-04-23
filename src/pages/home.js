import { useEffect, useRef, useState} from 'react';
import { addDoc, getDocs, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase.js"
import { CircularProgress, Grid} from '@mui/material';
import Video from '../components/Video.js';
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container item justifyContent="space-evenly" alignContent="center" wrap="wrap">
          {videos.map((video) => (
            <Grid item key={video.id}>
              <Video url={video.url} sx={{ width: "50%", height: "70%" }}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  }
}
 
export default App;