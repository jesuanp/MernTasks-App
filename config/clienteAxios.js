import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://arcane-lake-54408.herokuapp.com/api/'
});

export default clienteAxios;
