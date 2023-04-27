import { useState, useEffect } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Video from "./Video";
import AddVideo from "./AddVideo";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api").then((response) => setData(response.data));
  }, []);

  return (
    <div>
      <AddVideo />
      <Video data={data} />
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
