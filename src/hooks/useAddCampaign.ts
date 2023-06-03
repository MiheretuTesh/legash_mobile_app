import { useMutation } from 'react-query';
import { addDonation } from '../api/DonationService';

export const useAddDonation = ({
  onSuccess,
  onError,
}: {
  onSuccess: (x: any, values: any) => void;
  onError: (error: any) => void;
}) => {
  return useMutation(addDonation, { onSuccess, onError });
};
