# jini.dev
![GnIpKOYbgAEtU40](https://github.com/user-attachments/assets/47539d63-5069-425b-8b1e-42292c5e5583)  
개인 포트폴리오 웹사이트입니다. 터미널 인터페이스를 통해 정보를 탐색할 수 있습니다.

## 기술 스택

### Frontend

-   React
-   TypeScript
-   Tailwind CSS
-   Vite

### Backend

-   Node.js
-   Express
-   systeminformation

## 개발 환경 설정

### 필수 요구사항

-   Node.js 22 (nvm 사용 권장)
-   Docker & Docker Compose
-   Yarn

### Node.js 버전 설정

```bash
nvm install
nvm use
```

### 로컬 개발 환경

#### Frontend 개발

```bash
cd frontend
yarn install
yarn dev
```

#### Backend 개발

```bash
cd backend
yarn install
yarn dev
```

### Docker 실행

전체 애플리케이션을 Docker로 실행하려면:

```bash
docker-compose up --build
```

이후 다음 URL에서 접속 가능합니다:

-   Frontend: http://localhost
-   Backend API: http://localhost:3000

## API 엔드포인트

### GET /api/system-info

시스템 정보를 반환합니다:

-   OS 정보
-   CPU 정보
-   메모리 사용량
-   그래픽스 정보
-   기타 시스템 상태

## 배포

### 자동 배포 (GitHub Actions)

main 또는 develop 브랜치에 push하면 GitHub Actions를 통해 자동으로 배포됩니다:

1. GitHub Actions에서 프론트엔드 빌드
2. 빌드된 파일을 SCP로 서버에 전송
3. 서버에서 백엔드 코드를 PM2로 실행
4. Nginx를 통해 프론트엔드 정적 파일 제공 및 백엔드 API 라우팅

### 서버 설정

서버 설정은 다음과 같이 진행됩니다:

1. Nginx 설정 파일 적용
```bash
sudo cp nginx-config.conf /etc/nginx/sites-available/jini.dev
sudo ln -s /etc/nginx/sites-available/jini.dev /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

2. PM2 설치 (백엔드 실행용)
```bash
npm install -g pm2 ts-node
```

### GitHub Secrets 설정

GitHub 저장소에 다음 시크릿을 설정해야 합니다:
- REMOTE_IP: 서버 IP 주소 (예: 146.56.99.166)
- REMOTE_USER: SSH 사용자명 (예: ubuntu)
- REMOTE_IDENTITYFILE: SSH 개인 키
- REMOTE_PORT: SSH 포트 (기본 22)
