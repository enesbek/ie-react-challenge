import axios from "axios";

const GetAllPosts = async () => {
  const response = await axios.get(
    "https://gorest.co.in/public/v2/posts?page=1&per_page=10"
  );
  return response.data;
};

const GetPostDetail = async (id) => {
  const response = await axios.get(
    "https://gorest.co.in/public/v2/posts/" + id + "/comments"
  );
  return response.data;
};

const functions = {
  GetAllPosts,
  GetPostDetail,
};

export default functions;
