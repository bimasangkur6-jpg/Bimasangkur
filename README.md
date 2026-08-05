# Portofolio Web Developer

Website portofolio satu-file (`index.html` — HTML, CSS, dan JavaScript murni, tanpa framework/build tool). Tinggal edit teksnya dan langsung bisa dipakai.

## Cara melihat hasilnya

Klik dua kali `index.html`, atau buka lewat browser (Chrome/Edge/Firefox). Tidak perlu server atau instalasi apa pun.

## Checklist yang perlu diedit

Cari komentar `<!-- EDIT: ... -->` di dalam `index.html` — semua ada di bagian ini:

- [ ] **Nama** — ganti semua kemunculan "Nama Anda" (judul tab, header, hero, footer)
- [ ] **Peran/jabatan** — "Full-Stack Web Developer" di hero
- [ ] **Bio** — 2 paragraf di bagian "Tentang Saya"
- [ ] **Kartu ID di hero** — lokasi, fokus, pengalaman, bahasa
- [ ] **Statistik** — angka tahun pengalaman / proyek / klien (atribut `data-count`)
- [ ] **Skill** — daftar teknologi di 3 kartu (Frontend, Backend, Tools)
- [ ] **4 kartu proyek** — judul, deskripsi, tech tag, link "Live Demo" & "Kode Sumber"
- [ ] **Pengalaman kerja** — 3 entri linimasa (tanggal, jabatan, perusahaan, pencapaian)
- [ ] **Testimoni** — 2 kutipan (atau hapus section `#testimonials` kalau belum punya)
- [ ] **Kontak** — email, nomor WA, lokasi di section kontak & tautan `mailto:`
- [ ] **GitHub / LinkedIn** — ganti `https://github.com/username` dan `https://linkedin.com/in/username`
- [ ] **CV** — taruh file PDF CV kamu di folder ini, lalu ganti `href="cv-anda.pdf"` sesuai nama filenya

## Catatan penting: form kontak

Form di section "Kontak" saat ini **belum terhubung ke layanan pengiriman email** — kalau ada yang isi form, pesannya tidak benar-benar terkirim ke mana pun. Untuk mengaktifkannya, pilih salah satu:

1. **Formspree** (termudah, gratis untuk pemakaian ringan) — daftar di [formspree.io](https://formspree.io), ganti atribut form jadi `action="https://formspree.io/f/xxxxxxx" method="POST"`, hapus `id="contactForm"` dan handler JS di bagian bawah `<script>` (blok `Contact form (front-end only)`).
2. **EmailJS** — kirim email langsung dari browser tanpa backend, cocok kalau mau tetap pakai JavaScript yang sudah ada.
3. **Backend sendiri** — kalau kamu punya server (Node.js/PHP/dll), arahkan `fetch()` di JavaScript ke endpoint API kamu.

## Deploy (gratis)

Paling gampang pakai salah satu dari ini — tinggal drag & drop folder ini:

- **Netlify Drop**: [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: `vercel deploy` (butuh akun + Vercel CLI)
- **GitHub Pages**: push folder ini ke repo GitHub, aktifkan Pages di Settings → Pages, pilih branch `main`

## Struktur

```
portfolio-website/
├── index.html   ← semua kode ada di sini (CSS di dalam <style>, JS di dalam <script>)
└── README.md    ← file ini
```

## Fitur yang sudah ada

- Mode terang/gelap (ikut preferensi sistem, atau toggle manual — tersimpan di browser)
- Navigasi aktif otomatis mengikuti scroll (scrollspy)
- Animasi muncul saat scroll + angka statistik yang menghitung naik
- Menu mobile (hamburger) untuk layar kecil
- Sepenuhnya responsif (HP, tablet, desktop)
- Menghormati pengaturan "reduce motion" di OS untuk aksesibilitas
