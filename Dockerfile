FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env .env  # ✅ Ensure .env is in your Git repo or created during Jenkins build

EXPOSE 3000

# ✅ Optional: Built-in health check for container
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

CMD ["node", "app.js"]
