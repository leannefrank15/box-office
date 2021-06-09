const API_BASE_URL = 'https://api.tvmaze.com';

export async function api_funct(queryString){
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r => r.json())

  return response;
  
}