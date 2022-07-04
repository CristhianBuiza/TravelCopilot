import axios from "axios";
const UrlBase =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

export const getPlacesData = async (type, lat, lng) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        params: {
          latitude: lat,
          longitude: lng,
        },
        headers: {
          "X-RapidAPI-Key":
            "d3282c9c9cmsh61ab40d8ff0166ap13670fjsn3a08c977286b",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (e) {}
};
