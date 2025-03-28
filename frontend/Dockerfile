FROM node:20-alpine

WORKDIR /app

# package.json과 package-lock.json을 복사
COPY package*.json ./

# 패키지 설치 전 캐시 정리
RUN npm cache clean --force

# 패키지 설치 (--legacy-peer-deps 옵션 추가)
RUN npm install --legacy-peer-deps

# 소스 코드 복사
COPY . .

# 개발 환경 설정
ENV NODE_ENV=development
ENV VITE_API_URL=http://localhost:3000

# 포트 설정
EXPOSE 5173

# 개발 서버 실행
CMD ["npm", "run", "dev", "--", "--host"]

# 프로덕션 빌드
# RUN npm run build
# FROM nginx:alpine
# COPY --from=0 /app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"] 