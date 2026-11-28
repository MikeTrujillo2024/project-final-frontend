/**
 * NewsApi.js: búsqueda de noticias.
 */
import {
 BACKEND_URL
} from './constants';


async function getNews(keyword) {

    const params = new URLSearchParams({
        q: keyword,
    });

     const response = await fetch(
    `${BACKEND_URL}/news?${params.toString()}`
  );

  const data = await response.json();

  if (!response.ok) {
    const error = new Error(data.message || 'No se pudieron obtener las noticias');
    error.status = response.status;
    throw error;
  }

  return data.articles;
}

export { getNews }
