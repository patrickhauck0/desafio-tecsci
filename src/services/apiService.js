import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
});

export default {
    getNomes() {
        return apiClient.get('');
    },
    getNomesByName(name) {
        return apiClient.get(`${name}`);
    },
    getNomeBySexo(sexo) {
        return apiClient.get(`${sexo}`);
    }
};