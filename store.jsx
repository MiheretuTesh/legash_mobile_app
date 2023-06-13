import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/features/auth/auth.Slice';
import campaignReducer from './src/features/campaign/campaign.Slice';
import transactionReducer from './src/features/transaction/transaction.Slice';
import userReducer from './src/features/user/user.Slice';
import paymentReducer from './src/features/payment/payment.Slice';
// import dashboardReducer from './features/dashboard/dashboard.Slice';
// import houseReducer from './features/house/house.Slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    campaign: campaignReducer,
    user: userReducer,
    transaction: transactionReducer,
    payment: paymentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
