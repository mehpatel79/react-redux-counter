import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

function getUsers() {
    return axiosInstance.get("/users");
}

function getTodos() {
    return axiosInstance.get("/todos");
}

export const API = {
    getUsers,
    getTodos,
};