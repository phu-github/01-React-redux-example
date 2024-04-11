import axiosClient from "./axios_config/axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url);
  },
  delete: (url) => {
    return axiosClient.delete(url);
  },
  create: (body) => {
    const config = {
      headers: {
        "X-Sfs-Device": "mobile",
      },
    };
    return axiosClient.post("/procurement", body, config);
  },
  update: (params) => {
    const url = "/products";
    return axiosClient.put(url);
  },
};

export default productApi;
