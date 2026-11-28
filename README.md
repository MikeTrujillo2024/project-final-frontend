# NewsExplorer — Frontend

**NewsExplorer** es una aplicación web desarrollada con React que permite a los usuarios buscar noticias, consultar los resultados y guardar sus artículos favoritos para acceder a ellos posteriormente.

La aplicación cuenta con un sistema de registro y autenticación de usuarios, búsqueda de noticias mediante NewsAPI y una sección para administrar los artículos guardados.

## 🔵 Proyecto desplegado

**Aplicación:** [https://newsexplorer2026.mooo.com](https://newsexplorer2026.mooo.com)

**API:** [https://api-newsexplorer2026.mooo.com](https://api-newsexplorer2026.mooo.com)

## Tecnologías utilizadas

- React 19
- React DOM
- React Router DOM
- JavaScript
- HTML5
- CSS3
- Vite
- ESLint
- Node.js
- Express
- MongoDB
- NewsAPI
- JSON Web Tokens (JWT)

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

El frontend utiliza una variable de entorno para comunicarse con el backend de NewsExplorer.

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_BACKEND_URL=http://localhost:3000
```

Para producción, configurar la URL del backend:

```env
VITE_BACKEND_URL=https://api-newsexplorer2026.mooo.com
```

Vite utiliza estas variables durante la compilación del proyecto.

**Importante:**
- No subir archivos `.env` ni `.env.production` al repositorio.
- Las claves privadas y credenciales de NewsAPI se configuran exclusivamente en el backend.
- No exponer `NEWS_API_KEY` en el frontend.

## Ejecución del proyecto

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite iniciará la aplicación y mostrará en la terminal la dirección local para abrirla en el navegador.

Para utilizar las funciones de autenticación y administración de artículos, también debe estar ejecutándose el backend de NewsExplorer en el puerto `3000`.

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Iniciar el servidor de desarrollo |
| `npm run build` | Generar la versión de producción |
| `npm run preview` | Previsualizar la versión de producción |
| `npm run lint` | Ejecutar ESLint para revisar el código |

## Arquitectura y comunicación con la API

El frontend se comunica con el backend de NewsExplorer mediante solicitudes HTTP.

**Backend de NewsExplorer**

Se utiliza para gestionar:

- Registro e inicio de sesión.
- Información del usuario.
- Búsqueda de noticias mediante NewsAPI.
- Almacenamiento y administración de artículos guardados.

**NewsAPI**

El backend realiza las solicitudes a NewsAPI utilizando la clave de acceso configurada en sus variables de entorno.

Esta arquitectura permite resolver la restricción del plan gratuito de NewsAPI, que no permite realizar llamadas directamente desde el navegador en producción.

**Autenticación**

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
