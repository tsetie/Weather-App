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
    message: 4.6325916,
    cnt: 7,
    list: [
      {
        dt: 1692640800,
        sunrise: 1692616922,
        sunset: 1692666645,
        temp: {
          day: 82.9,
          min: 62.51,
          max: 82.9,
          night: 78.69,
          eve: 78.98,
          morn: 63.3,
        },
        feels_like: {
          day: 84.33,
          night: 78.57,
          eve: 78.98,
          morn: 62.38,
        },
        pressure: 1020,
        humidity: 53,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        speed: 12.17,
        deg: 73,
        gust: 31,
        clouds: 100,
        pop: 0,
      },
      {
        dt: 1692727200,
        sunrise: 1692703394,
        sunset: 1692752944,
        temp: {
          day: 101.95,
          min: 70.84,
          max: 112.32,
          night: 91.38,
          eve: 104.81,
          morn: 70.84,
        },
        feels_like: {
          day: 105.1,
          night: 89.1,
          eve: 102.38,
          morn: 70.59,
        },
        pressure: 1012,
        humidity: 29,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "sky is clear",
            icon: "01d",
          },
        ],
        speed: 12.37,
        deg: 132,
        gust: 31.12,
        clouds: 0,
        pop: 0.04,
      },
      {
        dt: 1692813600,
        sunrise: 1692789866,
        sunset: 1692839242,
        temp: {
          day: 98.49,
          min: 80.42,
          max: 103.41,
          night: 81.57,
          eve: 98.87,
          morn: 82.8,
        },
        feels_like: {
          day: 97.86,
          night: 82.74,
          eve: 99.37,
          morn: 81.77,
        },
        pressure: 1007,
        humidity: 26,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        speed: 9.28,
        deg: 47,
        gust: 25.81,
        clouds: 54,
        pop: 0,
      },
      {
        dt: 1692900000,
        sunrise: 1692876337,
        sunset: 1692925540,
        temp: {
          day: 88.79,
          min: 70.9,
          max: 92.64,
          night: 80.08,
          eve: 89.51,
          morn: 70.9,
        },
        feels_like: {
          day: 89.26,
          night: 81.07,
          eve: 89.37,
          morn: 71.08,
        },
        pressure: 1008,
        humidity: 41,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "sky is clear",
            icon: "01d",
          },
        ],
        speed: 10.51,
        deg: 352,
        gust: 21.03,
        clouds: 5,
        pop: 0,
      },
      {
        dt: 1692986400,
        sunrise: 1692962809,
        sunset: 1693011836,
        temp: {
          day: 90.95,
          min: 69.69,
          max: 91.04,
          night: 69.69,
          eve: 86.2,
          morn: 70.5,
        },
        feels_like: {
          day: 91.4,
          night: 69.66,
          eve: 84.38,
          morn: 70.59,
        },
        pressure: 1010,
        humidity: 38,
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        speed: 14.03,
        deg: 29,
        gust: 27.22,
        clouds: 17,
        pop: 0.56,
        rain: 1.41,
      },
      {
        dt: 1693072800,
        sunrise: 1693049280,
        sunset: 1693098132,
        temp: {
          day: 68.79,
          min: 60.93,
          max: 73.71,
          night: 66.31,
          eve: 73.02,
          morn: 60.93,
        },
        feels_like: {
          day: 68.14,
          night: 65.55,
          eve: 72.28,
          morn: 60.24,
        },
        pressure: 1022,
        humidity: 59,
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        speed: 13.49,
        deg: 35,
        gust: 24.61,
        clouds: 100,
        pop: 0,
      },
      {
        dt: 1693159200,
        sunrise: 1693135751,
        sunset: 1693184427,
        temp: {
          day: 78.89,
          min: 62.94,
          max: 83.82,
          night: 70.68,
          eve: 81.07,
          morn: 62.94,
        },
        feels_like: {
          day: 78.89,
          night: 69.62,
          eve: 80.17,
          morn: 62.22,
        },
        pressure: 1019,
        humidity: 39,
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        speed: 6.13,
        deg: 121,
        gust: 13.65,
        clouds: 69,
        pop: 0,
      },
    ],
  };
  var hourlyData = {
    cod: "200",
    message: 0,
    cnt: 24,
    list: [
      {
        dt: 1692655200,
        main: {
          temp: 75.31,
          feels_like: 75.78,
          temp_min: 75.31,
          temp_max: 92.95,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 989,
          humidity: 69,
          temp_kf: -9.8,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.08,
          deg: 121,
          gust: 9.06,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-21 22:00:00",
      },
      {
        dt: 1692658800,
        main: {
          temp: 78.57,
          feels_like: 79.09,
          temp_min: 78.57,
          temp_max: 91.63,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 989,
          humidity: 63,
          temp_kf: -7.26,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 6.15,
          deg: 92,
          gust: 8.86,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-21 23:00:00",
      },
      {
        dt: 1692662400,
        main: {
          temp: 79.45,
          feels_like: 79.45,
          temp_min: 79.45,
          temp_max: 85.68,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 989,
          humidity: 61,
          temp_kf: -3.46,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 11.1,
          deg: 70,
          gust: 15.28,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 00:00:00",
      },
      {
        dt: 1692666000,
        main: {
          temp: 78.89,
          feels_like: 78.89,
          temp_min: 78.89,
          temp_max: 81.27,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 989,
          humidity: 60,
          temp_kf: -1.32,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 12.17,
          deg: 73,
          gust: 23.22,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 01:00:00",
      },
      {
        dt: 1692669600,
        main: {
          temp: 78.66,
          feels_like: 78.91,
          temp_min: 78.66,
          temp_max: 79.48,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 988,
          humidity: 57,
          temp_kf: -0.46,
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
          all: 100,
        },
        wind: {
          speed: 11.9,
          deg: 84,
          gust: 28.99,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-22 02:00:00",
      },
      {
        dt: 1692673200,
        main: {
          temp: 78.8,
          feels_like: 78.8,
          temp_min: 78.8,
          temp_max: 78.8,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 988,
          humidity: 51,
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
          all: 99,
        },
        wind: {
          speed: 11.88,
          deg: 93,
          gust: 29.55,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-22 03:00:00",
      },
      {
        dt: 1692676800,
        main: {
          temp: 78.69,
          feels_like: 78.57,
          temp_min: 78.69,
          temp_max: 78.69,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 988,
          humidity: 49,
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
          all: 97,
        },
        wind: {
          speed: 11.88,
          deg: 106,
          gust: 31,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-22 04:00:00",
      },
      {
        dt: 1692680400,
        main: {
          temp: 78.35,
          feels_like: 78.19,
          temp_min: 78.35,
          temp_max: 78.35,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 988,
          humidity: 49,
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
          all: 91,
        },
        wind: {
          speed: 12.1,
          deg: 115,
          gust: 31.12,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-22 05:00:00",
      },
      {
        dt: 1692684000,
        main: {
          temp: 77.34,
          feels_like: 77.18,
          temp_min: 77.34,
          temp_max: 77.34,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 988,
          humidity: 51,
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
          speed: 12.15,
          deg: 124,
          gust: 30.62,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-22 06:00:00",
      },
      {
        dt: 1692687600,
        main: {
          temp: 75.9,
          feels_like: 75.63,
          temp_min: 75.9,
          temp_max: 75.9,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 988,
          humidity: 52,
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
          all: 4,
        },
        wind: {
          speed: 11.45,
          deg: 130,
          gust: 30.62,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-22 07:00:00",
      },
      {
        dt: 1692691200,
        main: {
          temp: 74.66,
          feels_like: 74.37,
          temp_min: 74.66,
          temp_max: 74.66,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 988,
          humidity: 54,
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
          all: 3,
        },
        wind: {
          speed: 11.01,
          deg: 130,
          gust: 28.68,
        },
        visibility: 10000,
        pop: 0.04,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-22 08:00:00",
      },
      {
        dt: 1692694800,
        main: {
          temp: 73.47,
          feels_like: 73.15,
          temp_min: 73.47,
          temp_max: 73.47,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 987,
          humidity: 56,
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
          all: 2,
        },
        wind: {
          speed: 11.54,
          deg: 128,
          gust: 28.05,
        },
        visibility: 10000,
        pop: 0.04,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-22 09:00:00",
      },
      {
        dt: 1692698400,
        main: {
          temp: 72.43,
          feels_like: 72.05,
          temp_min: 72.43,
          temp_max: 72.43,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 987,
          humidity: 57,
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
          all: 2,
        },
        wind: {
          speed: 12.21,
          deg: 129,
          gust: 28.97,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-22 10:00:00",
      },
      {
        dt: 1692702000,
        main: {
          temp: 71.46,
          feels_like: 71.11,
          temp_min: 71.46,
          temp_max: 71.46,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 987,
          humidity: 60,
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
          speed: 12.37,
          deg: 132,
          gust: 29.17,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: "n",
        },
        dt_txt: "2023-08-22 11:00:00",
      },
      {
        dt: 1692705600,
        main: {
          temp: 70.84,
          feels_like: 70.59,
          temp_min: 70.84,
          temp_max: 70.84,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 987,
          humidity: 63,
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
          all: 1,
        },
        wind: {
          speed: 11.81,
          deg: 134,
          gust: 27.54,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 12:00:00",
      },
      {
        dt: 1692709200,
        main: {
          temp: 72.73,
          feels_like: 72.57,
          temp_min: 72.73,
          temp_max: 72.73,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 987,
          humidity: 61,
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
          speed: 11.81,
          deg: 137,
          gust: 25.05,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 13:00:00",
      },
      {
        dt: 1692712800,
        main: {
          temp: 77.22,
          feels_like: 77.45,
          temp_min: 77.22,
          temp_max: 77.22,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 987,
          humidity: 60,
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
          speed: 11.79,
          deg: 149,
          gust: 18.9,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 14:00:00",
      },
      {
        dt: 1692716400,
        main: {
          temp: 84.04,
          feels_like: 86.56,
          temp_min: 84.04,
          temp_max: 84.04,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 987,
          humidity: 56,
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
          speed: 9.82,
          deg: 167,
          gust: 16.02,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 15:00:00",
      },
      {
        dt: 1692720000,
        main: {
          temp: 91.47,
          feels_like: 95.97,
          temp_min: 91.47,
          temp_max: 91.47,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 986,
          humidity: 47,
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
          speed: 8.14,
          deg: 179,
          gust: 13.42,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 16:00:00",
      },
      {
        dt: 1692723600,
        main: {
          temp: 97.65,
          feels_like: 101.64,
          temp_min: 97.65,
          temp_max: 97.65,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 985,
          humidity: 36,
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
          speed: 8.46,
          deg: 199,
          gust: 13.11,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 17:00:00",
      },
      {
        dt: 1692727200,
        main: {
          temp: 101.95,
          feels_like: 105.1,
          temp_min: 101.95,
          temp_max: 101.95,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 984,
          humidity: 29,
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
          speed: 8.68,
          deg: 212,
          gust: 13.56,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 18:00:00",
      },
      {
        dt: 1692730800,
        main: {
          temp: 105.87,
          feels_like: 107.65,
          temp_min: 105.87,
          temp_max: 105.87,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 984,
          humidity: 23,
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
          speed: 8.39,
          deg: 226,
          gust: 16.06,
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
          temp: 109.78,
          feels_like: 108.39,
          temp_min: 109.78,
          temp_max: 109.78,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 983,
          humidity: 16,
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
          speed: 8.21,
          deg: 219,
          gust: 17.45,
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
          temp: 112.15,
          feels_like: 108.39,
          temp_min: 112.15,
          temp_max: 112.15,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 982,
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
          speed: 9.69,
          deg: 235,
          gust: 16.69,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2023-08-22 21:00:00",
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
      sunrise: 1692616922,
      sunset: 1692666645,
    },
  };
  return (
    <Box
      p={2}
      sx={{
        background: "linear-gradient(to right, #FBAB7E, #F7CE68)",
      }}
      height="100vh"
    >
      <LocationBar />
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
