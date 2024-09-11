FROM node:20-alpine as builder

RUN mkdir -p /work
WORKDIR "/work"
ADD [".", "/work/"]

RUN yarn install

RUN yarn build

FROM node:20-alpine

COPY --from=builder ["/work/dist", "/app/"]
COPY --from=builder ["/work/package.json", "/work/yarn.lock", "/app/"]

WORKDIR /app

RUN yarn install --prod
CMD ["node", "index.js"]
