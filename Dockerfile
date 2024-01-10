FROM node:20.10.0
WORKDIR /app
COPY . .
RUN npm install -g cross-env
RUN  yarn install
CMD ["yarn", "run","dev"]
