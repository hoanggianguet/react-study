import axios from "axios";

const searchImage = async (term) => {
   const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID FYLDPe54Xex0CORMIhfCDqtOtBHcKDMP6kQmCV6Va-o",
    },
    params: {
      query: term,
    },
  });

   return response.data.results;
};

export default searchImage;