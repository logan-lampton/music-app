import { useState } from "react";

function Filter({ data, setData }) {
  const [filterType, setFilterType] = useState("all");

  const handleChange = (e) => {
    setFilterType(e.target.value);
  };

  const filterData = () => {
    data.filterData(() => {});
  };

  return (
    <>
      <div>
        <select onChange={handleChange}>
          <option value='all'>All Songs</option>
          <option value='yes'>Just The Good Stuff</option>
          <option value='no'>Rejected</option>
        </select>
      </div>
    </>
  );
}

export default Filter;
