import axios from 'axios';

export async function fethFlags() {
  const { data } = await axios.get('https://restcountries.com/v3.1/all')
  return data
}