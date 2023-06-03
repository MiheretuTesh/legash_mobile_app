import {
  CHAPA_PUBLIC,
  CHAPA_SECRET,
  CALLBACK_URL,
  CHAPA_TRANSACTIONS_URL,
} from 'react-native-dotenv';

export const chapaPay = () => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${CHAPA_SECRET}`);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    amount: '100',
    currency: 'ETB',
    email: 'abebech_bekele@gmail.com',
    first_name: 'Bilen',
    last_name: 'Gizachew',
    phone_number: '0912345678',
    tx_ref: 'chewatatest-6669',
    callback_url: `${CALLBACK_URL}`,
    return_url: 'https://www.google.com/',
    'customization[title]': 'Payment for my favourite merchant',
    'customization[description]': 'I love online payments',
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('https://api.chapa.co/v1/transaction/initialize', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};
