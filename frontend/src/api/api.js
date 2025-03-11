import axios from "axios";

const API_BASE_URL = "http://localhost:5001/api/destinations";

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
