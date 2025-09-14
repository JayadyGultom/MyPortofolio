import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: "Memahami HTTP: Protokol yang Menghubungkan Dunia Web",
      excerpt: "HTTP adalah tulang punggung komunikasi web yang kita gunakan setiap hari. Mari menyelami bagaimana protokol ini bekerja, evolusinya dari HTTP/1.1 hingga HTTP/3, dan mengapa pemahaman ini penting...",
      date: "22 Desember 2024",
      category: "Technology",
      readTime: "20 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>Setiap kali kamu membuka halaman web, mengirim pesan, atau streaming video, ada sebuah protokol yang bekerja di balik layar—HTTP. HyperText Transfer Protocol ini adalah dasar dari semua komunikasi di World Wide Web. Namun, meski kita menggunakannya setiap hari, hanya sedikit yang benar-benar memahami bagaimana HTTP bekerja.</p>
        
        <p>Artikel ini akan mengajakmu memahami HTTP dari dasar hingga versi terbarunya, mengapa protokol ini begitu penting, dan bagaimana evolusinya membentuk internet modern yang kita kenal hari ini.</p>

        <h3 id="apa-itu-http">Apa Itu HTTP?</h3>
        <p>HTTP (HyperText Transfer Protocol) adalah protokol komunikasi yang mendefinisikan bagaimana pesan dikirimkan dan diformat antara klien (biasanya browser web) dan server web. Protokol ini merupakan fondasi dari World Wide Web dan menjadi standar untuk pertukaran informasi di internet.</p>
        
        <p><strong>Karakteristik Utama HTTP:</strong></p>
        <p>• <strong>Stateless:</strong> Setiap permintaan HTTP berdiri sendiri, server tidak menyimpan informasi tentang permintaan sebelumnya<br/>
        • <strong>Client-Server:</strong> Arsitektur yang memisahkan klien (pengguna) dan server (penyedia data)<br/>
        • <strong>Text-based:</strong> Pesan HTTP ditulis dalam format teks yang mudah dibaca manusia<br/>
        • <strong>Request-Response:</strong> Komunikasi terjadi dalam pola permintaan dan tanggapan</p>

        <h3 id="cara-kerja-http">Bagaimana HTTP Bekerja?</h3>
        <p>Proses komunikasi HTTP mengikuti pola sederhana: klien mengirim permintaan (request), server memproses permintaan tersebut, dan mengirimkan tanggapan (response) kembali ke klien.</p>

        <p><strong>1. HTTP Request (Permintaan)</strong></p>
        <p>Ketika kamu mengetik URL di browser atau mengklik link, browser membuat HTTP request yang berisi:</p>
        <p>• <strong>Method:</strong> Jenis operasi yang diminta (GET, POST, PUT, DELETE, dll.)<br/>
        • <strong>URL:</strong> Alamat resource yang diminta<br/>
        • <strong>Headers:</strong> Informasi tambahan tentang request<br/>
        • <strong>Body:</strong> Data yang dikirim (untuk method tertentu seperti POST)</p>

        <p><strong>Contoh HTTP Request:</strong></p>
        <p style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; font-family: monospace;">
        GET /artikel/http HTTP/1.1<br/>
        Host: www.contohwebsite.com<br/>
        User-Agent: Mozilla/5.0 (Chrome/120.0)<br/>
        Accept: text/html,application/xhtml+xml<br/>
        Accept-Language: id,en;q=0.9
        </p>

        <p><strong>2. HTTP Response (Tanggapan)</strong></p>
        <p>Server kemudian memproses request dan mengirimkan response yang berisi:</p>
        <p>• <strong>Status Code:</strong> Kode yang menunjukkan hasil pemrosesan (200, 404, 500, dll.)<br/>
        • <strong>Headers:</strong> Informasi tentang response dan server<br/>
        • <strong>Body:</strong> Konten yang diminta (HTML, JSON, gambar, dll.)</p>

        <p><strong>Contoh HTTP Response:</strong></p>
        <p style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; font-family: monospace;">
        HTTP/1.1 200 OK<br/>
        Content-Type: text/html; charset=UTF-8<br/>
        Content-Length: 1234<br/>
        Set-Cookie: session=abc123<br/>
        <br/>
        &lt;html&gt;&lt;head&gt;&lt;title&gt;Artikel HTTP&lt;/title&gt;&lt;/head&gt;...
        </p>

        <h3 id="http-methods">HTTP Methods: Jenis-Jenis Permintaan</h3>
        <p>HTTP mendefinisikan beberapa method yang menunjukkan jenis operasi yang ingin dilakukan terhadap resource di server.</p>

        <p><strong>Method Utama:</strong></p>
        <p>• <strong>GET:</strong> Mengambil data dari server (halaman web, gambar, file)<br/>
        • <strong>POST:</strong> Mengirim data ke server (form, upload file, login)<br/>
        • <strong>PUT:</strong> Memperbarui atau membuat resource di server<br/>
        • <strong>DELETE:</strong> Menghapus resource dari server<br/>
        • <strong>HEAD:</strong> Seperti GET tetapi hanya mengambil header, tanpa body<br/>
        • <strong>OPTIONS:</strong> Menanyakan method apa saja yang didukung server<br/>
        • <strong>PATCH:</strong> Memperbarui sebagian data pada resource</p>

        <p><strong>Kapan Menggunakan Method Tertentu?</strong></p>
        <p>• Membuka halaman web → GET<br/>
        • Submit form kontak → POST<br/>
        • Update profil user → PUT/PATCH<br/>
        • Hapus posting blog → DELETE</p>

        <h3 id="status-codes">HTTP Status Codes: Bahasa Server</h3>
        <p>Status code adalah cara server memberitahu klien hasil dari pemrosesan request. Kode ini terdiri dari 3 digit yang dikelompokkan berdasarkan jenisnya.</p>

        <p><strong>1xx - Informational (Informatif)</strong></p>
        <p>• <strong>100 Continue:</strong> Server telah menerima request headers, klien bisa lanjutkan mengirim body<br/>
        • <strong>101 Switching Protocols:</strong> Server setuju untuk berganti protokol</p>

        <p><strong>2xx - Success (Berhasil)</strong></p>
        <p>• <strong>200 OK:</strong> Request berhasil diproses<br/>
        • <strong>201 Created:</strong> Resource baru berhasil dibuat<br/>
        • <strong>204 No Content:</strong> Request berhasil, tetapi tidak ada konten untuk dikembalikan</p>

        <p><strong>3xx - Redirection (Pengalihan)</strong></p>
        <p>• <strong>301 Moved Permanently:</strong> Resource dipindah permanen ke URL baru<br/>
        • <strong>302 Found:</strong> Resource dipindah sementara<br/>
        • <strong>304 Not Modified:</strong> Resource tidak berubah sejak last request</p>

        <p><strong>4xx - Client Error (Kesalahan Klien)</strong></p>
        <p>• <strong>400 Bad Request:</strong> Request tidak valid atau rusak<br/>
        • <strong>401 Unauthorized:</strong> Perlu autentikasi<br/>
        • <strong>403 Forbidden:</strong> Server menolak akses<br/>
        • <strong>404 Not Found:</strong> Resource tidak ditemukan<br/>
        • <strong>429 Too Many Requests:</strong> Terlalu banyak request dalam waktu singkat</p>

        <p><strong>5xx - Server Error (Kesalahan Server)</strong></p>
        <p>• <strong>500 Internal Server Error:</strong> Kesalahan umum di server<br/>
        • <strong>502 Bad Gateway:</strong> Server gateway menerima response tidak valid<br/>
        • <strong>503 Service Unavailable:</strong> Server sedang maintenance atau overload</p>

        <h3 id="http-headers">HTTP Headers: Metadata yang Penting</h3>
        <p>Headers adalah informasi tambahan yang dikirim bersama HTTP request atau response. Headers memberitahu detail tentang data yang dikirim, bagaimana menanganinya, dan informasi konteks lainnya.</p>

        <p><strong>Request Headers Penting:</strong></p>
        <p>• <strong>User-Agent:</strong> Informasi tentang browser dan OS<br/>
        • <strong>Accept:</strong> Jenis konten yang bisa diterima klien<br/>
        • <strong>Authorization:</strong> Kredensial untuk autentikasi<br/>
        • <strong>Cookie:</strong> Data yang disimpan dari kunjungan sebelumnya<br/>
        • <strong>Content-Type:</strong> Jenis data yang dikirim dalam request body</p>

        <p><strong>Response Headers Penting:</strong></p>
        <p>• <strong>Content-Type:</strong> Jenis konten yang dikembalikan<br/>
        • <strong>Content-Length:</strong> Ukuran konten dalam bytes<br/>
        • <strong>Set-Cookie:</strong> Instruksi untuk menyimpan cookie<br/>
        • <strong>Cache-Control:</strong> Instruksi caching<br/>
        • <strong>Location:</strong> URL baru untuk redirect</p>

        <h3 id="evolusi-http">Evolusi HTTP: Dari 1.0 ke 3.0</h3>
        <p>HTTP telah mengalami evolusi signifikan sejak pertama kali diperkenalkan. Setiap versi membawa perbaikan performa dan fitur baru.</p>

        <p><strong>HTTP/1.0 (1996)</strong></p>
        <p>• Versi pertama yang standar<br/>
        • Satu request per koneksi TCP<br/>
        • Tidak ada persistent connection<br/>
        • Headers sederhana</p>

        <p><strong>HTTP/1.1 (1997-1999)</strong></p>
        <p>• <strong>Persistent connections:</strong> Satu koneksi bisa digunakan untuk multiple request<br/>
        • <strong>Pipelining:</strong> Mengirim multiple request tanpa menunggu response<br/>
        • <strong>Chunked transfer encoding:</strong> Mengirim data dalam potongan<br/>
        • <strong>Host header:</strong> Mendukung virtual hosting<br/>
        • Method baru: PUT, DELETE, OPTIONS, TRACE</p>

        <p><strong>HTTP/2 (2015)</strong></p>
        <p>• <strong>Binary framing:</strong> Data dikirim dalam format binary, bukan text<br/>
        • <strong>Multiplexing:</strong> Multiple request/response bersamaan dalam satu koneksi<br/>
        • <strong>Server push:</strong> Server bisa mengirim resource tanpa diminta<br/>
        • <strong>Header compression:</strong> Mengurangi overhead dengan HPACK<br/>
        • <strong>Stream prioritization:</strong> Mengatur prioritas request</p>

        <p><strong>HTTP/3 (2022)</strong></p>
        <p>• Menggunakan QUIC protocol (UDP-based) bukan TCP<br/>
        • <strong>Faster connection establishment:</strong> Mengurangi round-trip<br/>
        • <strong>Better loss recovery:</strong> Tidak semua stream terpengaruh jika ada packet loss<br/>
        • <strong>Built-in encryption:</strong> TLS 1.3 terintegrasi<br/>
        • <strong>Connection migration:</strong> Bisa berganti network tanpa putus koneksi</p>

        <h3 id="https-security">HTTPS: HTTP yang Aman</h3>
        <p>HTTPS (HTTP Secure) adalah versi aman dari HTTP yang menggunakan enkripsi TLS/SSL untuk melindungi data yang dikirimkan antara klien dan server.</p>

        <p><strong>Mengapa HTTPS Penting?</strong></p>
        <p>• <strong>Enkripsi:</strong> Data dienkripsi sehingga tidak bisa dibaca pihak ketiga<br/>
        • <strong>Integritas:</strong> Memastikan data tidak diubah selama perjalanan<br/>
        • <strong>Autentikasi:</strong> Memverifikasi identitas server<br/>
        • <strong>SEO benefit:</strong> Google memberikan ranking lebih tinggi untuk situs HTTPS</p>

        <p><strong>Proses HTTPS Handshake:</strong></p>
        <p>1. Client mengirim "Client Hello" dengan daftar cipher yang didukung<br/>
        2. Server merespons dengan "Server Hello" dan sertifikat digital<br/>
        3. Client memverifikasi sertifikat<br/>
        4. Kedua pihak bertukar kunci enkripsi<br/>
        5. Koneksi aman terbentuk dan komunikasi dimulai</p>

        <h3 id="caching-http">HTTP Caching: Mengoptimalkan Performa</h3>
        <p>Caching adalah mekanisme menyimpan salinan resource untuk mengurangi waktu loading dan bandwidth. HTTP menyediakan berbagai header untuk mengontrol caching.</p>

        <p><strong>Jenis-jenis Cache:</strong></p>
        <p>• <strong>Browser cache:</strong> Cache di browser pengguna<br/>
        • <strong>Proxy cache:</strong> Cache di server proxy/CDN<br/>
        • <strong>Gateway cache:</strong> Cache di reverse proxy server</p>

        <p><strong>Cache Control Headers:</strong></p>
        <p>• <strong>Cache-Control: max-age=3600</strong> - Cache selama 1 jam<br/>
        • <strong>Cache-Control: no-cache</strong> - Harus validasi ulang setiap kali<br/>
        • <strong>Cache-Control: no-store</strong> - Jangan simpan cache sama sekali<br/>
        • <strong>ETag:</strong> Identifier unik untuk versi resource<br/>
        • <strong>Last-Modified:</strong> Waktu terakhir resource dimodifikasi</p>

        <h3 id="api-restful">HTTP dalam REST APIs</h3>
        <p>REST (Representational State Transfer) adalah arsitektur yang menggunakan HTTP methods secara konvensional untuk operasi CRUD (Create, Read, Update, Delete).</p>

        <p><strong>Konvensi REST dengan HTTP:</strong></p>
        <p>• <strong>GET /users</strong> - Ambil daftar semua users<br/>
        • <strong>GET /users/123</strong> - Ambil user dengan ID 123<br/>
        • <strong>POST /users</strong> - Buat user baru<br/>
        • <strong>PUT /users/123</strong> - Update user dengan ID 123<br/>
        • <strong>DELETE /users/123</strong> - Hapus user dengan ID 123</p>

        <p><strong>Best Practices REST API:</strong></p>
        <p>• Gunakan noun (kata benda) untuk resource, bukan verb<br/>
        • Manfaatkan HTTP status codes dengan benar<br/>
        • Versioning API dengan header atau URL<br/>
        • Implement proper error handling<br/>
        • Gunakan HTTPS untuk keamanan</p>

        <h3 id="debugging-http">Tools untuk Debug HTTP</h3>
        <p>Memahami cara debug komunikasi HTTP sangat penting untuk development dan troubleshooting.</p>

        <p><strong>Browser Developer Tools:</strong></p>
        <p>• <strong>Network tab:</strong> Melihat semua HTTP request/response<br/>
        • <strong>Headers:</strong> Detail headers yang dikirim/diterima<br/>
        • <strong>Response:</strong> Isi response dari server<br/>
        • <strong>Timing:</strong> Waktu yang dibutuhkan setiap fase request</p>

        <p><strong>Command Line Tools:</strong></p>
        <p>• <strong>curl:</strong> Tool untuk mengirim HTTP request dari terminal<br/>
        • <strong>wget:</strong> Download file via HTTP<br/>
        • <strong>httpie:</strong> HTTP client yang user-friendly</p>

        <p><strong>Specialized Tools:</strong></p>
        <p>• <strong>Postman:</strong> GUI untuk testing API<br/>
        • <strong>Insomnia:</strong> Alternative untuk API testing<br/>
        • <strong>Wireshark:</strong> Network protocol analyzer<br/>
        • <strong>Charles Proxy:</strong> HTTP proxy untuk monitoring traffic</p>

        <h3 id="performance-optimization">Optimasi Performa HTTP</h3>
        <p>Memahami cara mengoptimalkan komunikasi HTTP dapat significantly meningkatkan performa aplikasi web.</p>

        <p><strong>Teknik Optimasi:</strong></p>
        <p>• <strong>Enable compression:</strong> Gunakan gzip/brotli untuk kompres response<br/>
        • <strong>Use CDN:</strong> Distribute content ke server yang lebih dekat user<br/>
        • <strong>Optimize images:</strong> Compress dan gunakan format modern (WebP, AVIF)<br/>
        • <strong>Minimize requests:</strong> Combine CSS/JS files, use CSS sprites<br/>
        • <strong>Use HTTP/2:</strong> Upgrade dari HTTP/1.1 untuk multiplexing<br/>
        • <strong>Implement caching:</strong> Set proper cache headers<br/>
        • <strong>Preload critical resources:</strong> Gunakan rel="preload" untuk resource penting</p>

        <p><strong>Monitoring dan Metrics:</strong></p>
        <p>• <strong>Time to First Byte (TTFB):</strong> Waktu server merespons<br/>
        • <strong>First Contentful Paint (FCP):</strong> Waktu konten pertama muncul<br/>
        • <strong>Largest Contentful Paint (LCP):</strong> Waktu konten utama selesai loading<br/>
        • <strong>Cumulative Layout Shift (CLS):</strong> Stabilitas visual halaman</p>
      `
    },
    {
      id: 2,
      title: "Menyelami Cara Kerja Internet: Perjalanan Data dari Layar ke Seluruh Dunia",
      excerpt: "Di balik satu klik yang kita lakukan setiap hari—entah itu membuka YouTube, mengakses Google, atau membaca berita online—ada proses teknis yang sangat kompleks, namun luar biasa cerdas...",
      date: "20 Desember 2024",
      category: "Technology",
      readTime: "25 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>Di balik satu klik yang kita lakukan setiap hari—entah itu membuka YouTube, mengakses Google, atau membaca berita online—ada proses teknis yang sangat kompleks, namun luar biasa cerdas. Internet telah menjadi bagian tak terpisahkan dari kehidupan kita. Namun, pernahkah kamu benar-benar memahami bagaimana internet bekerja?</p>
        
        <p>Artikel ini mengajakmu menyelami dunia di balik layar: bagaimana data berpindah dari browser di komputermu ke server di belahan dunia lain, lalu kembali dalam hitungan detik.</p>

        <h3 id="apa-internet">Apa Sebenarnya Internet Itu?</h3>
        <p>Internet bukanlah awan tak terlihat yang melayang di sekitar kita. Ia adalah jaringan global dari jutaan perangkat—komputer, server, ponsel, dan perangkat pintar—yang saling terhubung menggunakan protokol komunikasi standar yang disebut TCP/IP.</p>
        
        <p>Agar bisa terhubung ke jaringan ini, kita membutuhkan alat-alat seperti modem dan router. Modem berfungsi menghubungkan kita ke penyedia layanan internet (ISP), sementara router mendistribusikan koneksi ke berbagai perangkat di rumah atau kantor melalui WiFi atau kabel.</p>

        <h3 id="proses-klik">Proses di Balik Satu Klik</h3>
        <p>Bayangkan kamu ingin menonton video di YouTube. Kamu mengetik alamat www.youtube.com di browser. Apa yang terjadi setelah itu?</p>
        
        <p>Langkah pertama adalah mencari tahu ke mana permintaan itu harus dikirim. Komputer tidak mengenali alamat seperti "youtube.com", karena ia hanya mengerti alamat IP—serangkaian angka unik yang menunjukkan lokasi server tujuan, misalnya 142.250.190.14.</p>
        
        <p>Inilah peran DNS (Domain Name System). Ia berfungsi seperti buku telepon internet. Browser akan bertanya kepada server DNS: "Alamat IP dari youtube.com itu apa?" Setelah mendapat jawaban, barulah permintaan dikirim ke server tujuan.</p>

        <h3 id="perjalanan-dunia">Perjalanan Melintasi Dunia</h3>
        <p>Permintaan itu tak lantas langsung sampai. Ia harus melewati sejumlah titik—disebut router—di sepanjang jalan. Bayangkan seperti naik angkot atau bus antarkota: kamu tak bisa langsung ke tujuan, harus transit di beberapa terminal terlebih dahulu.</p>
        
        <p>Proses ini disebut routing, dan bisa melewati jalur yang berbeda-beda tergantung kondisi jaringan. Kadang permintaan dari Jakarta ke server di Singapura bisa menempuh jalur yang melewati Malaysia dulu. Semua tergantung rute tercepat dan paling stabil saat itu.</p>
        
        <p>Setiap titik transit ini disebut hop. Dan setiap hop membutuhkan waktu, walaupun sangat kecil—biasanya dalam hitungan milidetik.</p>

        <h3 id="data-paket">Data yang Dipotong dan Disusun Ulang</h3>
        <p>Yang menarik, saat kita mengakses data besar seperti video, informasi itu tidak dikirim sekaligus. Data dibagi menjadi paket-paket kecil, seperti potongan puzzle. Masing-masing diberi nomor, dikirim secara terpisah, dan di sisi penerima, semuanya disusun ulang agar sesuai urutan aslinya.</p>
        
        <p>Kalau ada paket yang hilang di jalan? Jangan khawatir—protokol TCP akan memintanya dikirim ulang. Semua proses ini terjadi nyaris seketika.</p>

        <h3 id="kecepatan-internet">Apa yang Menentukan Kecepatan Internet?</h3>
        <p>Kita sering bertanya: "Kenapa internetku lemot?" Jawabannya bisa bermacam-macam. Mungkin karena terlalu banyak hop yang dilewati, mungkin jalur sedang padat, atau bisa juga karena server tujuan berada jauh dari lokasi kita.</p>
        
        <p>Faktor lain seperti kecepatan ISP, jenis koneksi (fiber optik vs. kabel tembaga), hingga gangguan jaringan bisa berpengaruh. Di sinilah teknologi seperti CDN (Content Delivery Network) dan caching ikut berperan—dua hal ini akan kita bahas lebih dalam pada bagian berikutnya.</p>

        <h3 id="teknologi-kecepatan">Teknologi Pendukung Kecepatan Internet: CDN, Caching, dan Infrastruktur Modern</h3>
        <p>Pernahkah kamu bertanya-tanya, kenapa video di YouTube bisa diputar tanpa buffering—padahal servernya mungkin berada di luar negeri? Atau kenapa beberapa situs terasa lebih cepat daripada yang lain, meski kamu memakai koneksi yang sama? Jawabannya terletak pada teknologi yang bekerja di balik layar: CDN, caching, dan infrastruktur jaringan modern.</p>
        
        <p>Setelah sebelumnya kita membahas bagaimana data menjelajah dunia untuk sampai ke layar kita, sekarang saatnya memahami bagaimana teknologi internet dimodernisasi agar lebih cepat, lebih stabil, dan lebih dekat dengan pengguna.</p>

        <h3 id="cdn">Apa Itu CDN (Content Delivery Network)?</h3>
        <p>CDN adalah jaringan server yang tersebar di berbagai lokasi geografis, yang bertugas menyimpan salinan konten dari sebuah situs atau layanan. Tujuannya satu: mengirimkan data dari lokasi yang paling dekat dengan pengguna.</p>
        
        <p>Misalnya:</p>
        <p>Kamu berada di Indonesia dan membuka halaman video dari server YouTube.</p>
        <p>Daripada mengakses server pusat YouTube di Amerika, browser-mu justru mendapatkan video dari server CDN YouTube yang ada di Jakarta atau Singapura.</p>
        <p>Hasilnya? Waktu muat lebih cepat, dan buffering berkurang drastis.</p>
        
        <p>Contoh konten yang biasa disimpan di CDN:</p>
        <p>• Gambar dan video<br/>
        • File JavaScript dan CSS<br/>
        • Halaman web statis<br/>
        • Font dan ikon</p>

        <h3 id="caching">Caching: Menyimpan Data Sementara untuk Akses Cepat</h3>
        <p>Selain CDN, ada juga caching. Jika CDN menyimpan konten di server terdekat, caching menyimpan data secara lokal, bahkan bisa di perangkatmu sendiri atau di browser.</p>
        
        <p>Caching memungkinkan:</p>
        <p>• Halaman yang sering kamu buka bisa dimuat lebih cepat.<br/>
        • Video yang sudah pernah kamu tonton tidak perlu diunduh ulang.<br/>
        • Aplikasi web seperti Google Docs atau Instagram berjalan lebih mulus.</p>
        
        <p>Jenis caching:</p>
        <p>• <strong>Browser Cache</strong> – Data disimpan di browser (Chrome, Firefox, Safari).<br/>
        • <strong>Proxy Cache</strong> – Biasanya disimpan oleh ISP atau jaringan lokal.<br/>
        • <strong>Server-side Cache</strong> – Disiapkan oleh pengelola website atau aplikasi.</p>
        
        <p>Caching ibarat kamu menyimpan camilan di laci meja daripada harus ke dapur setiap kali lapar—lebih cepat dan efisien.</p>

        <h3 id="infrastruktur">Infrastruktur Modern: Tulang Punggung Internet</h3>
        <p>Semua teknologi ini bekerja karena didukung oleh infrastruktur fisik yang sangat besar dan kuat.</p>
        
        <p><strong>1. Kabel Bawah Laut</strong></p>
        <p>• Internet global tidak dikirim lewat satelit, melainkan lewat kabel serat optik yang membentang di dasar laut antarnegara.<br/>
        • Kecepatannya sangat tinggi, tapi pemasangan dan perawatannya rumit.</p>
        
        <p><strong>2. Data Center</strong></p>
        <p>• Adalah gudangnya data—server raksasa milik Google, Meta, Amazon, dll.<br/>
        • Dilengkapi sistem pendingin, keamanan tinggi, dan pasokan listrik tak terputus.<br/>
        • Lokasi data center juga memengaruhi kecepatan layanan.</p>
        
        <p><strong>3. IXP (Internet Exchange Point)</strong></p>
        <p>• Titik pertemuan antar jaringan ISP.<br/>
        • Jika ISP A dan ISP B terhubung melalui IXP, pengguna bisa saling bertukar data dengan lebih cepat tanpa harus "mutar" ke luar negeri.</p>

        <h3>Mengapa Semua Ini Penting?</h3>
        <p>Kecepatan akses bukan hanya soal kenyamanan. Di era digital seperti sekarang, ini menyangkut:</p>
        <p>• Produktivitas kerja dan bisnis<br/>
        • Pengalaman pengguna dalam aplikasi<br/>
        • Keamanan data (semakin cepat, semakin kecil kemungkinan gangguan)<br/>
        • Keadilan digital — agar akses internet cepat tidak hanya dinikmati kota besar.</p>

        <h3 id="keamanan-data">Menjaga Keamanan Data di Internet: HTTPS, Enkripsi, dan Ancaman Siber</h3>
        <p>Setelah kita membahas bagaimana data berjalan dan bagaimana kecepatannya ditingkatkan melalui teknologi seperti CDN dan caching, kini kita sampai pada satu pertanyaan penting: Bagaimana data kita tetap aman saat berpindah ke seluruh dunia?</p>
        
        <p>Ketika kamu memasukkan password di situs bank, atau mengirim pesan lewat platform chat, kamu tentu ingin informasi itu hanya bisa dibaca oleh penerima yang sah. Tapi karena data tersebut berjalan melewati banyak titik (router, server, bahkan jaringan antarnegara), ada potensi besar untuk disadap—jika tidak diamankan dengan benar.</p>

        <h3 id="https">1. HTTPS: Gerbang Pertama Perlindungan Data</h3>
        <p>Jika kamu perhatikan, sebagian besar situs web saat ini menggunakan HTTPS, bukan lagi HTTP. Tambahan huruf "S" di belakang itu bukan sekadar hiasan. Ia menandakan bahwa komunikasi antara browser kamu dan server dienkripsi.</p>
        
        <p><strong>Apa itu HTTPS?</strong></p>
        <p>HTTPS (HyperText Transfer Protocol Secure) adalah versi aman dari HTTP. Ia menggunakan protokol SSL/TLS (Secure Sockets Layer / Transport Layer Security) untuk mengenkripsi data.</p>
        
        <p><strong>Fungsinya:</strong></p>
        <p>• Mencegah penyadapan data oleh pihak ketiga.<br/>
        • Melindungi informasi sensitif seperti login, nomor kartu kredit, dan lainnya.<br/>
        • Menjamin bahwa kamu benar-benar terhubung ke situs yang asli, bukan tiruan.</p>
        
        <p>Kamu bisa mengenali situs HTTPS dengan ikon gembok kecil di samping URL di browser.</p>

        <h3 id="enkripsi">2. Enkripsi: Mengunci Data di Perjalanan</h3>
        <p>Enkripsi bekerja dengan mengubah informasi menjadi kode rahasia. Hanya pihak yang memiliki "kunci" enkripsi (biasanya server tujuan dan browser kamu) yang bisa membuka kode tersebut.</p>
        
        <p><strong>Ilustrasi sederhana:</strong></p>
        <p>Bayangkan kamu menulis surat rahasia, memasukkannya ke dalam kotak terkunci, lalu mengirimkannya. Hanya penerima yang punya kunci yang bisa membacanya. Di internet, inilah yang dilakukan oleh TLS encryption.</p>
        
        <p><strong>Dua Jenis Enkripsi:</strong></p>
        <p>• <strong>Enkripsi Simetris:</strong> Pengirim dan penerima memakai kunci yang sama.<br/>
        • <strong>Enkripsi Asimetris:</strong> Menggunakan dua kunci berbeda (publik dan privat), seperti yang dipakai dalam HTTPS.</p>

        <h3 id="ancaman">3. Ancaman Keamanan di Internet</h3>
        <p>Sayangnya, tak semua komunikasi internet aman. Banyak serangan yang menargetkan kelemahan dalam sistem, baik dari sisi pengguna, jaringan, maupun server.</p>
        
        <p><strong>Beberapa contoh ancaman:</strong></p>
        <p>• <strong>Man-in-the-middle attack:</strong> Penyusup memotong komunikasi antara kamu dan server.<br/>
        • <strong>Phishing:</strong> Situs palsu yang meniru tampilan situs resmi untuk mencuri data login.<br/>
        • <strong>Packet sniffing:</strong> Peretas "mengendus" paket data yang belum dienkripsi di jaringan publik.<br/>
        • <strong>Malware:</strong> Program jahat yang mencuri informasi dari perangkat kamu.</p>
        
        <p>Karena itu, penting bagi situs web modern untuk menggunakan HTTPS, dan bagi pengguna untuk:</p>
        <p>• Tidak sembarangan membuka link.<br/>
        • Menghindari WiFi publik tanpa VPN.<br/>
        • Memastikan situs memiliki ikon gembok di address bar.</p>

        <h3 id="sertifikat">4. Autentikasi dan Sertifikat Digital</h3>
        <p>Situs yang menggunakan HTTPS juga harus memiliki sertifikat digital yang dikeluarkan oleh lembaga terpercaya (CA – Certificate Authority).</p>
        
        <p><strong>Fungsi sertifikat ini:</strong></p>
        <p>• Memberikan identitas resmi kepada situs web.<br/>
        • Menjamin bahwa data benar-benar dikirim ke situs yang dimaksud, bukan situs tiruan.<br/>
        • Sertifikat ini bisa divalidasi oleh browser kamu secara otomatis.</p>
        
        <p>Browser yang mendeteksi situs tanpa sertifikat valid biasanya akan menampilkan peringatan "Your connection is not private".</p>

        <h3 id="proteksi">5. Proteksi Tambahan: Firewall, VPN, dan 2FA</h3>
        <p>Selain teknologi di sisi protokol, ada juga alat bantu yang digunakan oleh pengguna maupun perusahaan untuk meningkatkan keamanan.</p>
        
        <p>• <strong>Firewall:</strong> Mengontrol lalu lintas data masuk dan keluar.<br/>
        • <strong>VPN (Virtual Private Network):</strong> Mengenkripsi seluruh koneksi internet dan menyembunyikan alamat IP.<br/>
        • <strong>2FA (Two-Factor Authentication):</strong> Menambahkan lapisan keamanan saat login (misalnya lewat SMS atau aplikasi otentikasi).</p>

        <h3 id="masa-depan">Masa Depan Internet: Kecepatan 6G, Internet Satelit, dan Dunia yang Terhubung Total</h3>
        <p>Setelah memahami bagaimana internet bekerja saat ini—dari perjalanan data, sistem kecepatan, hingga keamanan—pertanyaan berikutnya adalah: ke mana arah perkembangan internet di masa depan?</p>
        
        <p>Internet telah membawa revolusi dalam cara kita hidup, bekerja, dan berkomunikasi. Namun, teknologi ini belum berhenti. Justru, kita sedang memasuki fase baru: internet masa depan—yang lebih cepat, lebih cerdas, dan bisa diakses oleh siapa pun di mana pun.</p>

        <h3 id="6g">1. Dari 5G ke 6G: Kecepatan yang Mengubah Segalanya</h3>
        <p>Kita saat ini tengah berada di era 5G, jaringan seluler generasi kelima yang menawarkan kecepatan data hingga 10x lebih cepat dari 4G, latensi rendah, dan konektivitas massal.</p>
        
        <p>Namun, di balik layar, para ilmuwan dan insinyur sudah mulai mengembangkan 6G, yang diperkirakan akan hadir antara tahun 2030 dan seterusnya.</p>
        
        <p><strong>Apa yang bisa dilakukan 6G?</strong></p>
        <p>• <strong>Kecepatan transfer hingga 1 terabit per detik (Tbps)</strong><br/>
        → Unduh seluruh musim serial Netflix dalam hitungan detik.</p>
        
        <p>• <strong>Latensi sangat rendah (<1 ms)</strong><br/>
        → Komunikasi real-time tanpa jeda, ideal untuk augmented reality (AR), virtual reality (VR), dan kendali robot jarak jauh.</p>
        
        <p>• <strong>Konektivitas ultra-masif</strong><br/>
        → Menghubungkan miliaran perangkat IoT (Internet of Things), dari kulkas pintar hingga kendaraan tanpa sopir.</p>

        <h3 id="satelit">2. Internet Satelit: Membawa Konektivitas ke Ujung Dunia</h3>
        <p>Meski dunia semakin terhubung, jutaan orang di daerah terpencil masih belum memiliki akses internet yang memadai. Di sinilah internet berbasis satelit hadir sebagai solusi.</p>
        
        <p><strong>Contoh nyata:</strong></p>
        <p>• <strong>Starlink milik SpaceX:</strong> Jaringan ribuan satelit orbit rendah (LEO) yang menyediakan internet ke berbagai belahan dunia.<br/>
        • <strong>Amazon Kuiper dan OneWeb</strong> juga ikut mengembangkan jaringan serupa.</p>
        
        <p><strong>Keunggulan:</strong></p>
        <p>• Tidak membutuhkan infrastruktur kabel atau fiber optik.<br/>
        • Bisa menjangkau daerah pelosok, pulau terpencil, hingga zona bencana.</p>
        
        <p><strong>Tantangan:</strong></p>
        <p>• Butuh investasi besar.<br/>
        • Persaingan frekuensi di orbit.<br/>
        • Potensi sampah antariksa.</p>

        <h3 id="ioe">3. Dunia Internet of Everything (IoE)</h3>
        <p>Jika sekarang kita mengenal Internet of Things (IoT), maka masa depan memperkenalkan konsep Internet of Everything—di mana orang, perangkat, data, dan proses semua saling terhubung dan berinteraksi.</p>
        
        <p><strong>Bayangkan:</strong></p>
        <p>• Mobil kamu terhubung ke jalan, lalu lintas, dan sistem kota.<br/>
        • Lemari es memesan sendiri isi ulang ketika stok habis.<br/>
        • Kota yang bisa mengatur listrik, air, dan sampah secara otomatis lewat jaringan.</p>
        
        <p><strong>Semua ini membutuhkan:</strong></p>
        <p>• Jaringan ultra-cepat.<br/>
        • Komputasi edge (pengolahan data di dekat pengguna).<br/>
        • Sistem keamanan yang sangat kompleks.</p>

        <h3 id="ramah-lingkungan">4. Internet Lebih Ramah Energi dan Berkelanjutan</h3>
        <p>Kecepatan dan konektivitas bukan satu-satunya tujuan. Internet masa depan juga harus hemat energi dan ramah lingkungan.</p>
        
        <p>• Data center kini berlomba mengurangi emisi karbon.<br/>
        • Teknologi pendingin server semakin efisien.<br/>
        • Energi terbarukan mulai digunakan untuk menggerakkan infrastruktur digital.</p>
        
        <p>Dengan miliaran perangkat terhubung, efisiensi energi menjadi keharusan, bukan pilihan.</p>

        <h3 id="akses-global">5. Akses Global dan Keadilan Digital</h3>
        <p>Satu hal yang tak kalah penting: akses internet adalah hak dasar, bukan lagi kemewahan. Masa depan internet harus menjangkau:</p>
        
        <p>• Pelosok desa dan daerah 3T (tertinggal, terdepan, dan terluar).<br/>
        • Komunitas miskin dan termarjinalkan.<br/>
        • Negara berkembang yang butuh dorongan digital.</p>
        
        <p>Organisasi global dan pemerintah kini mulai menggalakkan program "internet untuk semua". Karena tanpa akses yang setara, kesenjangan digital justru makin melebar.</p>

        <h3>Penutup: Internet Bukan Sihir, Tapi Keajaiban Teknologi</h3>
        <p>Yang terjadi saat kita membuka halaman web bukan sulap. Itu adalah hasil dari kerjasama banyak teknologi—dari DNS, routing, protokol komunikasi, hingga infrastruktur global seperti kabel bawah laut. Semuanya bergerak dalam harmoni, mengantarkan permintaan dan data kembali dengan kecepatan luar biasa.</p>
        
        <p>Internet bukan hanya sekadar jaringan kabel dan sinyal. Ia adalah bukti betapa manusia mampu menciptakan sistem yang menghubungkan dunia, menyatukan informasi, dan memungkinkan kita terhubung, hanya dalam satu ketukan jari.</p>
      `
    },
    {
      id: 3,
      title: "Algoritma Sorting: Dari Bubble Sort hingga Quick Sort",
      excerpt: "Algoritma sorting adalah fondasi dalam ilmu komputer. Mari kita eksplorasi berbagai teknik sorting, mulai dari yang sederhana hingga yang efisien, dan kapan menggunakan masing-masing...",
      date: "3 Januari 2025",
      category: "Programming",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>Dalam dunia pemrograman, ada satu konsep fundamental yang harus dipahami setiap developer: algoritma sorting. Bayangkan kamu memiliki tumpukan kartu yang acak, dan kamu ingin mengurutkannya dari yang terkecil hingga terbesar. Bagaimana cara melakukannya dengan efisien?</p>
        
        <p>Algoritma sorting adalah metode untuk mengatur data dalam urutan tertentu (biasanya dari kecil ke besar atau sebaliknya). Meskipun terlihat sederhana, pemilihan algoritma yang tepat bisa membuat perbedaan besar dalam performa aplikasi.</p>

        <h3 id="mengapa-sorting-penting">Mengapa Sorting Penting?</h3>
        <p>Sorting bukan hanya soal mengatur data. Dalam banyak kasus, sorting adalah langkah awal untuk algoritma lain yang lebih kompleks:</p>
        <p>• <strong>Binary Search:</strong> Mencari data dalam array yang sudah terurut jauh lebih cepat<br/>
        • <strong>Database Operations:</strong> Query database sering memerlukan data yang terurut<br/>
        • <strong>Data Analysis:</strong> Statistik dan analisis data membutuhkan data yang terorganisir<br/>
        • <strong>User Interface:</strong> Menampilkan daftar yang terurut membuat pengalaman pengguna lebih baik</p>

        <h3 id="bubble-sort">Bubble Sort: Yang Paling Sederhana</h3>
        <p>Bubble Sort adalah algoritma sorting yang paling mudah dipahami. Konsepnya seperti gelembung udara yang naik ke permukaan—elemen yang lebih besar "mengapung" ke atas.</p>
        
        <p><strong>Cara Kerja Bubble Sort:</strong></p>
        <p>1. Bandingkan dua elemen yang berdekatan<br/>
        2. Jika elemen pertama lebih besar dari elemen kedua, tukar posisinya<br/>
        3. Lanjutkan ke pasangan elemen berikutnya<br/>
        4. Ulangi proses hingga tidak ada lagi pertukaran yang diperlukan</p>

        <p style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; font-family: monospace;">
        // Contoh implementasi Bubble Sort dalam JavaScript<br/>
        function bubbleSort(arr) {<br/>
        &nbsp;&nbsp;let n = arr.length;<br/>
        &nbsp;&nbsp;for (let i = 0; i < n-1; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;for (let j = 0; j < n-i-1; j++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (arr[j] > arr[j+1]) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Tukar elemen<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let temp = arr[j];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j] = arr[j+1];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j+1] = temp;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;return arr;<br/>
        }
        </p>

        <p><strong>Kompleksitas Bubble Sort:</strong></p>
        <p>• <strong>Time Complexity:</strong> O(n²) - untuk kasus terburuk dan rata-rata<br/>
        • <strong>Space Complexity:</strong> O(1) - hanya menggunakan ruang konstan<br/>
        • <strong>Stable:</strong> Ya - elemen dengan nilai sama tidak berubah urutan relatifnya</p>

        <h3 id="selection-sort">Selection Sort: Mencari yang Terkecil</h3>
        <p>Selection Sort bekerja dengan cara mencari elemen terkecil dari array yang belum terurut, lalu menempatkannya di posisi yang tepat.</p>
        
        <p><strong>Cara Kerja Selection Sort:</strong></p>
        <p>1. Cari elemen terkecil dalam array<br/>
        2. Tukar dengan elemen di posisi pertama<br/>
        3. Cari elemen terkecil kedua dalam sisa array<br/>
        4. Tukar dengan elemen di posisi kedua<br/>
        5. Ulangi hingga semua elemen terurut</p>

        <p style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; font-family: monospace;">
        // Contoh implementasi Selection Sort<br/>
        function selectionSort(arr) {<br/>
        &nbsp;&nbsp;let n = arr.length;<br/>
        &nbsp;&nbsp;for (let i = 0; i < n-1; i++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;let minIdx = i;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;for (let j = i+1; j < n; j++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (arr[j] < arr[minIdx]) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minIdx = j;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;// Tukar elemen<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;let temp = arr[i];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;arr[i] = arr[minIdx];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;arr[minIdx] = temp;<br/>
        &nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;return arr;<br/>
        }
        </p>

        <h3 id="insertion-sort">Insertion Sort: Seperti Mengurutkan Kartu</h3>
        <p>Insertion Sort bekerja seperti cara kita mengurutkan kartu di tangan. Kita mengambil satu kartu dan menempatkannya di posisi yang tepat di antara kartu yang sudah terurut.</p>
        
        <p><strong>Cara Kerja Insertion Sort:</strong></p>
        <p>1. Mulai dari elemen kedua<br/>
        2. Bandingkan dengan elemen sebelumnya<br/>
        3. Jika lebih kecil, geser elemen sebelumnya ke kanan<br/>
        4. Lanjutkan hingga menemukan posisi yang tepat<br/>
        5. Ulangi untuk elemen berikutnya</p>

        <h3 id="quick-sort">Quick Sort: Divide and Conquer</h3>
        <p>Quick Sort adalah salah satu algoritma sorting yang paling efisien. Ia menggunakan pendekatan "divide and conquer" (bagi dan taklukkan).</p>
        
        <p><strong>Cara Kerja Quick Sort:</strong></p>
        <p>1. Pilih elemen sebagai "pivot" (biasanya elemen terakhir)<br/>
        2. Atur ulang array sehingga elemen yang lebih kecil dari pivot ada di kiri, yang lebih besar di kanan<br/>
        3. Rekursif terapkan Quick Sort pada sub-array kiri dan kanan<br/>
        4. Gabungkan hasilnya</p>

        <p style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; font-family: monospace;">
        // Contoh implementasi Quick Sort<br/>
        function quickSort(arr, low = 0, high = arr.length - 1) {<br/>
        &nbsp;&nbsp;if (low < high) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;// Partisi array<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;let pivotIndex = partition(arr, low, high);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;// Rekursif sort sub-array<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;quickSort(arr, low, pivotIndex - 1);<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;quickSort(arr, pivotIndex + 1, high);<br/>
        &nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;return arr;<br/>
        }<br/><br/>
        function partition(arr, low, high) {<br/>
        &nbsp;&nbsp;let pivot = arr[high];<br/>
        &nbsp;&nbsp;let i = low - 1;<br/>
        &nbsp;&nbsp;for (let j = low; j < high; j++) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;if (arr[j] < pivot) {<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i++;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// Tukar elemen<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let temp = arr[i];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i] = arr[j];<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[j] = temp;<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;}<br/>
        &nbsp;&nbsp;// Tukar pivot ke posisi yang tepat<br/>
        &nbsp;&nbsp;let temp = arr[i + 1];<br/>
        &nbsp;&nbsp;arr[i + 1] = arr[high];<br/>
        &nbsp;&nbsp;arr[high] = temp;<br/>
        &nbsp;&nbsp;return i + 1;<br/>
        }
        </p>

        <p><strong>Kompleksitas Quick Sort:</strong></p>
        <p>• <strong>Time Complexity:</strong> O(n log n) - rata-rata, O(n²) - kasus terburuk<br/>
        • <strong>Space Complexity:</strong> O(log n) - karena rekursi<br/>
        • <strong>Unstable:</strong> Ya - elemen dengan nilai sama bisa berubah urutan relatifnya</p>

        <h3 id="perbandingan-algoritma">Perbandingan Algoritma Sorting</h3>
        <p>Setiap algoritma memiliki kelebihan dan kekurangan. Berikut perbandingannya:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background: rgba(78, 205, 196, 0.1);">
        <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Algoritma</th>
        <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Time Complexity</th>
        <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Space Complexity</th>
        <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Stable</th>
        <th style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Kapan Digunakan</th>
        </tr>
        <tr>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Bubble Sort</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">O(n²)</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">O(1)</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Ya</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Data kecil, pembelajaran</td>
        </tr>
        <tr>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Selection Sort</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">O(n²)</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">O(1)</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Tidak</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Data kecil, memori terbatas</td>
        </tr>
        <tr>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Insertion Sort</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">O(n²)</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">O(1)</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Ya</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Data kecil, hampir terurut</td>
        </tr>
        <tr>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Quick Sort</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">O(n log n)</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">O(log n)</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Tidak</td>
        <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.2);">Data besar, performa tinggi</td>
        </tr>
        </table>

        <h3 id="kapan-menggunakan-algoritma-mana">Kapan Menggunakan Algoritma Mana?</h3>
        <p><strong>Gunakan Bubble Sort jika:</strong></p>
        <p>• Data sangat kecil (kurang dari 50 elemen)<br/>
        • Kamu sedang belajar konsep sorting<br/>
        • Implementasi sederhana lebih penting daripada performa</p>

        <p><strong>Gunakan Selection Sort jika:</strong></p>
        <p>• Data kecil dan memori terbatas<br/>
        • Kamu ingin meminimalkan jumlah pertukaran<br/>
        • Performa tidak terlalu kritis</p>

        <p><strong>Gunakan Insertion Sort jika:</strong></p>
        <p>• Data kecil dan hampir terurut<br/>
        • Kamu membutuhkan algoritma yang stable<br/>
        • Implementasi sederhana dengan performa yang baik</p>

        <p><strong>Gunakan Quick Sort jika:</strong></p>
        <p>• Data besar dan performa penting<br/>
        • Kamu tidak memerlukan algoritma yang stable<br/>
        • Memori tidak terlalu terbatas</p>

        <h3 id="praktik-terbaik">Praktik Terbaik dalam Sorting</h3>
        <p>1. <strong>Pilih algoritma yang tepat:</strong> Sesuaikan dengan ukuran data dan kebutuhan performa<br/>
        2. <strong>Optimasi untuk kasus umum:</strong> Pertimbangkan karakteristik data yang paling sering muncul<br/>
        3. <strong>Gunakan library yang sudah dioptimasi:</strong> Untuk produksi, gunakan implementasi yang sudah teruji<br/>
        4. <strong>Benchmark performa:</strong> Test dengan data real untuk memastikan performa sesuai ekspektasi</p>

        <h3>Kesimpulan</h3>
        <p>Algoritma sorting adalah fondasi penting dalam pemrograman. Meskipun terlihat sederhana, pemahaman yang mendalam tentang berbagai algoritma sorting akan membantu kamu menjadi developer yang lebih baik.</p>
        
        <p>Mulailah dengan algoritma yang sederhana seperti Bubble Sort untuk memahami konsep dasar, lalu lanjutkan ke algoritma yang lebih efisien seperti Quick Sort. Ingat, tidak ada algoritma yang sempurna untuk semua situasi—pilih yang paling sesuai dengan kebutuhan proyekmu.</p>
        
        <p>Dengan menguasai konsep sorting, kamu tidak hanya bisa mengurutkan data, tetapi juga memahami pola pikir algoritmik yang akan berguna dalam memecahkan masalah pemrograman yang lebih kompleks.</p>
      `
    }
  ];

  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-detail-container">
        <div className="container">
          <div className="not-found">
            <h2>Artikel tidak ditemukan</h2>
            <p>Artikel yang Anda cari tidak ada atau telah dihapus.</p>
            <Link to="/blog" className="back-btn">Kembali ke Blog</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-container">
      <div className="container">
        <div className="blog-detail-header" data-aos="fade-up">
          <Link to="/blog" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Kembali ke Blog
          </Link>
          
          <div className="blog-meta">
            <span className="blog-category">{post.category}</span>
            <span className="blog-date">{post.date}</span>
            <span className="blog-read-time">{post.readTime}</span>
          </div>
          
          <h1 className="blog-title">{post.title}</h1>
          <p className="blog-excerpt">{post.excerpt}</p>
        </div>

        <div className="blog-image-container" data-aos="fade-up" data-aos-delay="200">
          <img src={post.image} alt={post.title} className="blog-detail-image" />
        </div>

        <div className="blog-content" data-aos="fade-up" data-aos-delay="400">
          {/* Table of Contents */}
          <div className="table-of-contents" data-aos="fade-up" data-aos-delay="300">
            <h3>Daftar Isi</h3>
            <ul>
              {post.id === 1 ? (
                <>
                  <li><a href="#apa-itu-http">Apa Itu HTTP?</a></li>
                  <li><a href="#cara-kerja-http">Bagaimana HTTP Bekerja?</a></li>
                  <li><a href="#http-methods">HTTP Methods: Jenis-Jenis Permintaan</a></li>
                  <li><a href="#status-codes">HTTP Status Codes: Bahasa Server</a></li>
                  <li><a href="#http-headers">HTTP Headers: Metadata yang Penting</a></li>
                  <li><a href="#evolusi-http">Evolusi HTTP: Dari 1.0 ke 3.0</a></li>
                  <li><a href="#https-security">HTTPS: HTTP yang Aman</a></li>
                  <li><a href="#caching-http">HTTP Caching: Mengoptimalkan Performa</a></li>
                  <li><a href="#api-restful">HTTP dalam REST APIs</a></li>
                  <li><a href="#debugging-http">Tools untuk Debug HTTP</a></li>
                  <li><a href="#performance-optimization">Optimasi Performa HTTP</a></li>
                </>
              ) : (
                <>
                  <li><a href="#apa-internet">Apa Sebenarnya Internet Itu?</a></li>
                  <li><a href="#proses-klik">Proses di Balik Satu Klik</a></li>
                  <li><a href="#perjalanan-dunia">Perjalanan Melintasi Dunia</a></li>
                  <li><a href="#data-paket">Data yang Dipotong dan Disusun Ulang</a></li>
                  <li><a href="#kecepatan-internet">Apa yang Menentukan Kecepatan Internet?</a></li>
                  <li><a href="#teknologi-kecepatan">Teknologi Pendukung Kecepatan Internet</a>
                    <ul>
                      <li><a href="#cdn">Apa Itu CDN (Content Delivery Network)?</a></li>
                      <li><a href="#caching">Caching: Menyimpan Data Sementara untuk Akses Cepat</a></li>
                      <li><a href="#infrastruktur">Infrastruktur Modern: Tulang Punggung Internet</a></li>
                    </ul>
                  </li>
                  <li><a href="#keamanan-data">Menjaga Keamanan Data di Internet</a>
                    <ul>
                      <li><a href="#https">HTTPS: Gerbang Pertama Perlindungan Data</a></li>
                      <li><a href="#enkripsi">Enkripsi: Mengunci Data di Perjalanan</a></li>
                      <li><a href="#ancaman">Ancaman Keamanan di Internet</a></li>
                      <li><a href="#sertifikat">Autentikasi dan Sertifikat Digital</a></li>
                      <li><a href="#proteksi">Proteksi Tambahan: Firewall, VPN, dan 2FA</a></li>
                    </ul>
                  </li>
                  <li><a href="#masa-depan">Masa Depan Internet</a>
                    <ul>
                      <li><a href="#6g">Dari 5G ke 6G: Kecepatan yang Mengubah Segalanya</a></li>
                      <li><a href="#satelit">Internet Satelit: Membawa Konektivitas ke Ujung Dunia</a></li>
                      <li><a href="#ioe">Dunia Internet of Everything (IoE)</a></li>
                      <li><a href="#ramah-lingkungan">Internet Lebih Ramah Energi dan Berkelanjutan</a></li>
                      <li><a href="#akses-global">Akses Global dan Keadilan Digital</a></li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="blog-footer" data-aos="fade-up">
          <div className="share-section">
            <h4>Bagikan Artikel</h4>
            <div className="share-buttons">
              <button className="share-btn facebook">Facebook</button>
              <button className="share-btn twitter">Twitter</button>
              <button className="share-btn linkedin">LinkedIn</button>
            </div>
          </div>
          
          <Link to="/blog" className="back-to-blog-btn">
            Lihat Artikel Lainnya
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
