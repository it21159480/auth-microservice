# Use Node.js LTS version
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the app port
EXPOSE 5000

# Run the app
CMD ["npm", "start"]
