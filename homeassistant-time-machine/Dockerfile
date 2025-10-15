ARG BUILD_FROM
# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

# Install all dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production dependencies
FROM node:20-alpine AS production-deps

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev --legacy-peer-deps

# Stage 3: Create the final image
FROM $BUILD_FROM

ARG BUILD_ARCH

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

WORKDIR /app

# Copy built application and production dependencies
COPY --from=builder /app/.next ./.next
COPY --from=production-deps /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/run.sh ./run.sh
COPY --from=builder /app/scheduled-jobs.json ./scheduled-jobs.json

# Expose the port Next.js runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
