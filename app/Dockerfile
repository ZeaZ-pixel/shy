# dev
FROM node:19.6.0-alpine AS dev
RUN apk add --no-cache tzdata
ENV TZ Asia/Almaty
ENV NODE_PATH /opt/server/node_modules

WORKDIR /opt/server/

CMD [ "node" ]

# production
FROM node:19.6.0-alpine AS production
RUN apk add --no-cache tzdata
ENV TZ Asia/Almaty
ENV NODE_PATH /opt/server/node_modules

WORKDIR /opt/server/

COPY /*.json ./
RUN npm i

CMD ["sh", "-c", "npm run start"]