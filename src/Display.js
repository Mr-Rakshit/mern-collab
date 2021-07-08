import React, { useState, useEffect } from "react";

const Display = () => {
  const [userdata, setUserdata] = useState({});
  useEffect(() => {
    async function fetchData() {
      fetch("/userdata", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("yaha hua");
          console.log(json);
          setUserdata(json);
        });
      console.log(userdata);
    }

    fetchData();
  }, []);

  const { first_name, last_name, email } = userdata;

  return (
    <div>
      <h1>{first_name}</h1>
      <h1>{last_name}</h1>
      <h1>{email}</h1>
    </div>
  );
};

export default Display;
