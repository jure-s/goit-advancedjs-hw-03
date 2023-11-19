import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelect = document.getElementById('breedSelect');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');
const catImage = document.getElementById('catImage');
const catDetails = document.getElementById('catDetails');

async function populateBreeds() {
  try {
    const breeds = await fetchBreeds();
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  } catch (err) {
    error.style.display = 'block';
  } finally {
    loader.style.display = 'none';
  }
}

async function showCatInfo(breedId) {
  try {
    const catData = await fetchCatByBreed(breedId);
    const cat = catData[0];
    catImage.src = cat.url;

    const breed = cat.breeds[0];
    catDetails.innerHTML = `
      <h3>${breed.name}</h3>
      <p><strong>Description:</strong> ${breed.description}</p>
      <p><strong>Temperament:</strong> ${breed.temperament}</p>
    `;
    catInfo.style.display = 'block';
  } catch (err) {
    error.style.display = 'block';
  } finally {
    loader.style.display = 'none';
  }
}

breedSelect.addEventListener('change', async (event) => {
  const selectedBreedId = event.target.value;
  loader.style.display = 'block';
  error.style.display = 'none';
  catInfo.style.display = 'none';
  await showCatInfo(selectedBreedId);
});

populateBreeds();