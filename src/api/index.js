import axios from "axios";

const request = axios.create({
   baseURL: 'https://api.nasa.gov/neo/rest/v1/',
   headers: {
      "Content-type": "application/json; charset=UTF-8",
   },
})

export const getAsteroids = async (currentDate) => {

   const { data } = await request.get(`feed?start_date=${currentDate}&api_key=DEMO_KEY`);

   return data.near_earth_objects
}

export const getAsteroidsDetail = async (id) => {

   const { data } = await request.get(`neo/${id}?api_key=DEMO_KEY`);

   return data.close_approach_data
}

