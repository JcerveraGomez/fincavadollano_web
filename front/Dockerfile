# Etapa 1: Construcción
FROM node:18 AS build

# Crea un directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Crear un archivo nginx.conf dinámicamente en el contenedor
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri /index.html; \
    } \
    error_page 404 /index.html; \
}' > /etc/nginx/conf.d/default.conf

# Expone el puerto 80 para servir la aplicación
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
