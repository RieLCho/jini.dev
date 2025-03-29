#!/bin/bash

# 필요한 디렉토리 생성
mkdir -p /home/ubuntu/workspace
mkdir -p /var/www/jini.dev

# 필요한 패키지 설치
sudo apt-get update
sudo apt-get install -y nginx certbot python3-certbot-nginx

# NVM 설치 (없는 경우)
if [ ! -d "$HOME/.nvm" ]; then
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

# Node.js 설치
nvm install
nvm use

# PM2, ts-node 전역 설치
npm install -g pm2 ts-node

# Nginx 설정 파일 복사
sudo cp nginx-config.conf /etc/nginx/sites-available/jini.dev
sudo ln -sf /etc/nginx/sites-available/jini.dev /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl restart nginx

# SSL 인증서 발급 (주석 해제하여 사용)
# sudo certbot --nginx -d jini.dev -d www.jini.dev

echo "서버 설정이 완료되었습니다!" 