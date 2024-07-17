import axios from 'axios';
import { Country } from '../types/flags';
export async function fetchFlags(): Promise<Country[]> {
  const { data } = await axios.get('https://restcountries.com/v3.1/all')
  return data
}