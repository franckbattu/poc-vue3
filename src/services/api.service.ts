import axios from 'axios';

const apiUrl: string = 'https://jsonplaceholder.typicode.com';

async function get<T>(path: string, params?: {[param: string]: string | string[]} ): Promise<T> {
  let url = getFormattedUrl(path);
  const response = await axios.get<T>(url, { params });
  return response.data;
}

async function post<T>(path: string, body: any): Promise<T> {
  let url = getFormattedUrl(path);
  const response = await axios.post<T>(url, body);
  return response.data;
}

function getFormattedUrl(path: string): string {
  if (path.startsWith('/api')) {
    path = path.replace('/api', '');
    return `${apiUrl}${path}`;
  }
  else {
    return path;
  }
}

export function useApiService() {
  return {
    get,
    post
  }
}