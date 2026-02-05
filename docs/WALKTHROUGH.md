# Website Belajar Excel - Dokumentasi

## Tentang Project

Website kelas online untuk belajar Microsoft Excel dari dasar sampai mahir, dibuat dengan Next.js.

**Live Demo**: Jalankan `npm run dev` untuk melihat website secara lokal.

---

## Fitur

### 📚 6 Pelajaran Terstruktur
| Episode | Topik | Durasi |
|---------|-------|--------|
| 1 | Pengenalan Interface Excel | 10:04 |
| 2 | Formatting Data & Sel | 10:22 |
| 3 | Rumus Aritmatika Dasar | 11:39 |
| 4 | Fungsi Statistik (SUM, AVERAGE, dll) | 11:34 |
| 5 | Praktik & Latihan | 14:22 |
| Bonus | Tutorial Lengkap (Masterclass) | 1:38:25 |

### 🎥 Setiap Pelajaran Berisi
- Video embed YouTube
- Transkrip materi lengkap (Bahasa Indonesia)
- Daftar topik yang dibahas
- Keyboard shortcuts relevan
- Tombol "Tandai Selesai" untuk progress tracking

### ⌨️ Halaman Keyboard Shortcuts
- 60+ shortcuts Excel terorganisir
- Filter berdasarkan kategori
- Fitur pencarian

### 📐 Halaman Rumus
- 116+ rumus Excel lengkap
- 9 kategori: Matematika, Logika, Teks, Lookup, Tanggal, Kondisional, Informasi, Array, Finansial
- Sintaks, contoh, dan penjelasan Bahasa Indonesia

### 📖 Kamus Excel
- 39 istilah Excel dengan definisi
- Dikelompokkan berdasarkan kategori

### 🎨 Design
- Dark & Light theme dengan toggle
- Aksen hijau Excel (#217346)
- Glassmorphism effects
- Responsive untuk mobile

---

## Struktur File

```
excel-belajar/
├── app/
│   ├── page.tsx              # Home page
│   ├── globals.css           # Design system
│   ├── pelajaran/
│   │   ├── page.tsx          # Lesson list
│   │   └── [slug]/page.tsx   # Lesson detail
│   ├── rumus/page.tsx        # Formulas reference
│   ├── kamus/page.tsx        # Excel glossary
│   └── shortcuts/page.tsx    # Shortcuts page
├── components/               # React components
├── data/
│   ├── lessons.ts            # Lesson content
│   ├── shortcuts.ts          # Shortcuts data
│   ├── formulas.ts           # Formulas data
│   └── glossary.ts           # Glossary data
└── docs/                     # Documentation
```

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka http://localhost:3000
```

## Sumber Materi

- [Playlist YouTube: Belajar Excel Dari Nol](https://youtube.com/playlist?list=PLh4cGGFoAFualkAyD-kb42hkyGYzaj1BB)
- [Tutorial Lengkap Excel](https://youtu.be/310z5K14JXw)
