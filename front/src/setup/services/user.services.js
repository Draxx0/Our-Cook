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

const userServices = {
  findAll,
  findeOne,
  remove,
};

export default userServices;
