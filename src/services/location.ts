import axios from "axios";

export const fetchEncounterLocation = (url: string) =>
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
