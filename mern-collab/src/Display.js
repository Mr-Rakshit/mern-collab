import React, { useState, useEffect } from "react";
import axios from "axios";
const Display = () => {
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
    </div>
  );
};

export default Display;
