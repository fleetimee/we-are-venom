FROM node:22-alpine AS base

# Mengatur direktori kerja menjadi /web-rekrutmen
WORKDIR /web-rekrutmen

# Menyalin seluruh kode sumber aplikasi ke dalam direktori kerja
COPY . .

# Membangun aplikasi untuk produksi
RUN npm install && npm run build

# Mengatur port yang akan digunakan (dalam hal ini, port 30100)
EXPOSE 30100

# Menjalankan aplikasi dengan perintah yang sesuai, termasuk opsi -n
CMD ["serve", "-s", "build", "-l", "30100", "-n"]