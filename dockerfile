FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Step 1: Build the React application

# Set the working directory

# Copy the package.json and package-lock.json files

# Install the dependencies

# Copy the rest of the application source code

# Build the application

# Step 2: Serve the built application with NGINX

# Copy the built files from the previous step to the NGINX html directory

# Copy custom NGINX configuration if any (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80

# Start NGINX
