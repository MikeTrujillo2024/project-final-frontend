const BASE_URL = "https://newsapi.org/v2/everything";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

//obtenemos las fechas to y from
function getDates() {
    const fechaActual = new Date();

    const nuevaFecha = new Date(fechaActual);
    nuevaFecha.setDate(nuevaFecha.getDate() - 7);

    return {
        from: nuevaFecha.toISOString().split("T")[0],
        to: fechaActual.toISOString().split("T")[0],
    }
}

async function getNews(keyword) {

    const { to, from } = getDates();
    const params = new URLSearchParams({
        q: keyword,
        apiKey: apiKey,
        from: from,
        to: to,
        pageSize: 100,
    });

    const url = BASE_URL + "?" + params.toString();

    // return fetch(url);
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        const error = new Error(data.message);
        error.status = response.status;
        error.code = data.code;
        throw error;
    }

    return data.articles;
}

export { getNews }
