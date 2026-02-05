# Website Belajar Excel - Dokumentasi

## Tentang Project

Website kelas online untuk belajar Microsoft Excel dari dasar sampai mahir, dibuat dengan Next.js 16.

## Screenshots

### Home Page
![Home page](/home/thimoti/.gemini/antigravity/brain/542a95a2-1598-4022-8ebc-03d1c0726455/.system_generated/click_feedback/click_feedback_1770279327020.png)

### Daftar Pelajaran
![Lessons page](/home/thimoti/.gemini/antigravity/brain/542a95a2-1598-4022-8ebc-03d1c0726455/.system_generated/click_feedback/click_feedback_1770279349568.png)

### Detail Pelajaran dengan Transkrip
![Lesson detail](/home/thimoti/.gemini/antigravity/brain/542a95a2-1598-4022-8ebc-03d1c0726455/.system_generated/click_feedback/click_feedback_1770279470525.png)

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

### 🎨 Design
- Dark theme dengan aksen hijau Excel (#217346)
- Glassmorphism effects
- Responsive untuk mobile

---

## Demo

![Demo navigasi website](/home/thimoti/.gemini/antigravity/brain/542a95a2-1598-4022-8ebc-03d1c0726455/excel_website_demo_1770279267084.webp)

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
│   └── shortcuts/page.tsx    # Shortcuts page
├── components/               # React components
├── data/
│   ├── lessons.ts            # Lesson content
│   └── shortcuts.ts          # Shortcuts data
```

## Sumber Materi

- [Playlist YouTube: Belajar Excel Dari Nol](https://youtube.com/playlist?list=PLh4cGGFoAFualkAyD-kb42hkyGYzaj1BB)
- [Tutorial Lengkap Excel](https://youtu.be/310z5K14JXw)
