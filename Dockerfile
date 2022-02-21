FROM node:10-alpine

# Create node_modules directory inside /home/node to have the right privileges
# Set the ownerchip of the app folder and every sub-folder & file in it to node's user
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app/

# Working directory
WORKDIR /home/node/app

# Copy package.json before installing dependencies & copying code to take advantage of Cache
COPY package*.json ./

# Ensure all app files to be owned by non-root node user
USER node

# Install dependencies
RUN npm install

# Copy app's code with node user as owner
COPY --chown=node:node . .

# Expose port 8080 to access the container from local machine
EXPOSE 8080

# Start the application
CMD [ "node", "app.js" ]