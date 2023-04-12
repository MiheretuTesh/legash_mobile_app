const CHAPA_PUBLIC = 'CHAPUBK_TEST-O2KrWVKYnILgNy9rawJtszhEkDSbedA1';
const CHAPA_SECRET = 'CHASECK_TEST-K19QmMo2U8T2ZVoYjkTnaiy4FOqPVCPh';
const CALLBACK_URL = 'http://google.com';
const CHAPA_TRANSACTIONS_URL = 'https://api.chapa.co/v1/transaction/';

export const chapaPay = (
  first_name,
  last_name,
  amount,
  email,
  phone_number,
  randomLetter,
  setPaymentUri
) => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${CHAPA_SECRET}`);
  myHeaders.append('Content-Type', 'application/json');

  var raw = JSON.stringify({
    amount: amount,
    currency: 'ETB',
    email: email,
    first_name: first_name,
    last_name: last_name,
    phone_number: phone_number,
    tx_ref: randomLetter,
    callback_url: `${CALLBACK_URL}`,
    return_url: 'https://www.google.com/',
    'customization[title]': 'Payment for my favorite merchant',
    'customization[description]': 'I love online payments',
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  fetch('https://api.chapa.co/v1/transaction/initialize', requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      setPaymentUri(result);
      console.log(result, 'this payment uri');
      const { data, message, status } = result;
      console.log(data, message, status, 'message status data');
      // console.log(result, 'this payment uri');
    })
    .catch((error) => console.log('error', error));
};
