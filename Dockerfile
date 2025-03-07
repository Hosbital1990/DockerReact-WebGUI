# Use an official Node.js runtime as a base image (more stable version)
FROM node:18-alpine

# Set the working directory to /frontend
WORKDIR /frontend

# Copy only necessary files
COPY ./frontend/package*.json ./

# Install the dependencies in the frontend folder (using npm ci or npm install based on your needs)
RUN npm ci

# Copy the rest of the application
COPY ./frontend /frontend

# Remove node_modules from the copied directory (optional, if it's already part of the copied frontend)
RUN rm -rf /frontend/node_modules

# Expose the port the app runs on
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]

