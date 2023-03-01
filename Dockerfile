FROM node:18-alpine

WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm build
RUN pnpm prune --prod

RUN pnpm install http-server

# We serve the static files over a simple web server.
CMD ["npx", "http-server", "dist/"]
