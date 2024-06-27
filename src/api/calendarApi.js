import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

//Configurar interceptores, interceptamos la petición para añadir nuestro header personalizado
//cualquier petición que realicemos a nuestro calendarApi debera contar con un x-token valido
//la petición tendrá respuesta solo si el usuario está logeado
calendarApi.interceptors.request.use( config => {
   
    
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
});

export default calendarApi;