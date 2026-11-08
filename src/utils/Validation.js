/**
 * 
 * @param {String} value | texto del nombre 
 * @returns 
 */
function isName(value,final) {
     const text = new RegExp(`^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9\\s]{2,${final}}$`);
    return text.test(value);
}

/**
 * 
 * @param {String} value | email 
 * @returns 
 */
function isEmail(value) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);

}

/**
 * 
 * @param {string} value |password 
 *                        --minimo 8 caracteres
 *                        --maximo 200 caracteres
 *                        --Una mayúscula como mínimo.
 *                        --Una minúscula como mínimo.
 *                        --Un número como mínimo.
 *                        --Se permiten acentos y espacios.
 *                        --No se permiten caracteres especiales.
 * @returns 
 */
function isPass(value) {
    const regexPassword = /^(?=.*[a-záéíóúüñ])(?=.*[A-ZÁÉÍÓÚÜÑ])(?=.*\d)[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\d\s]{8,200}$/;
    return regexPassword.test(value);
}


/**
 * 
 * @param {String} value | String a valorar
 * @param {String} validateFunction |   nomber de la funcion que validara 
 * @param  {...any} args | permite recibir argumentos adicionales.
 * 
 * @returns 
 */
function validateField(value, validateFunction, ...args) {
    if (value.trim() === "") {
        return "empty";
    }

    if (!validateFunction(value, ...args)) {
        return "invalid";
    }

    return "valid";
}

/**
 * 
 * @param {*} result 
 * @param {*} setError 
 * @returns 
 */

function showError(result, setError) {
    if (result === "empty") {
        setError("Campo obligatorio");
    } else if (result === "invalid") {
        setError("Campo inválido");
    } else {
        setError("");
    }

    return setError;
}

export { isName, isEmail, isPass, validateField, showError }