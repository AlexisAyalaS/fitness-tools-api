# Fitness Tools API

## Descripción

API para el proyecto Fitness, construida con Express y MongoDB. Esta API permite manejar equipos de ejercicio con sus traducciones en varios idiomas.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

``` lua
fitness-project-api/
│
├── config/
│   └── database.js        # Configuración de conexión a MongoDB
│
├── controllers/
│   └── equipment.js       # Controladores para manejar las operaciones CRUD de equipos
│
├── models/
│   └── equipment.js       # Definición del modelo de datos de equipo con Mongoose
│
├── routes/
│   └── equipment.js       # Rutas para las operaciones CRUD de equipos
│
├── swagger.js             # Configuración de Swagger para la documentación de la API
│
├── .env                   # Variables de entorno (incluye URI de MongoDB)
│
├── package.json           # Dependencias del proyecto y scripts
│
└── server.js              # Configuración y arranque del servidor Express

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
    MONGODB_URI=mongodb://localhost:27017/ProjectFitnessDB
    ```

4. Inicia el servidor:
    ```bash
    npm start
    ```

## Rutas

- `GET /api/equipments` - Obtiene todos los equipos.
- `GET /api/equipments/:id` - Obtiene un equipo por su ID.
- `POST /api/equipments` - Crea un nuevo equipo.
- `PUT /api/equipments/:id` - Actualiza un equipo existente.
- `DELETE /api/equipments/:id` - Elimina un equipo por su ID.

## Documentación

La documentación de la API está disponible en [http://localhost:3000/api-docs](http://localhost:3000/api-docs) cuando el servidor está en ejecución.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request si tienes sugerencias o mejoras.

## Licencia

Este proyecto está licenciado bajo la Licencia ISC. Consulta el archivo `LICENSE` para más detalles.
