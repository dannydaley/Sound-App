

FROM node:16-alpine as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/dist /usr/share/nginx/html
# # Add your nginx.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 8000
# Start nginx
# CMD ["nginx", "-g", "daemon off;"]


# FROM node:14-bullseye



# WORKDIR /app/


# USER node

# COPY . .

# # Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
# RUN npm ci 
# # Build the app
# RUN npm run build

# EXPOSE 3000

# CMD ["npm", "run", "deploy"]