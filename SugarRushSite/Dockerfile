# We use the official image as a parent image.
FROM node:10-alpine

RUN apk update \
 && apk add ca-certificates wget \
 && update-ca-certificates \
 && apk add --update dos2unix

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Set the working directory.
WORKDIR /home/node/app

# Copy the file(s) from your host to your current location.
COPY package*.json ./

# Change the user to node. This will apply to both the runtime user and the following commands.
USER node

# Run the command inside your image filesystem.
RUN npm install
COPY --chown=node:node . .
RUN wget -O wait-for.sh https://raw.githubusercontent.com/eficode/wait-for/master/wait-for && chmod +x wait-for.sh
RUN chmod +x on-startup.sh
RUN dos2unix ./wait-for.sh && dos2unix ./on-startup.sh


# Building the website
RUN ./node_modules/.bin/ng build

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 3000

# Run the specified command within the container.
CMD [ "node", "server.js" ]
