import AxiosInstance from './AxiosInstance';

export const getUsers = async (obj: { limit?: number; offset?: number }) => {
  const { data } = await AxiosInstance.get(
    `users/list/${obj.limit || obj.offset ? '?' : ''}${
      obj.limit ? `limit=${obj.limit}` : ''
    }${obj.limit && obj.offset ? '&' : ''}${
      obj.offset ? `offset=${obj.offset}` : ''
    }`
  );
  return data;
};
export const addUser = ({
  obj,
}: {
  obj: {
    firstName?: string;
    lastName?: string;
    email: string;
    role?: string;
  };
}) => {
  return AxiosInstance.post('users/create/', {
    email: obj.email,
    first_name: obj.firstName,
    last_name: obj.lastName,
    type: obj.role,
  });
};

export const editUser = ({
  obj,
  id,
}: {
  obj: {
    firstName?: string;
    lastName?: string;
    email: string;
    jobTitle?: string;
    company?: string;
    role?: string;
    assets: number[];
  };
  id: string;
}) => {
  return AxiosInstance.patch(`users/${id}/`, {
    first_name: obj.firstName,
    last_name: obj.lastName,
    email: obj.email,
    job_title: obj.jobTitle,
    company: obj.company,
    type: obj.role,
    assets: obj.assets,
  });
};

// export const userProfileEdit = ({id, obj}: any) => {
//   return AxiosDynamicContentType('multipart/form-data').patch(
//     `users/${id}`,
//     obj,
//   );
// };

export const deleteUsers = (obj: { ids: number[] }) => {
  return AxiosInstance.post(`users/delete/`, { ids: obj.ids });
};

export const getUserProfileData = async () => {
  const { data } = await AxiosInstance.get('users/fetchUser/');
  return data;
};

export const getUserProfile = async () => {
  const { data } = await AxiosInstance.get(`users/fetchUser/`);
  console.log(data, 'data data data');
  return data;
};

export const searchUser = async (searchValue: string) => {
  return AxiosInstance.get(`users/list?search=${searchValue}`);
};
