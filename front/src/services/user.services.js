import instance from "./api.service";

const END_POINT = `/users`;

const findAll = async () => {
  const response = await instance.get(END_POINT);
  return response.data;
};

const create = async (credentials) => {
  const response = await instance.post(END_POINT, credentials);
  return response.data;
};

const remove = async (id) => {
  return await instance.delete(`${END_POINT}/${id}`);
};

const userServices = {
  findAll,
  create,
  remove,
};

export default userServices;
