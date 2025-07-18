# Kullanılacak node versiyonu (Linux ARM64 destekli)
FROM node:18

# Çalışma dizini
WORKDIR /app

# Yalnızca package.json dosyalarını kopyala
COPY package*.json ./

# bcrypt'i doğru şekilde derlemesi için kaynak koddan kurulum ayarı
ENV npm_config_build_from_source=true

# Paketleri yükle
RUN npm install

# Diğer dosyaları kopyala
COPY . .

# Port aç
EXPOSE 8080

# Uygulamayı başlat
CMD ["npm", "start"]
