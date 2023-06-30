import axios from 'axios';
import { VITE_API } from './api_const';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDk2OTFkNzM0ZWQ0NTgyMDhlYmFkNGFiODA5NGY3YSIsInN1YiI6IjY0OGEzNGM0ZTM3NWMwMDBlMjUxZGQ1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fkUVZs_4B5RuVbZiHAB_4PF3E572xW1iHX9hsYTmfNY';


export const http = axios.create({
  baseURL:VITE_API,
  headers:{
    'Authorization': `Bearer ${token}`
  }
});