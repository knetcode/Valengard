# --- STAGE 1: Build Environment ---
# Use a recent Node.js image for building the Astro project
FROM node:22-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally (since Starlight projects often use it)
RUN npm install -g pnpm

# Copy package manifest and lock files
# This step is cached, speeding up rebuilds if dependencies haven't changed
COPY package.json pnpm-lock.yaml ./

# Install project dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the Astro project (Starlight generates static files into the 'dist' directory by default)
RUN pnpm run build

# --- STAGE 2: Production Server ---
# Use a minimal NGINX image to serve the static content for best performance
FROM nginx:alpine AS runner

# Copy the built files from the 'builder' stage's /app/dist to NGINX's default static content directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a minimal NGINX config to ensure deep linking works (important for documentation sites)
COPY nginx.conf /etc/nginx/conf.d/default.conf