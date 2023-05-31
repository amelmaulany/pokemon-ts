import axios from "axios";

export const fetchEvolutionChain = (id: string | number) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/evolution-chain/${id}`
      );
      if (response.data) resolve(response.data);
    } catch (err: any) {
      const message: string = err.response
        ? `${err.response.data.message}`
        : "Oops, something wrong with our server, please try again later.";
      reject(message);
    }
  });
