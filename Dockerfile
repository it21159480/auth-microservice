# # Use Node.js LTS version
# FROM node:18

# # Set working directory
# WORKDIR /app

# # Copy package files and install dependencies first for better caching
# COPY package*.json ./

# RUN npm install --production

# # Copy all app files
# COPY . .

# # Expose port 5000
# EXPOSE 5000

# # Use environment variable for PORT or default to 5000
# ENV PORT=5000

# # Start the app using npm start (make sure your package.json has "start": "node server.js")
# CMD ["npm", "start"]

FROM node:18

WORKDIR /app

# Copy only package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy the rest of the app files
COPY . .

EXPOSE 5000

CMD ["npm", "start"]
