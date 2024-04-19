# Car Manajement API

Car Management API adalah aplikasi pengolah data yang memungkinkan pengguna mengelola informasi mobil. API ini memungkinkan pengguna untuk melakukan berbagai operasi, termasuk membuat, membaca, memperbarui, dan menghapus (CRUD) data mobil di sistem. Dengan dukungan autentikasi, API ini memastikan bahwa hanya pengguna dengan izin akses tertentu, seperti "Admin" atau "SuperAdmin", yang dapat mengelola data mobil

## Langkah-Langkah Instalasi dan run aplikasi

Catatan : Anda memerlukan tools berikut untuk menyelesaikan instalasi.

- PostgreSQL
- Node.js

1.  Clone projek ini

    ```
    git clone ....
    ```

2.  Buka terminal
3.  Arahkan ke proyek direktori
    ```
    cd path/to/the-project
    ```
4.  Install Module Package
    ```
    npm install
    ```
5.  Buat file env, lalu konfigurasikan, cek file .env_example untuk melihat variabel yang digunakan sebagai environment.
6.  Buat database
    ```
     npx sequelize db:create
    ```
7.  Migrasi database
    ```
     npx sequelize db:migrate
    ```
8.  Migrasi seeder
    ```
     npx sequelize-cli db:seed:all
    ```
9.  Run the project
    ```
     npm run dev
    ```
    Akun Superadmin:

- "email": "tegaribra@gmail.com",
  "password": "diriku"

### Dokumentasi API

Port server di projek ini diatur di Port : 8000

Setelah proyek berjalan, Anda cukup membuka http://localhost:8000/api-docs/. Sekarang Anda dapat melihat dan menjelajahi semua endpoint yang ada pada proyek ini yang telah didokumentasikan menggunakan swagger.
