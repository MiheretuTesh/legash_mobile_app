import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../constants/config.keys';
import { getToken } from '../../utils/token.get.set';

export const getPayments = createAsyncThunk('/payments', async (thunkAPI) => {
  try {
    const token = await getToken();
    const { data } = await axios.get(`${config.BASE_URI}/payments`, {
      headers: {
        'x-access-token': token ? `Bearer ${token}` : null,
      },
    });
    return data?.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const getPayment = createAsyncThunk('/payment', async (id, thunkAPI) => {
  try {
    const token = await getToken();

    const { data } = await axios.get(`${config.BASE_URI}/payment/${id}`, {
      headers: {
        'x-access-token': token ? `Bearer ${token}` : null,
      },
    });

    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const createPayment = createAsyncThunk(
  'payment/create',
  async (formData, thunkAPI) => {
    try {
      const token = await getToken();

      const data = await axios.post(`${config.BASE_URI}/payment`, formData, {
        headers: {
          'x-access-token': token ? `Bearer ${token}` : null,
        },
      });
      console.log(data, 'response from the create payment');

      return data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  paymentsData: [],
  paymentData: {},

  paymentsDataLoading: false,
  paymentsDataSuccess: false,
  paymentsDataFailed: false,

  paymentDataLoading: false,
  paymentDataSuccess: false,
  paymentDataFailed: false,

  createPaymentDataLoading: false,
  createPaymentDataSuccess: false,
  createPaymentDataFailed: false,

  campaignsDataError: '',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: {
    [getPayment.pending]: (state) => {
      state.paymentDataLoading = true;
      state.paymentDataSuccess = false;
    },
    [getPayment.fulfilled]: (state, { payload }) => {
      state.paymentDataLoading = false;
      state.paymentDataSuccess = true;
      state.paymentDataFailed = false;
      state.paymentData = payload;
    },
    [getPayment.rejected]: (state, { payload }) => {
      state.paymentDataLoading = false;
      state.paymentDataSuccess = false;
      state.paymentDataFailed = true;
    },
    [getPayments.pending]: (state) => {
      state.paymentsDataLoading = true;
      state.paymentsDataSuccess = false;
    },
    [getPayments.fulfilled]: (state, { payload }) => {
      state.paymentsDataLoading = false;
      state.paymentsDataSuccess = true;
      state.paymentsDataFailed = false;
      state.paymentsData = payload;
    },
    [getPayments.rejected]: (state, { payload }) => {
      state.paymentsDataLoading = false;
      state.paymentsDataSuccess = false;
      state.paymentsDataFailed = true;
    },

    [createPayment.pending]: (state) => {
      state.createPaymentDataLoading = true;
      state.createPaymentDataSuccess = false;
    },
    [createPayment.fulfilled]: (state, { payload }) => {
      state.createPaymentDataLoading = false;
      state.createPaymentDataSuccess = true;
      state.createPaymentDataFailed = false;
    },
    [createPayment.rejected]: (state, { payload }) => {
      state.createPaymentDataLoading = false;
      state.createPaymentDataSuccess = false;
      state.createPaymentDataFailed = true;
    },
  },
});

const { reducer } = paymentSlice;
export default reducer;
