import { LoginFormValues, RegistrationFormValues } from '../../types';
// import {transformRoleName} from '../utils/functions';
import AxiosInstance from './AxiosInstance';

export const getAllCampaigns = async () => {
  const { data } = await AxiosInstance.get(`campaigns`);
  return data?.data.campaigns;
};

export const getCampaign = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`hospitals/${obj.id}`);
  return data;
};

// export const donateToCampaign = async (obj: {id: number}) => {
//   const {data} = await AxiosInstance.get(`hospitals/${obj.id}`);
//   return data;
// };
