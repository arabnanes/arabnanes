import { API_ENDPOINTS } from '@framework/utils/endpoints';
import { useQuery } from 'react-query';
import { SettingsResponse } from '@type/index';
import client from '@framework/utils/index'
import request from './utils/request';


export const useSettings = async () => {


  const { data, isLoading, isError, error } = useQuery('settings', async () => {
    const response = await request.get(API_ENDPOINTS.SETTINGS);
    return response.data; // Assuming the API response has a 'data' property
  });
  const queryResult = {
    data,
    isLoading,
    isError,
    error,
  };


  return queryResult

};