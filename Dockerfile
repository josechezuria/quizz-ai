# -----------------------
# Base image
# -----------------------
FROM node:18-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./

# Install dependencies (production only)
RUN npm install --production

# -----------------------
# Development image
# -----------------------
FROM base AS dev
# Install ALL dependencies for dev
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

# -----------------------
# Production image
# -----------------------
FROM base AS prod
COPY . .
CMD ["npm", "start"]
