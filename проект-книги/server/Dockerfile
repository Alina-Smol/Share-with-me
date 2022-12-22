FROM node:19

WORKDIR /usr/src/app
RUN npm install --global nodemon
RUN npm install mysql2
RUN npm install bcryptjs
RUN npm install express-validator

COPY package*.json ./
COPY index.js ./

COPY controllers ./controllers
COPY middleware ./middleware
COPY routes ./routes
COPY config.js ./
COPY db.js ./
COPY Validation.js ./
COPY .env ./
COPY node_modules ./node_modules

EXPOSE 5000
CMD ["npm", "run", "dev"]