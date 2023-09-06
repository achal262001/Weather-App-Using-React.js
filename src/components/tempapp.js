import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bangalore");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=10e363befb2d4920960192ff1bd5fe0e&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      console.log(resJson);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="input"
            placeholder="Search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <>
            <p className="no_data"> Please Enter The Valid City Name</p>
            <div className="wave"></div>
          </>
        ) : (
          <>
            <div className="info">
              <h2 className="place">
                <i className="fa-solid fa-street-view"></i>
                {search.charAt(0).toUpperCase() + search.slice(1)}
              </h2>
              <h4 className="temp">{city.temp}℃</h4>
              <p className="min">
                Min:{city.temp_min} ℃el | Max:{city.temp_max}
                ℃el
              </p>
            </div>

            <div className="wave"></div>
          </>
        )}
      </div>
    </>
  );
};

export default Tempapp;
