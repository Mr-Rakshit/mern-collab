import React, { useState, useEffect } from "react";
import axios from "axios";
const Display = () => {
<<<<<<< HEAD
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
=======
  var [userdata, setUserdata] = useState([]);
  
  useEffect(() => {
    axios.get('/api/userdata')
      .then((response) => {
        setUserdata(response.data);
      })
      .catch((err) => console.log(err))
  }, [])

  console.log("data: " + userdata[0].first_name);
  
  return (
    <div>
      {
        // userdata.foreach(function(data) {
        //   console.log(data.id + " - " + data.first_name + " - " + data.last_name + " - " + data.email);
        // })
        // console.log("data: " + userdata[0].first_name)
      }
>>>>>>> 2e277e41eff7a6a876bc228cabdeefe0c091cdc5
    </div>
  );
};

export default Display;
