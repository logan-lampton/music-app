import { useState, useEffect } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Video from "./Video";
import AddVideo from "./AddVideo";
import Filter from "./Filter";

function App() {
  const [data, setData] = useState([]);

  const getVideos = async () => {
    await axios.get("/api/videos").then((response) => setData(response.data));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <AddVideo setData={setData} />
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 200,
          width: "100px",
        }}
      ></div>
      <Video data={data} setData={setData} />
      <Filter data={data} />
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;

// unused fetch version of GET request:
// useEffect(() => {
//   fetch("/api")
//     .then((res) => res.json())
//     .then((data) => setData(data));
// }, []);
