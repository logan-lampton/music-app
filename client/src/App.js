import { useState, useEffect } from "react";
import Video from './Video';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });

  return (
    <div>
        <p>{data}</p>
        <Video />
    </div>
  );
}

export default App;
