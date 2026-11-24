# NewsExplorer — Frontend

**NewsExplorer** es una aplicación web desarrollada con React que permite a los usuarios buscar noticias, consultar los resultados y guardar sus artículos favoritos para acceder a ellos posteriormente.

La aplicación cuenta con un sistema de registro y autenticación de usuarios, búsqueda de noticias mediante NewsAPI y una sección para administrar los artículos guardados.

## Tecnologías utilizadas

- React 19
- React DOM
- React Router DOM
- JavaScript
- HTML5
- CSS3
- Vite
- ESLint
- NewsAPI

## Funcionalidades principales

- **Registro de usuarios:** permite crear una cuenta mediante nombre, correo electrónico y contraseña.
- **Inicio de sesión:** permite acceder a la aplicación mediante credenciales registradas.
- **Búsqueda de noticias:** permite buscar artículos utilizando palabras clave mediante NewsAPI.
- **Visualización de resultados:** muestra las noticias encontradas mediante tarjetas.
- **Guardar artículos:** permite guardar noticias favoritas en la cuenta del usuario.
- **Artículos guardados:** permite consultar los artículos que el usuario ha guardado.
- **Eliminar artículos:** permite quitar artículos de la lista de guardados.
- **Cerrar sesión:** permite finalizar la sesión del usuario.
- **Rutas protegidas:** restringe el acceso a la sección de noticias guardadas a usuarios autenticados.

## Estructura del proyecto

```text
src/
├── assets/
├── blocks/
├── components/
│   ├── ComponentsMain/
│   │   ├── About/
│   │   ├── Cards/
│   │   └── SearchForm/
│   ├── Footer/
│   ├── Header/
│   ├── NotFound/
│   ├── Popup/
│   ├── Preloader/
│   └── ProtectedRoute/
├── contexts/
│   └── CurrentUserContext.js
├── images/
├── pages/
│   ├── Main/
│   └── SavedNews/
├── utils/
│   ├── ArticlesApi.js
│   ├── auth.js
│   ├── MockArticles.js
│   ├── NewsApi.js
│   ├── token.js
│   └── Validation.js
├── vendor/
├── App.jsx
├── index.css
└── main.jsx
```

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/MikeTrujillo2024/project-final-frontend.git
```

2. Acceder al directorio del proyecto:

```bash
cd project-final-frontend
```

3. Instalar las dependencias:

```bash
npm install
```

## Configuración

La aplicación utiliza NewsAPI para realizar las búsquedas de noticias.

Crear un archivo `.env` en la raíz del proyecto y agregar la siguiente variable:

```env
VITE_NEWS_API_KEY=tu_clave_de_newsapi
```

Sustituir el valor de ejemplo por una clave válida de NewsAPI.

No subir el archivo `.env` al repositorio.

## Ejecución del proyecto

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite iniciará la aplicación y mostrará en la terminal la dirección local para abrirla en el navegador.

**Importante:** para utilizar las funciones de autenticación y administración de artículos, también debe estar ejecutándose el backend de NewsExplorer en el puerto `3000`.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Iniciar el servidor de desarrollo |
| `npm run build` | Generar la versión de producción |
| `npm run preview` | Previsualizar la versión de producción |
| `npm run lint` | Ejecutar ESLint para revisar el código |

## Arquitectura y comunicación con la API

El frontend se comunica con dos servicios:

**NewsAPI**

Se utiliza para buscar noticias mediante palabras clave y consultar artículos publicados durante los últimos siete días.

**Backend de NewsExplorer**

Se utiliza para gestionar el registro, inicio de sesión, información del usuario y artículos guardados.

La autenticación utiliza JSON Web Tokens (JWT). El token se almacena en `localStorage` y se envía al backend mediante el encabezado `Authorization` en las solicitudes protegidas.

## Rutas principales

| Ruta | Página | Acceso |
|---|---|---|
| `/` | Página principal (Main) | Público |
| `/saved-news` | Noticias guardadas (SavedNews) | Protegido |

## Backend

NewsExplorer cuenta con un backend desarrollado con Node.js, Express y MongoDB.

Puedes consultar su código fuente en el siguiente repositorio:

[NewsExplorer — Backend](https://github.com/MikeTrujillo2024/project-final-backend)

## Autor

Miguel Angel Fernandez Trujillo