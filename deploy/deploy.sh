#!/usr/bin/env bash
set -euo pipefail

# Deploy isolado — não toca em outros projetos/nginx existentes.
DOMAIN="pingsalesaisolutions.com"
WWW="www.pingsalesaisolutions.com"
APP_DIR="/home/ubuntu/website_pingsales"
REPO="https://github.com/rdduartes/website_pingsales.git"
NGINX_AVAILABLE="/etc/nginx/sites-available/pingsalesaisolutions.com"
NGINX_ENABLED="/etc/nginx/sites-enabled/pingsalesaisolutions.com"
CERTBOT_EMAIL="${CERTBOT_EMAIL:-geral@pingsalesaisolutions.pt}"

echo "==> Diretório da app: ${APP_DIR}"
if [[ ! -d "${APP_DIR}/.git" ]]; then
  git clone "${REPO}" "${APP_DIR}"
else
  git -C "${APP_DIR}" fetch origin main
  git -C "${APP_DIR}" reset --hard origin/main
fi

echo "==> Build"
cd "${APP_DIR}"
npm run build

echo "==> Nginx (novo vhost apenas)"
sudo cp "${APP_DIR}/deploy/nginx/pingsalesaisolutions.com.conf" "${NGINX_AVAILABLE}"
if [[ ! -L "${NGINX_ENABLED}" ]]; then
  sudo ln -s "${NGINX_AVAILABLE}" "${NGINX_ENABLED}"
fi
sudo nginx -t
sudo systemctl reload nginx

echo "==> Certificado SSL (Let's Encrypt)"
if [[ ! -f "/etc/letsencrypt/live/${DOMAIN}/fullchain.pem" ]]; then
  sudo certbot --nginx \
    -d "${DOMAIN}" -d "${WWW}" \
    --non-interactive --agree-tos -m "${CERTBOT_EMAIL}" \
    --redirect
else
  sudo certbot renew --dry-run || true
  sudo certbot --nginx \
    -d "${DOMAIN}" -d "${WWW}" \
    --non-interactive --agree-tos -m "${CERTBOT_EMAIL}" \
    --redirect || true
fi

sudo nginx -t
sudo systemctl reload nginx

echo "==> Deploy concluído: https://${DOMAIN}"
