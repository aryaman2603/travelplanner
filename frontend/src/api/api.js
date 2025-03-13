import axios from "axios";

const API_BASE_URL = "http://localhost:5001/api/destinations";
const API_CONTACT_URL = "http://localhost:5001/api/contact";
const API_SIGNUP_URL = "http://localhost:5001/api/signup";
export const getDestinations = async () => {
    const response = await axios.get(API_BASE_URL);
    return response.data;
};

export const getDestinationById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data;
};

export const addDestination = async (destination) => {
    const response = await axios.post(API_BASE_URL, destination);
    return response.data;
};

export const sendMessage = async(formData) => {
    const response = await axios.post(API_CONTACT_URL, formData);
    return response.data;
}

export const signupUser = async (formData) => {
    const response = await axios.post(API_SIGNUP_URL, formData);
    return response.data;
};