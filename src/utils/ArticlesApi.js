/**
 * ArticlesApi.js: guardar, consultar y eliminar artículos en nuestro backend.
 */

const BASE_URL = "http://localhost:3000/articles";

function getArticle(token) {
    return fetch(BASE_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error("No se pudireon obtener los artículos");
        }

        return response.json();
    })
}

function saveArticle(article, token) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(article),
    }).then(async (response) => {
        if (!response.ok) {
            const errorData = await response.json();
            console.log("Error del servidor:", errorData);
            throw new Error("No se pudo guardar el artículo");
        }
        return response.json();
    })
}

function deleteArticle(articleId, token) {
    return fetch(`${BASE_URL}/${articleId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error("No se pudo eliminar el artículo");

        }
        return response.json();
    });
}

export { getArticle, saveArticle, deleteArticle };