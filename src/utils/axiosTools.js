import axios from "axios";

const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg3ZTA5OWU3LWZmYmUtNGY0Zi04MGZiLWVhZThiNThkZTUxZiIsInVzZXJuYW1lIjoid2lsZGVycyIsImVtYWlsIjoid2lsZGVyc0BnbWFpbC5jb20iLCJyb2xlIjoiVVNFUiIsImNyZWF0ZWRfYXQiOiIyMDIyLTEwLTE4VDE0OjIzOjEyLjc2NFoiLCJ1cGRhdGVkX2F0IjoiMjAyMi0xMC0xOFQxNDoyMjo0Ni43MjdaIiwiaWF0IjoxNjY2MTAzMDY1fQ.uKZd2lUn9iundgu3QVLMNwZwmnxhV3qUzJ3xNB10tW8";

const apiUri = "https://wildify-api.jidayyy.com/api/v1";

const axiosInstance = axios.create({
  baseURL: apiUri,
  headers: {
    Authorization: "Bearer " + accessToken,
    "Content-Type": "multipart/form-data",
  },
});

// Endpoints related to songs

export const songs = {
  getAll: async () => (await axiosInstance.get("/songs")).data,
  getOne: async (id) => (await axiosInstance.get(`songs/${id}`)).data,
  delete: async (id) => (await axiosInstance.delete(`songs/${id}`)).data,
  upload: async (selectedFile) => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    const res = await axiosInstance.post("songs/", formData);
    return res.data;
  },
};

// Endpoints related to albums

export const albums = {
  getAll: async () => (await axiosInstance.get("/albums")).data,
  getOne: async (id) => (await axiosInstance.get(`albums/${id}`)).data,
  delete: async (id) => (await axiosInstance.delete(`albums/${id}`)).data,
  upload: async (selectedPicture, id) => {
    const formData = new FormData();
    formData.append("file", selectedPicture);
    const res = await axiosInstance.post(`albums/${id}/picture`, formData);
    return res.data;
  },
};

// Endpoints related to playlists

export const playlists = {
  getAll: async () => (await axiosInstance.get("/playlists")).data,
  getOne: async (id) => (await axiosInstance.get(`playlists/${id}`)).data,
  delete: async (id) => (await axiosInstance.delete(`playlists/${id}`)).data,
  create: async (title, description, picture) => {
    const formData = new FormData();
    formData.append("description", title);
    formData.append("description", description);
    formData.append("picture", picture);
    const res = await axiosInstance.post("playlists/", formData);
    return res.data;
  },
};

// Endpoints related to genre

export const genres = {
  getAll: async () => (await axiosInstance.get("/genres")).data,
  getOne: async (id) => (await axiosInstance.get(`genres/${id}`)).data,
  delete: async (id) => (await axiosInstance.delete(`genres/${id}`)).data,
};
