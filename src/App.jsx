import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);

  return (
    <div>
      <h1>Firebase esimerkki</h1>
      <p>Data haetaan sivulta https://jsonplaceholder.typicode.com/users</p>
      Users
      {post.map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;


