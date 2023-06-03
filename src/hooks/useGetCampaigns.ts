import { useMutation, useQuery } from 'react-query';
import { getAllCampaigns } from '../api/CampaignService';

export const useGetCampaigns = ({
  onGetCampaignsSuccess,
}: {
  onGetCampaignsSuccess?: () => void;
}) => {
  const {
    data: dataCampaigns,
    isLoading: isLoadingCampaigns,
    isSuccess,
  } = useQuery(['get-campaigns'], () => getAllCampaigns(), {
    onSuccess: onGetCampaignsSuccess,
  });

  return { dataCampaigns, isLoadingCampaigns, isSuccess };
};
