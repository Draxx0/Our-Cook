import instance from "./api.service";

const END_POINT = `/recipes`;

const findAll = async () => {
  const response = await instance.get(END_POINT);
  return response.data;
};

const create = async (credentials) => {
  const response = await instance.post(END_POINT, credentials);
  return response.data;
};

const update = async (id, credentials) => {
  const response = await instance.put(`${END_POINT}/${id}`, credentials);
  return response.data;
};

const remove = async (id) => {
  return await instance.delete(`${END_POINT}/${id}`);
};

const recipeServices = {
  findAll,
  create,
  update,
  remove,
};

export default recipeServices;
