# Fitness Tools API

**Fitness Tools API** es una API para gestionar equipos de ejercicio usando **Express** y **MongoDB**. Soporta operaciones CRUD y traducciones en varios idiomas. Ideal para aplicaciones que necesitan manejar inventarios de equipos de fitness.

## Características

- CRUD para equipos y lenguajes
- Soporte para múltiples idiomas
- Validación de datos
- Documentación Swagger

## Tecnologías

- **Node.js** con **Express**
- **MongoDB** para la base de datos
- **Mongoose** para la modelación de datos
- **Swagger** para la documentación API
- **Nodemon** para el reinicio automático del servidor


La estructura del proyecto es la siguiente:

``` lua
fitness-tools-api/
├── config/
│   └── database.js
├── controllers/
│   ├── equipment.js
│   └── language.js
├── models/
│   ├── equipment.js
│   └── language.js
├── routes/
│   ├── equipment.js
│   └── language.js
├── swagger/
│   └── swagger.js
├── .env
├── package.json
├── README.md
└── server.js


```


## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tuusuario/fitness-project-api.git
    cd fitness-project-api
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura las variables de entorno en el archivo `.env`. Usa la URI de conexión a MongoDB adecuada:
    ```dotenv
    MONGO_URI=tu_uri_de_mongodb
    ```

4. Inicia el servidor:
    ```bash
    npm start
    ```

## Rutas

> Languages
- `GET /api/languages`: Obtener todos los lenguajes.
- `GET /api/languages/:id`: Obtener un lenguaje por ID.
- `POST /api/languages`: Crear un nuevo lenguaje.
- `PUT /api/languages/:id`: Actualizar un lenguaje por ID.
- `DELETE /api/languages/:id`: Eliminar un lenguaje por ID.

> Equipments
- `GET /api/equipments`: Obtener todos los equipos.
- `GET /api/equipments/:id`: Obtener un equipo por ID.
- `POST /api/equipments`: Crear un nuevo equipo.
- `PUT /api/equipments/:id`: Actualizar un equipo por ID.
- `DELETE /api/equipments/:id`: Eliminar un equipo por ID.

## Documentación

La documentación de la API está disponible en [http://localhost:3000/api-docs](http://localhost:3000/api-docs) cuando el servidor está en ejecución.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request si tienes sugerencias o mejoras.

## Licencia

Este proyecto está licenciado bajo la Licencia ISC. Consulta el archivo `LICENSE` para más detalles.
