import { useState, useEffect } from "react";

const hourlyService = ({ zipcode }) => {
  const [hourlyTemp, setHourlyTemp] = useState([]);

  useEffect(() => {
    fetch(
      "https://pro.openweathermap.org/data/2.5/forecast/hourly?zip=55423&appid=0d31ac28d5b7522c7167936c3bc94907&units=imperial&cnt=24"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHourlyTemp(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Makes sure to run after the fetch has gotten the hourly data
  useEffect(() => {
    return hourlyTemp;
  }, [hourlyTemp]);
};

export default hourlyService;
