import axios from "axios";

const API_URL = "/api/users/";    // connects to "proxy": "http://localhost:5000" as stated in package.json

// Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);   // sends to http://localhost:5000/ with userData like in postman

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
