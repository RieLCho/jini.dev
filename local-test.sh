#!/bin/bash

# 색상 정의
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}로컬 테스트를 시작합니다...${NC}"

# 프론트엔드 빌드
echo -e "${YELLOW}프론트엔드 빌드 중...${NC}"
cd frontend
npm install
npx vite build

if [ $? -eq 0 ]; then
  echo -e "${GREEN}프론트엔드 빌드 성공!${NC}"
else
  echo -e "${RED}프론트엔드 빌드 실패!${NC}"
  exit 1
fi

# 백엔드 빌드 및 실행
echo -e "${YELLOW}백엔드 빌드 중...${NC}"
cd ../backend
npm install
npm run build

if [ $? -eq 0 ]; then
  echo -e "${GREEN}백엔드 빌드 성공!${NC}"
else
  echo -e "${RED}백엔드 빌드 실패!${NC}"
  exit 1
fi

# 백엔드 실행
echo -e "${YELLOW}백엔드 시작 중...${NC}"
node dist/index.js &
BACKEND_PID=$!

# 백엔드가 실행될 시간을 잠시 기다림
sleep 3

# 백엔드 상태 확인
curl -s http://localhost:3000/api/system/info > /dev/null
if [ $? -eq 0 ]; then
  echo -e "${GREEN}백엔드가 성공적으로 실행되었습니다!${NC}"
else
  echo -e "${RED}백엔드가 실행되지 않았습니다. 로그를 확인하세요.${NC}"
  kill $BACKEND_PID
  exit 1
fi

echo -e "${GREEN}테스트가 완료되었습니다. 백엔드는 PID $BACKEND_PID로 실행 중입니다.${NC}"
echo -e "${YELLOW}백엔드를 중지하려면 다음 명령어를 실행하세요: kill $BACKEND_PID${NC}"
echo -e "${YELLOW}테스트 결과:${NC}"
echo -e "프론트엔드 빌드: ${GREEN}성공${NC}"
echo -e "백엔드 빌드: ${GREEN}성공${NC}"
echo -e "백엔드 실행: ${GREEN}성공${NC}" 