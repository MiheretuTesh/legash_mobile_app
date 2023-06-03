import { LoginFormValues, RegistrationFormValues } from '../../types';
// import {transformRoleName} from '../utils/functions';
import AxiosInstance from './AxiosInstance';

export const getAllDonation = async () => {
  const { data } = await AxiosInstance.get(`payment`);
  return data?.data.campaigns;
};

export const getDonation = async (obj: { id: number }) => {
  const { data } = await AxiosInstance.get(`payment/${obj.id}`);
  return data;
};

export const addDonation = (obj: any) => {
  return AxiosInstance.post('campaigns', {
    // patientId: obj.patientId,
    patientId: '645deff325c039ad7a152d1f',

    // hospitalId: obj.hospitalId,
    hospitalId: '645df3d525c039ad7a152d26',

    targetFunding: obj.targetFunding,
    treatmentRequired: obj.treatmentRequired,
    diagnosis: obj.diagnosis,
    startDate: obj.startDate,
    endDate: obj.endDate,
    currentFundedAmount: obj.currentFundedAmount,
  });
};

// export const donateToCampaign = async (obj: {id: number}) => {
//   const {data} = await AxiosInstance.get(`hospitals/${obj.id}`);
//   return data;
// }
