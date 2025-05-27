import axios from 'axios';

const API_URL = 'http://localhost:3000';

const adminApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests
adminApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const userService = {
    getAll: async () => {
        const response = await adminApi.get('/users');
        return response.data;
    },

    getById: async (id) => {
        const response = await adminApi.get(`/users/${id}`);
        return response.data;
    },

    create: async (data) => {
        const response = await adminApi.post('/users', data);
        return response.data;
    },

    update: async (id, data) => {
        const response = await adminApi.put(`/users/${id}`, data);
        return response.data;
    },

    delete: async (id) => {
        const response = await adminApi.delete(`/users/${id}`);
        return response.data;
    },
};

export const categoryService = {
    getAll: async () => {
        const response = await adminApi.get('/categories');
        return response.data;
    },

    getById: async (id) => {
        const response = await adminApi.get(`/categories/${id}`);
        return response.data;
    },

    create: async (data) => {
        const response = await adminApi.post('/categories', data);
        return response.data;
    },

    update: async (id, data) => {
        const response = await adminApi.put(`/categories/${id}`, data);
        return response.data;
    },

    delete: async (id) => {
        const response = await adminApi.delete(`/categories/${id}`);
        return response.data;
    },
};

export const tagService = {
    getAll: async () => {
        const response = await adminApi.get('/tags');
        return response.data;
    },

    getById: async (id) => {
        const response = await adminApi.get(`/tags/${id}`);
        return response.data;
    },

    create: async (data) => {
        const response = await adminApi.post('/tags', data);
        return response.data;
    },

    update: async (id, data) => {
        const response = await adminApi.put(`/tags/${id}`, data);
        return response.data;
    },

    delete: async (id) => {
        const response = await adminApi.delete(`/tags/${id}`);
        return response.data;
    },
};

export default adminApi; 