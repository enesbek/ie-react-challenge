import axios from "axios";

const GetAllPosts = async () => {
  const response = await axios.get("https://gorest.co.in/public/v2/posts");
  return response.data;
};

const functions = {
  GetAllPosts,
};

export default functions;
