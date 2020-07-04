import axios from "axios";

// NASA APIs
export const getAllEvents = () => axios.get("api/events")
export const saveEvent = (eventData) => axios.post("api/events", eventData);
export const getAsteroid = () => axios.get("api/nasa/asteroid");
export const searchImage = q => axios.get(`api/nasa/image?q=${q}`);
export const getAPOD = () => axios.get("api/nasa/apod");
export const getJobs = () => axios.get("api/nasa/jobs");
export const getRover = () => axios.get("api/nasa/rover");
export const getSpaceXLaunch = () => axios.get("api/nasa/spacex");

// User APIs
export const postLogin = (user) => axios.post("api/login", user);
export const getUsers = () => axios.get("api/users");
export const postSignup = (user) => axios.post("api/signup", user);
export const getLogout = () => axios.get("api/logout")
export const getUserData = () => axios.get("api/user_data");
export const getFavoritesData = (user) => axios.get("api/images", user);
export const updateFavoritesData = (data) => axios.post("api/images", data);
export const deleteFavorite = (data) => axios.delete("api/images", data)
// Posts APIs
export const getAllPosts = () => axios.get("/api/posts");
export const createNewPost = (post) => axios.post("/api/posts", post);

//Post Response APIs
export const getAllResponses = (post) => axios.get("/api/responses", post);
export const createNewResponse = () => axios.post("/api/responses");


//import {getAPOD, getJob} from "/path to API.js"
//getAPOD().then(data=> do something with data;)