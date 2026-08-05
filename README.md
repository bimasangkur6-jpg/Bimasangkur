# Portofolio Web Developer

Website portofolio satu-file (`index.html` — HTML, CSS, dan JavaScript murni, tanpa framework/build tool). Tinggal edit teksnya dan langsung bisa dipakai.

## Cara melihat hasilnya

Klik dua kali `index.html`, atau buka lewat browser (Chrome/Edge/Firefox). Tidak perlu server atau instalasi apa pun.

## Checklist yang perlu diedit

Template ini sengaja dibuat **simpel** — hanya 4 bagian (Tentang, Keahlian, Proyek, Kontak), tanpa statistik, kartu status, pengalaman kerja, atau testimoni, karena belum relevan untuk profil mahasiswa/otodidak. Yang sudah terisi: nama, bio, dan semua data kontak.

Sisa yang masih perlu diisi (cari komentar `<!-- EDIT: ... -->` di `index.html`):

- [ ] **Keahlian** — isinya sekarang perkiraan (HTML/CSS/JS/Git di "Sudah dipakai", React/Tailwind/Node.js di "Lagi dipelajari"). Sesuaikan dengan kondisi sebenarnya. Lebih baik sedikit tapi jujur daripada banyak tapi belum dikuasai
- [ ] **Proyek** — bagian ini sengaja dikosongkan (lihat bagian bawah)
- [ ] **LinkedIn** — cek `https://linkedin.com/in/bimasangkur6` sudah benar atau belum. Kalau belum punya LinkedIn, hapus saja tautannya di bagian hero

## Cara menambah proyek

Bagian "Proyek" sekarang kosong dan cuma menampilkan catatan bahwa proyeknya masih dikerjakan. Ini disengaja: **portofolio jujur tanpa proyek lebih baik daripada portofolio berisi proyek yang tidak ada.**

Di dalam `index.html`, cari `<!-- CARA MENAMBAH PROYEK -->`. Di situ sudah ada template kartu proyek lengkap di dalam komentar — tinggal disalin keluar dan diisi.

Aturan soal link demo/kode:

| Kondisi | Yang dipasang |
|---|---|
| Kode di GitHub + sudah dihosting | Dua-duanya |
| Kode ada, tapi belum/tidak bisa didemokan | Kode Sumber saja |
| Belum ada apa-apa | Hapus seluruh blok link |

Jangan pernah membiarkan `href="#"` — link yang diklik tapi tidak melakukan apa-apa membuat halaman terlihat belum jadi.

**Ide proyek pertama:** website portofolio ini sendiri sudah sah dihitung sebagai proyek — kodenya ada di GitHub. Selain itu, To-Do List app, kalkulator, atau aplikasi cuaca (latihan pakai API) adalah proyek pemula yang umum dan cukup untuk menunjukkan dasar-dasarnya. Semua bisa dihosting gratis di GitHub Pages, sama seperti situs ini.

## Soal form kontak

Sebelumnya ada form "Kirim Pesan" di section Kontak, tapi **sudah dihapus** karena form itu tidak benar-benar mengirim apa pun — pengunjung akan dapat pesan "terima kasih" padahal pesannya hilang begitu saja.

Gantinya sekarang: daftar kontak yang bisa langsung diklik (email membuka aplikasi email, WhatsApp membuka chat). Ini lebih sederhana dan benar-benar berfungsi.

Kalau nanti tetap mau pakai form beneran, cara termudah adalah [Formspree](https://formspree.io) — gratis untuk pemakaian ringan, tinggal daftar dan pasang `action` di tag `<form>`.

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
- Animasi muncul halus saat scroll
- Menu mobile (hamburger) untuk layar kecil
- Sepenuhnya responsif (HP, tablet, desktop)
- Menghormati pengaturan "reduce motion" di OS untuk aksesibilitas
