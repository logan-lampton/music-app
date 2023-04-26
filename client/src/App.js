import { useState, useEffect } from "react";
import Video from "./Video";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Video data={data} />
    </div>
  );
}

export default App;
