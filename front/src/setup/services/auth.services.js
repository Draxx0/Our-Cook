import instance from "./api.service";

const register = async (credentials) => {
  const response = await instance.post("/register", credentials);
  return response;
};

const login = async (credentials) => {
  const response = await instance.post("/login", credentials);
  return response;
};

const authServices = {
 register,
 login,
};

export default authServices;
