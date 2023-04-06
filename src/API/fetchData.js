import axios from 'axios';

const api_base_url = 'https://cloud.iexapis.com';
const api_key = process.env.REACT_APP_API_KEY;

const fetchData = async () => {
  try {
    const response = await axios.get(
      `${api_base_url}/stable/tops?token=${api_key}`
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;
