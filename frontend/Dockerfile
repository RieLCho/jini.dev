FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# 개발 환경
ENV NODE_ENV=development
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# 프로덕션 빌드
# RUN npm run build
# FROM nginx:alpine
# COPY --from=0 /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"] 