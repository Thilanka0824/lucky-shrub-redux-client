import axios from "axios";
//this is the url that the front end will use to make requests to the backend. it is the same as the one in the backend.
const Axios = axios.create({
  baseURL: "http://localhost:3001/api",
  timeout: 3000,
});

//axios interceptors are functions that will run before the request is made and before the response is sent back to the front end.
//axios create will create a new instance of axios with the specified configuration.
//this interceptor will run before the request is made.
export default Axios;
