import { useState, useEffect } from "react";
import Video from "./Video";
import AddVideo from './AddVideo'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <AddVideo />
      <Video data={data} />
    </div>
  );
}

export default App;
