# Practica 02

Este es la aplicación movil de mi perfil, en ellas se encuentran el backend y el frontend mobile.

## Requisitos previos

1. **Node.js:**
    #### Asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu máquina.

2. **Creación de cluster de MongoDB:**
    #### Dirigete hacia la página de [MongoDB](https://www.mongodb.com/es).
    #### Después de iniciar sesión, crea un nuevo proyecto y un clúster en la consola de MongoDB Atlas. Sigue las instrucciones proporcionadas en el proceso de creación.
    #### Configura las reglas de seguridad para permitir el acceso al clúster. Asegúrate de configurar la IP desde la que se accederá y establece las credenciales necesarias.
    #### Obtén la cadena de conexión del clúster desde MongoDB Atlas. Esta cadena se utilizará en la aplicación backend para conectarse a la base de datos.

## Instalación del backend

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/zeosjb/Practica03

2. **Navegar hacia la API:**

    ```bash
    cd backend

3. **Instalar dependencias:**

    ```bash
    npm  install

4. **Crea un archivo .env:**

    Crea un archivo .env siguiendo las indicaciones del .env.example

5. **Realizar seeder de la base de datos:**

    ```bash
    node seed/seed.js

6. **Volver a la ruta inicial:**

    ```bash
    cd ..

7. **Navegar hacia el frontend:**

    ```bash
    cd mobile

8. **Instalar dependencias:**

    ```bash
    npm  install

9. **Cambia la dirección de la API:**

    Dentro de la carpeta src/api en el archivo hay un const baseURL, cambialo dependiendo de tu dirección de IPv4 = "http://Direccion:Puerto/api/profile". Para conseguir esta IP realizar:
    ```bash
    ipconfig

## Uso API

1. **Navegar hacia la API:**

    ```bash
    cd backend

2. **Para iniciar realiza:**

    ```bash
    npm start

## Uso Frontend

1. **Navegar hacia el frontend mobile:**

    ```bash
    cd frontend

2. **Para iniciar realiza:**

    ```bash
    npx expo start

3. **Puedes visualizar desde tu dispositivo o un emulador**
