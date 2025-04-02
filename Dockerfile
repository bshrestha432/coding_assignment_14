# Step 1: Use an official Node.js image to build the app
FROM node:18 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Step 4: Copy the rest of the app and build it
COPY . ./
RUN npm run build

# Step 5: Serve the production build using a simple server
FROM nginx:alpine

# Step 6: Copy the build from the previous step
COPY --from=build /app/build /usr/share/nginx/html

# Step 7: Expose the port that Nginx is listening on
EXPOSE 80

# Step 8: Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
