# ==========================================
# Etapa 1: Build da aplicação (Node)
# ==========================================
FROM node:20-alpine as builder

WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (Melhora o cache do Docker)
COPY package.json package-lock.json ./

# Instala as dependências (npm ci é mais rápido e seguro que npm install)
RUN npm ci

# Copia o resto do código da aplicação
COPY . .

# Roda o comando de build do Vite (gera a pasta /dist)
RUN npm run build

# ==========================================
# Etapa 2: Servidor Web (Nginx)
# ==========================================
FROM nginx:alpine

# Remove os arquivos padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia a pasta /dist gerada na Etapa 1 para a pasta pública do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia as nossas configurações de rota do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 do container
EXPOSE 80

# Inicia o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]