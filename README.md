# jini.dev

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

main 브랜치에 push하면 GitHub Actions를 통해 자동으로 배포됩니다.
