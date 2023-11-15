// Import the data from JSON file
import data from "./data.json";

// Define a mock fetch function that returns a Promise with the data

const getFilms = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export default getFilms;
