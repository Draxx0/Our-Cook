import instance from "./api.service";

const END_POINT = `/users`;

const findAll = async () => {
  const response = await instance.get(END_POINT);
  return response.data;
};

const findeOne = async (id) => {
  const response = await instance.get(`${END_POINT}/${id}`);
  return response.data;
};

const remove = async (id) => {
  return await instance.delete(`${END_POINT}/${id}`);
};

const update = async (id, credentials) => {
  const response = await instance.put(`${END_POINT}/${id}`, credentials);
  return response.data;
};

const userServices = {
  findAll,
  findeOne,
  remove,
  update
};

export default userServices;
