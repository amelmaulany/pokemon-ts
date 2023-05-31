import axios from "axios";

export const fetchData = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=21"
      );
      if (response.data) resolve(response.data);
    } catch (err: any) {
      const message: string = err.response
        ? `${err.response.data.message}`
        : "Oops, something wrong with our server, please try again later.";
      reject(message);
    }
  });

export const fetchDetails = (url: string) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(url);
      if (response.data) resolve(response.data);
    } catch (err: any) {
      const message: string = err.response
        ? `${err.response.data.message}`
        : "Oops, something wrong with our server, please try again later.";
      reject(message);
    }
  });

export const fetchById = (id: string | number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      if (response.data) resolve(response.data);
    } catch (err: any) {
      const message: string = err.response
        ? `${err.response.data.message}`
        : "Oops, something wrong with our server, please try again later.";
      reject(message);
    }
  });
