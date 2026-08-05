# Halaman Personal — Bima Sangkur

Satu file (`index.html`), HTML + CSS murni. JavaScript-nya cuma satu baris untuk menampilkan tahun di footer. Tanpa framework, tanpa build tool.

## Cara membuka

Klik dua kali `index.html`. Tidak perlu server atau instalasi apa pun.

## Kenapa sesederhana ini

Isi halamannya memang sedikit — nama, dua paragraf, daftar keahlian, kontak. Kalau kerangkanya besar (navigasi sticky, animasi scroll, tombol tema, menu hamburger), yang terlihat malah kesenjangan antara "banyak hiasan" dan "sedikit isi".

Jadi halaman ini dibuat satu kolom sempit (36rem), tanpa navigasi dan tanpa animasi. Isinya cukup satu-dua layar, jadi orang tinggal scroll.

Mode gelap tetap ada — mengikuti pengaturan sistem secara otomatis, tanpa tombol.

## Yang perlu diedit

Cari komentar `<!-- EDIT: ... -->` di `index.html`:

- [ ] **Keahlian** — isinya sekarang perkiraan. Isi hanya yang benar-benar pernah dipakai
- [ ] **Proyek** — sengaja dikosongkan sampai ada karya nyata (lihat bawah)
- [ ] **Foto** (opsional) — sekarang pakai lingkaran berisi inisial "BS". Kalau mau pakai foto asli, taruh filenya di folder ini lalu ganti `<div class="avatar">` jadi `<img class="avatar" src="foto.jpg" alt="Foto Bima Sangkur">`

## Cara menambah proyek

Di dalam `index.html`, cari `CARA MENAMBAH PROYEK`. Template-nya sudah ada di situ dalam bentuk komentar, tinggal disalin keluar.

Soal link demo/kode: **jangan pasang link yang tidak mengarah ke mana-mana.** Link mati membuat halaman terlihat belum jadi — lebih baik nama proyeknya ditulis sebagai teks biasa dulu.

Untuk posisi developer, link ke **kode sumber (GitHub)** biasanya lebih penting daripada live demo, karena yang dinilai adalah cara menulis kodenya.

**Ide proyek pertama:** halaman ini sendiri sudah sah dihitung sebagai proyek — reponya sudah ada di GitHub. Selain itu To-Do List app, kalkulator, atau aplikasi cuaca (latihan pakai API) adalah proyek pemula yang umum. Semuanya bisa dihosting gratis di GitHub Pages.

## Menayangkan online (GitHub Pages)

Repo: <https://github.com/bimasangkur6-jpg/bimasangkur>

1. Buka **Settings → Pages**
2. Bagian **Source**, pilih **Deploy from a branch**
3. Pilih branch `main`, folder `/ (root)`, lalu **Save**
4. Tunggu 1–2 menit. Situs terbit di `https://bimasangkur6-jpg.github.io/bimasangkur/`

Untuk mematikan lagi: ubah **Source** jadi **None**.

## Struktur

```
portfolio-website/
├── index.html   ← semua ada di sini
└── README.md
```
