# Portofolio — Bima Sangkur

Website portofolio statis (HTML, CSS, JavaScript murni, tanpa framework/build tool).

## Struktur folder

```
portfolio-website/
├── index.html          ← struktur halaman (nav, hero, about, skills, projects, contact, footer)
├── css/
│   └── style.css       ← semua styling
├── js/
│   └── script.js       ← interaksi (menu mobile, tahun footer, form)
├── images/              ← foto profil & gambar proyek
└── assets/
    └── icons/           ← favicon & ikon lain
```

## Cara melihat hasilnya

Klik dua kali `index.html`, atau buka lewat browser. Tidak perlu server/instalasi apa pun.

## Checklist konten yang perlu diisi

- [ ] **Background halaman** → simpan gambar ke `images/bg-painting.jpg` (lukisan/abstrak, warna apa saja — otomatis dipakai sebagai latar seluruh halaman dengan overlay gelap + efek zoom pelan)
- [ ] Foto profil → `images/profile.jpg`
- [ ] Bio singkat di section "Tentang Saya"
- [ ] Daftar skill di section "Skill"
- [ ] Kartu proyek (gambar, judul, deskripsi, link demo & source code)
- [ ] Link sosial (GitHub, LinkedIn, Instagram) di footer
- [ ] Favicon → `assets/icons/favicon.ico`

## Catatan: form kontak

Form di section "Kontak" saat ini **belum terhubung ke layanan pengiriman email** — masih placeholder (`alert` di `script.js`). Untuk mengaktifkannya, pilih salah satu:

1. **Formspree** — daftar di [formspree.io](https://formspree.io), ubah atribut form jadi `action="https://formspree.io/f/xxxxxxx" method="POST"`, lalu hapus handler submit di `script.js`.
2. **EmailJS** — kirim email langsung dari browser tanpa backend.
3. **Backend sendiri** — arahkan `fetch()` di `script.js` ke endpoint API kamu.

## Deploy (gratis)

- **Netlify Drop**: [app.netlify.com/drop](https://app.netlify.com/drop) — drag & drop folder ini
- **Vercel**: `vercel deploy`
- **GitHub Pages**: push ke repo GitHub, aktifkan di Settings → Pages

## License

MIT
