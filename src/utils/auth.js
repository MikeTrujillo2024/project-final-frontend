/**
 * auth.js: registro, inicio de sesión y consulta del usuario.
 * */
const BASE_URL = "http://localhost:3000/users";

function register({ name, email, password }) {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    }).then(async (response) => {

        const data = await response.json();
        if (!response.ok) {
            const error = new Error(data.message || "Error al registrar el usuario");
            error.status = response.status;
            throw error;
        }
        return data;
    });
}

function login({ email, password }) {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("correo o contraseñas incorrectos");
        }
        return response.json();
    });
}

function getCurrentUser(token) {
    return fetch(`${BASE_URL}/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error("No se pudieron obtener los datos del usuario");
        }

        return response.json();
    });
}

export { register, login, getCurrentUser }

