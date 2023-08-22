import * as React from "react";
import "./App.css";
import "./components/LocationBar";
import LocationBar from "./components/LocationBar";
import Box from "@mui/material/Box";
import TodayInfo from "./components/TodayInfo";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useState } from "react";

function App() {
  var weatherData = {
    city: {
      id: 0,
      name: "Minneapolis",
      coord: {
        lon: -93.2553,
        lat: 44.8756,
      },
      country: "US",
      population: 0,
      timezone: -18000,
    },
    cod: "200",
    message: 8.0142747,
    cnt: 7,
    list: [
      {
        dt: 1692727200,
        sunrise: 1692703394,
        sunset: 1692752944,
        temp: {
          day: 91.4,
          min: 70.11,
          max: 109.83,
          night: 91.18,
          eve: 105.03,
          morn: 70.95,
        },
        feels_like: {
          day: 103.78,
          night: 87.91,
          eve: 101.19,
          morn: 71.28,
        },
        pressure: 1015,
        humidity: 61,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "sky is clear",
            icon: "01d",
          },
        ],
        speed: 12.86,
        deg: 232,
        gust: 26.82,
        clouds: 0,
        pop: 0,
      },
      {
        dt: 1692813600,
        sunrise: 1692789866,
        sunset: 1692839242,
        temp: {
          day: 102.81,
          min: 77.88,
          max: 106.88,
          night: 80.65,
          eve: 99.63,
          morn: 78.22,
        },
        feels_like: {
          day: 101.21,
          night: 81.99,
          eve: 99.55,
          morn: 77.9,
        },
        pressure: 1007,
        humidity: 20,
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        speed: 10.58,
        deg: 63,
        gust: 32.19,
        clouds: 21,
        pop: 0,
      },
      {
        dt: 1692900000,
        sunrise: 1692876337,
        sunset: 1692925540,
        temp: {
          day: 88.63,
          min: 68.38,
          max: 92.34,
          night: 78.17,
          eve: 89.85,
          morn: 68.38,
        },
        feels_like: {
          day: 88.74,
          night: 78.22,
          eve: 89.53,
          morn: 68.49,
        },
        pressure: 1009,
        humidity: 40,
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        speed: 9.8,
        deg: 350,
        gust: 20.13,
        clouds: 38,
        pop: 0,
      },
      {
        dt: 1692986400,
        sunrise: 1692962809,
        sunset: 1693011836,
        temp: {
          day: 88.45,
          min: 69.75,
          max: 88.45,
          night: 78.93,
          eve: 86.5,
          morn: 69.75,
        },
        feels_like: {
          day: 88.21,
          night: 78.93,
          eve: 86.97,
          morn: 69.62,
        },
        pressure: 1013,
        humidity: 39,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        speed: 9.82,
        deg: 21,
        gust: 17.05,
        clouds: 37,
        pop: 0.6,
        rain: 0.75,
      },
      {
        dt: 1693072800,
        sunrise: 1693049280,
        sunset: 1693098132,
        temp: {
          day: 77.14,
          min: 59.36,
          max: 80.04,
          night: 68.2,
          eve: 76.89,
          morn: 59.36,
        },
        feels_like: {
          day: 76.53,
          night: 67.44,
          eve: 76.21,
          morn: 58.95,
        },
        pressure: 1020,
        humidity: 42,
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        speed: 10.85,
        deg: 52,
        gust: 22.64,
        clouds: 32,
        pop: 0,
      },
      {
        dt: 1693159200,
        sunrise: 1693135751,
        sunset: 1693184427,
        temp: {
          day: 84.92,
          min: 59.77,
          max: 88.3,
          night: 74.28,
          eve: 85.19,
          morn: 59.77,
        },
        feels_like: {
          day: 82.9,
          night: 73.24,
          eve: 82.71,
          morn: 59.22,
        },
        pressure: 1014,
        humidity: 31,
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        speed: 5.48,
        deg: 86,
        gust: 14.41,
        clouds: 15,
        pop: 0,
      },
      {
        dt: 1693245600,
        sunrise: 1693222223,
        sunset: 1693270721,
        temp: {
          day: 84.4,
          min: 66.67,
          max: 86.31,
          night: 66.67,
          eve: 78.89,
          morn: 67.35,
        },
        feels_like: {
          day: 83.23,
          night: 66,
          eve: 78.89,
          morn: 66.42,
        },
        pressure: 1009,
        humidity: 37,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        speed: 14.16,
        deg: 348,
        gust: 19.53,
        clouds: 12,
        pop: 0.36,
        rain: 0.56,
      },
    ],
  };
  var hourlyData = {
    cod: "200",
    message: 0,
    cnt: 24,
    list: [
      {
        dt: 1692730800,
        main: {
          temp: 94.53,
          feels_like: 106.23,
          temp_min: 94.53,
          temp_max: 107.04,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 984,
          humidity: 53,
          temp_kf: -6.95,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 11.68,
          deg: 224,
          gust: 19.13,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 19:00:00",
      },
      {
        dt: 1692734400,
        main: {
          temp: 98.74,
          feels_like: 108.77,
          temp_min: 98.74,
          temp_max: 109.76,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 983,
          humidity: 43,
          temp_kf: -6.12,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 12.28,
          deg: 227,
          gust: 18.41,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 20:00:00",
      },
      {
        dt: 1692738000,
        main: {
          temp: 103.05,
          feels_like: 109.35,
          temp_min: 103.05,
          temp_max: 110.8,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 982,
          humidity: 32,
          temp_kf: -4.31,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 12.86,
          deg: 232,
          gust: 17.9,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 21:00:00",
      },
      {
        dt: 1692741600,
        main: {
          temp: 106.93,
          feels_like: 107.91,
          temp_min: 106.93,
          temp_max: 110.82,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 981,
          humidity: 21,
          temp_kf: -2.16,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 12.71,
          deg: 234,
          gust: 17.58,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 22:00:00",
      },
      {
        dt: 1692745200,
        main: {
          temp: 109.83,
          feels_like: 105.69,
          temp_min: 109.83,
          temp_max: 109.83,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 981,
          humidity: 12,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 10.78,
          deg: 239,
          gust: 17.36,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 23:00:00",
      },
      {
        dt: 1692748800,
        main: {
          temp: 105.03,
          feels_like: 101.19,
          temp_min: 105.03,
          temp_max: 105.03,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 980,
          humidity: 14,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 6.67,
          deg: 228,
          gust: 14.58,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-23 00:00:00",
      },
      {
        dt: 1692752400,
        main: {
          temp: 97.47,
          feels_like: 93.79,
          temp_min: 97.47,
          temp_max: 97.47,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 980,
          humidity: 18,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 5.59,
          deg: 206,
          gust: 6.31,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-23 01:00:00",
      },
      {
        dt: 1692756000,
        main: {
          temp: 94.12,
          feels_like: 90.72,
          temp_min: 94.12,
          temp_max: 94.12,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 980,
          humidity: 21,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 5.66,
          deg: 201,
          gust: 11.79,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-23 02:00:00",
      },
      {
        dt: 1692759600,
        main: {
          temp: 91.76,
          feels_like: 88.5,
          temp_min: 91.76,
          temp_max: 91.76,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 980,
          humidity: 23,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 4.54,
          deg: 229,
          gust: 13.53,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-23 03:00:00",
      },
      {
        dt: 1692763200,
        main: {
          temp: 91.18,
          feels_like: 87.91,
          temp_min: 91.18,
          temp_max: 91.18,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 980,
          humidity: 23,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 16,
        },
        wind: {
          speed: 4.56,
          deg: 232,
          gust: 12.37,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-23 04:00:00",
      },
      {
        dt: 1692766800,
        main: {
          temp: 90.99,
          feels_like: 87.85,
          temp_min: 90.99,
          temp_max: 90.99,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 980,
          humidity: 24,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 32,
        },
        wind: {
          speed: 4.63,
          deg: 228,
          gust: 13.49,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-23 05:00:00",
      },
      {
        dt: 1692770400,
        main: {
          temp: 91.17,
          feels_like: 88.05,
          temp_min: 91.17,
          temp_max: 91.17,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 980,
          humidity: 24,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 43,
        },
        wind: {
          speed: 6.11,
          deg: 206,
          gust: 17.02,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-23 06:00:00",
      },
      {
        dt: 1692774000,
        main: {
          temp: 91.38,
          feels_like: 88.86,
          temp_min: 91.38,
          temp_max: 91.38,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 980,
          humidity: 27,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 95,
        },
        wind: {
          speed: 8.75,
          deg: 234,
          gust: 21.14,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-23 07:00:00",
      },
      {
        dt: 1692777600,
        main: {
          temp: 91.04,
          feels_like: 88.92,
          temp_min: 91.04,
          temp_max: 91.04,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 979,
          humidity: 29,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 78,
        },
        wind: {
          speed: 10.4,
          deg: 225,
          gust: 32.19,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-23 08:00:00",
      },
      {
        dt: 1692781200,
        main: {
          temp: 89.24,
          feels_like: 87.26,
          temp_min: 89.24,
          temp_max: 89.24,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 980,
          humidity: 31,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 76,
        },
        wind: {
          speed: 8.57,
          deg: 250,
          gust: 25.97,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-23 09:00:00",
      },
      {
        dt: 1692784800,
        main: {
          temp: 85.87,
          feels_like: 84.72,
          temp_min: 85.87,
          temp_max: 85.87,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 980,
          humidity: 37,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 80,
        },
        wind: {
          speed: 5.93,
          deg: 273,
          gust: 22.75,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-23 10:00:00",
      },
      {
        dt: 1692788400,
        main: {
          temp: 81.84,
          feels_like: 81.43,
          temp_min: 81.84,
          temp_max: 81.84,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 980,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 84,
        },
        wind: {
          speed: 5.55,
          deg: 305,
          gust: 16.67,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-23 11:00:00",
      },
      {
        dt: 1692792000,
        main: {
          temp: 78.22,
          feels_like: 77.9,
          temp_min: 78.22,
          temp_max: 78.22,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 981,
          humidity: 46,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 82,
        },
        wind: {
          speed: 6.4,
          deg: 317,
          gust: 15.48,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-23 12:00:00",
      },
      {
        dt: 1692795600,
        main: {
          temp: 77.88,
          feels_like: 77.63,
          temp_min: 77.88,
          temp_max: 77.88,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 981,
          humidity: 48,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 48,
        },
        wind: {
          speed: 4.79,
          deg: 327,
          gust: 9.91,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-23 13:00:00",
      },
      {
        dt: 1692799200,
        main: {
          temp: 81.91,
          feels_like: 81.73,
          temp_min: 81.91,
          temp_max: 81.91,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 981,
          humidity: 43,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 37,
        },
        wind: {
          speed: 4.5,
          deg: 320,
          gust: 8.23,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-23 14:00:00",
      },
      {
        dt: 1692802800,
        main: {
          temp: 86.43,
          feels_like: 85.33,
          temp_min: 86.43,
          temp_max: 86.43,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 981,
          humidity: 37,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 33,
        },
        wind: {
          speed: 3.02,
          deg: 315,
          gust: 6.06,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-23 15:00:00",
      },
      {
        dt: 1692806400,
        main: {
          temp: 92.73,
          feels_like: 91,
          temp_min: 92.73,
          temp_max: 92.73,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 981,
          humidity: 29,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 30,
        },
        wind: {
          speed: 2.68,
          deg: 285,
          gust: 6.02,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-23 16:00:00",
      },
      {
        dt: 1692810000,
        main: {
          temp: 98.53,
          feels_like: 97.07,
          temp_min: 98.53,
          temp_max: 98.53,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 980,
          humidity: 24,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03d",
          },
        ],
        clouds: {
          all: 26,
        },
        wind: {
          speed: 3.56,
          deg: 273,
          gust: 8.28,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-23 17:00:00",
      },
      {
        dt: 1692813600,
        main: {
          temp: 102.81,
          feels_like: 101.21,
          temp_min: 102.81,
          temp_max: 102.81,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 980,
          humidity: 20,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 21,
        },
        wind: {
          speed: 4.79,
          deg: 285,
          gust: 11.07,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-23 18:00:00",
      },
    ],
    city: {
      id: 0,
      name: "Minneapolis",
      coord: {
        lat: 44.8756,
        lon: -93.2553,
      },
      country: "US",
      population: 0,
      timezone: -18000,
      sunrise: 1692703394,
      sunset: 1692752944,
    },
  };
  const [zipcode, setZipcode] = useState("88901");
  const handleZipcode = (e) => {
    setZipcode(e.target.value);
    console.log(zipcode);
  };
  return (
    <Box
      p={2}
      sx={{
        background: "linear-gradient(to right, #FBAB7E, #F7CE68)",
      }}
      height="100vh"
    >
      <LocationBar handleZipcode={handleZipcode} />
      <TodayInfo weatherData={weatherData} />
      <Stack
        direction="row"
        justifyContent="space-evenly"
        divider={<Divider orientation="vertical" variant="middle" flexItem />}
      >
        <HourlyForecast hourlyData={hourlyData} />
        <WeeklyForecast weatherData={weatherData} />
      </Stack>
    </Box>
  );
}

export default App;
