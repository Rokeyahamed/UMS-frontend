import MyLayout from "./component/layout";
import { useState } from "react";
import API from "../services/api";

export default function Details() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await API.get("/faculty/index");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <MyLayout title="Index" />
      <h1>Index</h1>
      <button onClick={fetchData}>Show Details</button>
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </>
  );
}
