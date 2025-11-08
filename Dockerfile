### Multi-stage Dockerfile optimized for production Next.js (pnpm)
# Stages: deps (install), builder (build), runner (runtime with prod deps only)

FROM node:18-bullseye-slim AS deps
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy manifests and install all dependencies (dev + prod) for build
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

FROM node:18-bullseye-slim AS builder
WORKDIR /app

# Copy installed node_modules from deps stage and project files
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Next.js app
RUN pnpm build

# Production image: start from a minimal slim image and install only production deps
FROM node:18-bullseye-slim AS runner
WORKDIR /app

ENV NODE_ENV=production

# Install pnpm in the runtime image to run start script
RUN npm install -g pnpm

# Copy build output and package manifest
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies in the runner to reduce image size
RUN pnpm install --prod --frozen-lockfile

EXPOSE 3000

CMD ["pnpm", "start"]
