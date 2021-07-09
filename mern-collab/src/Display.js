import React, { useState, useEffect } from "react";
import axios from "axios";
const Display = () => {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    console.log("hey");
    axios
      .get("/api/userdata")
      .then((response) => {
        setUserdata(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("1");
  console.log(userdata);

  return (
    <div>
      {userdata.map((curr) => {
        return (
          <div key={curr._id}>
            <p>{curr.first_name}</p>
            <p>{curr.last_name}</p>
            <p>{curr.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
