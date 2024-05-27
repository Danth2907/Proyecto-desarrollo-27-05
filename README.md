# Proyecto Desarrollo
Proyecto - Desarrollo de Aplicaciones Web

Instrucciones para Ejecutar el Proyecto:

Asegúrate de tener Node.js instalado en tu computadora. Puedes descargarlo desde nodejs.org.

Instala Vite globalmente utilizando npm con el siguiente comando:

-npm install -g vite
Clona este repositorio en tu máquina local:

-git clone https://tu-repositorio.git
Instalación y Configuración del Backend:

Navega al directorio del backend:

-cd tu-proyecto/backend
Instala las dependencias:

-npm install
Instalación y Configuración del Frontend:

Navega al directorio del frontend:

Instala las dependencias:

-npm install
Ejecute el servidor de desarrollo de Vite para el frontend:

En el directorio del frontend, ejecute el siguiente comando:

-npm run dev
Esto iniciará el servidor de desarrollo de Vite. Copia la dirección del servidor que aparece en la consola y pégala en tu navegador web para ver la aplicación en acción.
Uso del Dockerfile para el frontend:

Asegúrate de tener Docker instalado en tu sistema.
Desde el directorio raíz de tu proyecto, donde se encuentra el archivo Dockerfile, ejecuta el siguiente comando para construir la imagen Docker:

docker build -t nombre-imagen:tag .
Una vez que la imagen se haya construido correctamente, ejecuta el contenedor Docker:

docker run -p 80:80 nombre-imagen:tag
Esto iniciará el contenedor Docker y podrás acceder a tu aplicación en http://localhost.
