import axios from 'axios';

const apiKey = 'live_flmZ5dDBT3wVdeEPuv5Kj7j7B3jNrhyqYAeUN8upA4BeNOAvleJOiLXrSMvAFjWk';
axios.defaults.headers.common['x-api-key'] = apiKey;

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch breeds');
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch cat by breed');
  }
}