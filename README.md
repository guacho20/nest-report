# Ejecutar en Dev

1. Clonar el repositorio
2. Instalar dependencias `yarn istall` or `npm install`
3. Clonar `env.template` y renombrar a `.env` y completar las variables de entrono en .env
4. Levantar la base de datos `docker compose up -d`
5. Generar el Prima client `npx prisma generate`
6. Ejecutar proyecto `yarn start:dev` or `npm run start:dev`
