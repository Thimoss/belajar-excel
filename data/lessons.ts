export interface Lesson {
    id: string;
    slug: string;
    episode: number;
    title: string;
    description: string;
    duration: string;
    youtubeId: string;
    topics: string[];
    shortcuts: Shortcut[];
    transcript: string;
}

export interface Shortcut {
    keys: string;
    description: string;
    category: string;
}

export const lessons: Lesson[] = [
    {
        id: "1",
        slug: "pengenalan-interface",
        episode: 1,
        title: "Pengenalan Interface Excel",
        description: "Belajar mengenal tampilan dan elemen-elemen dasar Excel seperti rows, columns, cells, dan ranges.",
        duration: "10:04",
        youtubeId: "6WgvzCU3TI8",
        topics: [
            "Mengenal tampilan Excel",
            "Memahami Ribbon dan Menu",
            "Rows (Baris) dan Columns (Kolom)",
            "Cells (Sel) dan Ranges (Rentang)",
            "Navigasi dasar dalam worksheet"
        ],
        shortcuts: [
            { keys: "Ctrl + Home", description: "Kembali ke sel A1", category: "Navigasi" },
            { keys: "Ctrl + End", description: "Ke sel data terakhir", category: "Navigasi" },
            { keys: "Ctrl + Arrow", description: "Lompat ke ujung data", category: "Navigasi" },
            { keys: "Tab", description: "Pindah ke sel kanan", category: "Navigasi" },
            { keys: "Enter", description: "Pindah ke sel bawah", category: "Navigasi" },
            { keys: "Ctrl + G", description: "Buka Go To dialog", category: "Navigasi" }
        ],
        transcript: `# Episode 1: Pengenalan Interface Excel

## Apa itu Microsoft Excel?

Microsoft Excel adalah aplikasi spreadsheet yang digunakan untuk mengolah data dalam bentuk tabel. Excel sangat berguna untuk:
- Membuat laporan keuangan
- Menghitung data secara otomatis
- Membuat grafik dan visualisasi data
- Menganalisis data bisnis

## Mengenal Tampilan Excel

### 1. Ribbon
Ribbon adalah kumpulan menu dan tools di bagian atas Excel. Terdiri dari beberapa tab:
- **Home**: Tools dasar seperti copy, paste, format
- **Insert**: Menambahkan tabel, grafik, gambar
- **Page Layout**: Pengaturan halaman untuk cetak
- **Formulas**: Semua fungsi dan rumus Excel
- **Data**: Pengolahan dan filter data

### 2. Name Box
Kotak kecil di kiri atas yang menampilkan alamat sel aktif (misalnya A1, B5, dll).

### 3. Formula Bar
Tempat untuk melihat dan mengedit isi sel atau rumus.

### 4. Worksheet Area
Area kerja utama yang berisi cells dalam grid rows dan columns.

## Memahami Struktur Worksheet

### Rows (Baris)
- Baris horizontal yang diberi nomor 1, 2, 3, dst.
- Excel memiliki lebih dari 1 juta baris

### Columns (Kolom)
- Kolom vertikal yang diberi huruf A, B, C, ... Z, AA, AB, dst.
- Excel memiliki lebih dari 16.000 kolom

### Cells (Sel)
- Pertemuan antara row dan column
- Setiap sel memiliki alamat unik seperti A1, B5, C10
- Sel adalah tempat kita memasukkan data

### Ranges (Rentang)
- Kumpulan beberapa sel yang dipilih sekaligus
- Contoh: A1:C5 berarti semua sel dari A1 sampai C5

## Tips Navigasi

1. **Klik sel** untuk memilihnya
2. **Gunakan arrow keys** untuk berpindah sel
3. **Ctrl + Arrow** untuk lompat ke ujung data
4. **Ctrl + Home** untuk kembali ke A1
5. **Ctrl + End** untuk ke sel data terakhir`
    },
    {
        id: "2",
        slug: "formatting-data",
        episode: 2,
        title: "Formatting Data & Sel",
        description: "Belajar memformat tampilan sel, data, font, warna, dan alignment untuk membuat spreadsheet lebih menarik.",
        duration: "10:22",
        youtubeId: "1LsJFDTxZN8",
        topics: [
            "Format Font (Bold, Italic, Underline)",
            "Mengubah ukuran dan jenis font",
            "Warna background dan teks",
            "Alignment (perataan teks)",
            "Borders dan cell styles",
            "Format number, currency, date"
        ],
        shortcuts: [
            { keys: "Ctrl + B", description: "Bold (tebal)", category: "Format" },
            { keys: "Ctrl + I", description: "Italic (miring)", category: "Format" },
            { keys: "Ctrl + U", description: "Underline (garis bawah)", category: "Format" },
            { keys: "Ctrl + 1", description: "Buka Format Cells dialog", category: "Format" },
            { keys: "Ctrl + Shift + $", description: "Format Currency", category: "Format" },
            { keys: "Ctrl + Shift + %", description: "Format Persen", category: "Format" },
            { keys: "Alt + H + A + C", description: "Center alignment", category: "Format" }
        ],
        transcript: `# Episode 2: Formatting Data & Sel

## Mengapa Format Penting?

Formatting membuat data lebih mudah dibaca dan dipahami. Spreadsheet yang rapi akan:
- Lebih profesional
- Mudah dianalisis
- Mencegah kesalahan input

## Format Font

### Bold, Italic, Underline
- **Ctrl + B**: Membuat teks tebal (Bold)
- **Ctrl + I**: Membuat teks miring (Italic)  
- **Ctrl + U**: Membuat garis bawah (Underline)

### Mengubah Font
1. Pilih sel yang ingin diformat
2. Klik dropdown Font di ribbon Home
3. Pilih font yang diinginkan

Font yang direkomendasikan untuk spreadsheet:
- Calibri (default)
- Arial
- Segoe UI

### Ukuran Font
- Pilih sel, lalu ubah size di ribbon
- Gunakan 11-12pt untuk data biasa
- Gunakan 14-16pt untuk judul

## Warna dan Background

### Warna Teks
1. Pilih sel
2. Klik Font Color (ikon A dengan garis warna)
3. Pilih warna yang diinginkan

### Warna Background (Fill)
1. Pilih sel
2. Klik Fill Color (ikon ember cat)
3. Pilih warna background

**Tips**: Gunakan warna header yang berbeda dari data!

## Alignment (Perataan)

### Horizontal Alignment
- **Left**: Rata kiri (teks)
- **Center**: Rata tengah (judul)
- **Right**: Rata kanan (angka)

### Vertical Alignment
- **Top**: Rata atas
- **Middle**: Rata tengah
- **Bottom**: Rata bawah

### Merge & Center
Menggabungkan beberapa sel menjadi satu untuk judul besar.

## Borders

Menambahkan garis pada sel:
1. Pilih range sel
2. Klik dropdown Borders di ribbon
3. Pilih jenis border:
   - All Borders: Garis di semua sisi
   - Outside Borders: Garis di luar saja
   - Thick Box Border: Garis tebal

## Format Angka

### Currency (Mata Uang)
- Ctrl + Shift + $ untuk format currency
- Atau klik Number Format > Currency

### Percentage (Persen)
- Ctrl + Shift + % untuk format persen
- Angka 0.25 akan menjadi 25%

### Date (Tanggal)
- Format > Date untuk memilih format tanggal
- Contoh: 05/02/2026 atau 05-Feb-2026`
    },
    {
        id: "3",
        slug: "rumus-aritmatika",
        episode: 3,
        title: "Rumus Aritmatika Dasar",
        description: "Belajar membuat rumus perhitungan dasar: penjumlahan, pengurangan, perkalian, dan pembagian.",
        duration: "11:39",
        youtubeId: "mDqrOwm1EYo",
        topics: [
            "Cara menulis rumus di Excel",
            "Penjumlahan (+)",
            "Pengurangan (-)",
            "Perkalian (*)",
            "Pembagian (/)",
            "Menggunakan referensi sel"
        ],
        shortcuts: [
            { keys: "=", description: "Memulai penulisan rumus", category: "Formula" },
            { keys: "Enter", description: "Eksekusi rumus", category: "Formula" },
            { keys: "Esc", description: "Batal menulis rumus", category: "Formula" },
            { keys: "F2", description: "Edit rumus dalam sel", category: "Formula" },
            { keys: "Ctrl + `", description: "Tampilkan semua rumus", category: "Formula" }
        ],
        transcript: `# Episode 3: Rumus Aritmatika Dasar

## Aturan Dasar Menulis Rumus

1. **Semua rumus dimulai dengan tanda =** (sama dengan)
2. Gunakan referensi sel, bukan angka langsung
3. Tekan Enter untuk menjalankan rumus

## Operator Aritmatika

| Operator | Fungsi | Contoh |
|----------|--------|--------|
| + | Penjumlahan | =A1+B1 |
| - | Pengurangan | =A1-B1 |
| * | Perkalian | =A1*B1 |
| / | Pembagian | =A1/B1 |
| ^ | Pangkat | =A1^2 |

## Contoh Penjumlahan

Misal kita punya data:
- Sel A1 = 100
- Sel B1 = 50

Untuk menjumlahkan:
\`\`\`
=A1+B1
\`\`\`
Hasil: 150

## Contoh Pengurangan

\`\`\`
=A1-B1
\`\`\`
Hasil: 50 (100 - 50)

## Contoh Perkalian

Untuk menghitung total harga:
- Sel A1 = Harga (10000)
- Sel B1 = Qty (5)

\`\`\`
=A1*B1
\`\`\`
Hasil: 50000

## Contoh Pembagian

Untuk menghitung rata-rata manual:
- Sel A1 = Total (1000)
- Sel B1 = Jumlah item (4)

\`\`\`
=A1/B1
\`\`\`
Hasil: 250

## Menggunakan Referensi Sel

**PENTING**: Selalu gunakan referensi sel, bukan angka langsung!

❌ Salah: \`=100+50\`
✅ Benar: \`=A1+B1\`

Keuntungan referensi sel:
1. Rumus otomatis update jika data berubah
2. Mudah di-copy ke sel lain
3. Lebih mudah di-audit

## Urutan Operasi (Order of Operations)

Excel mengikuti aturan matematika:
1. Tanda kurung ( ) - pertama
2. Pangkat ^ - kedua
3. Perkalian * dan Pembagian / - ketiga (kiri ke kanan)
4. Penjumlahan + dan Pengurangan - - keempat (kiri ke kanan)

Contoh:
\`\`\`
=10+5*2
\`\`\`
Hasil: 20 (bukan 30, karena 5*2 dihitung dulu)

Untuk mendapatkan 30:
\`\`\`
=(10+5)*2
\`\`\`

## Tips Praktis

1. Klik sel yang ingin direferensikan daripada mengetik alamatnya
2. Gunakan warna untuk melacak referensi saat editing
3. Cek formula bar untuk melihat rumus lengkap`
    },
    {
        id: "4",
        slug: "fungsi-statistik",
        episode: 4,
        title: "Fungsi Statistik Dasar",
        description: "Belajar menggunakan fungsi SUM, AVERAGE, MIN, MAX, dan COUNT untuk mengolah data.",
        duration: "11:34",
        youtubeId: "1ZAWufln-dc",
        topics: [
            "Fungsi SUM (Penjumlahan)",
            "Fungsi AVERAGE (Rata-rata)",
            "Fungsi MIN (Nilai minimum)",
            "Fungsi MAX (Nilai maksimum)",
            "Fungsi COUNT (Menghitung data)"
        ],
        shortcuts: [
            { keys: "Alt + =", description: "AutoSum (SUM otomatis)", category: "Fungsi" },
            { keys: "Ctrl + Shift + Enter", description: "Array formula", category: "Fungsi" }
        ],
        transcript: `# Episode 4: Fungsi Statistik Dasar

## Apa itu Fungsi?

Fungsi adalah rumus bawaan Excel yang sudah dibuat untuk melakukan perhitungan tertentu. Format penulisan:

\`\`\`
=NAMA_FUNGSI(argument1, argument2, ...)
\`\`\`

## Fungsi SUM

Menjumlahkan semua angka dalam range.

### Sintaks
\`\`\`
=SUM(range)
=SUM(number1, number2, ...)
\`\`\`

### Contoh
Menjumlahkan data di A1 sampai A10:
\`\`\`
=SUM(A1:A10)
\`\`\`

Menjumlahkan beberapa range:
\`\`\`
=SUM(A1:A10, C1:C10)
\`\`\`

### AutoSum Shortcut
Tekan **Alt + =** untuk SUM otomatis!

## Fungsi AVERAGE

Menghitung rata-rata dari sekumpulan angka.

### Sintaks
\`\`\`
=AVERAGE(range)
\`\`\`

### Contoh
Menghitung nilai rata-rata siswa:
\`\`\`
=AVERAGE(B2:B10)
\`\`\`

Jika data: 80, 90, 70, 85, 75
Hasil: 80 (rata-rata)

## Fungsi MIN

Mencari nilai terkecil dalam range.

### Sintaks
\`\`\`
=MIN(range)
\`\`\`

### Contoh
Mencari nilai terendah:
\`\`\`
=MIN(B2:B10)
\`\`\`

Jika data: 80, 90, 70, 85, 75
Hasil: 70 (nilai terkecil)

## Fungsi MAX

Mencari nilai terbesar dalam range.

### Sintaks
\`\`\`
=MAX(range)
\`\`\`

### Contoh
Mencari nilai tertinggi:
\`\`\`
=MAX(B2:B10)
\`\`\`

Jika data: 80, 90, 70, 85, 75
Hasil: 90 (nilai terbesar)

## Fungsi COUNT

Menghitung jumlah sel yang berisi angka.

### Sintaks
\`\`\`
=COUNT(range)
\`\`\`

### Contoh
Menghitung berapa siswa yang sudah ada nilainya:
\`\`\`
=COUNT(B2:B20)
\`\`\`

### Variasi COUNT
- **COUNT**: Hitung sel dengan angka
- **COUNTA**: Hitung sel yang tidak kosong (termasuk teks)
- **COUNTBLANK**: Hitung sel kosong

## Contoh Kasus: Laporan Nilai Siswa

| No | Nama | Nilai |
|----|------|-------|
| 1 | Andi | 85 |
| 2 | Budi | 90 |
| 3 | Caca | 78 |
| 4 | Deni | 92 |
| 5 | Eka | 88 |

Membuat ringkasan:
- **Total**: =SUM(C2:C6) → 433
- **Rata-rata**: =AVERAGE(C2:C6) → 86.6
- **Tertinggi**: =MAX(C2:C6) → 92
- **Terendah**: =MIN(C2:C6) → 78
- **Jumlah Siswa**: =COUNT(C2:C6) → 5

## Tips Menggunakan Fungsi

1. Ketik = lalu nama fungsi, Excel akan menampilkan saran
2. Tekan Tab untuk autocomplete nama fungsi
3. Perhatikan tooltip yang muncul untuk melihat format
4. Gunakan tombol fx di formula bar untuk wizard`
    },
    {
        id: "5",
        slug: "praktik-latihan",
        episode: 5,
        title: "Praktik & Latihan",
        description: "Latihan praktis menggunakan semua yang sudah dipelajari untuk membuat spreadsheet nyata.",
        duration: "14:22",
        youtubeId: "CIfuOzfCVOg",
        topics: [
            "Membuat tabel data penjualan",
            "Menghitung total dan rata-rata",
            "Formatting tabel profesional",
            "Copy formula dengan benar",
            "Tips dan trik praktis"
        ],
        shortcuts: [
            { keys: "Ctrl + D", description: "Copy sel atas ke bawah", category: "Edit" },
            { keys: "Ctrl + R", description: "Copy sel kiri ke kanan", category: "Edit" },
            { keys: "Ctrl + ;", description: "Insert tanggal hari ini", category: "Edit" },
            { keys: "Ctrl + Shift + ;", description: "Insert waktu sekarang", category: "Edit" },
            { keys: "F4", description: "Toggle absolute reference ($)", category: "Formula" }
        ],
        transcript: `# Episode 5: Praktik & Latihan

## Proyek: Laporan Penjualan Toko

Kita akan membuat laporan penjualan lengkap menggunakan semua skill yang sudah dipelajari.

## Langkah 1: Membuat Struktur Tabel

Buat header di row 1:
| A | B | C | D | E |
|---|---|---|---|---|
| No | Produk | Harga | Qty | Total |

## Langkah 2: Input Data

Masukkan data penjualan:

| No | Produk | Harga | Qty | Total |
|----|--------|-------|-----|-------|
| 1 | Pensil | 3000 | 10 | |
| 2 | Buku | 15000 | 5 | |
| 3 | Penghapus | 2000 | 20 | |
| 4 | Penggaris | 5000 | 8 | |
| 5 | Pulpen | 4000 | 15 | |

## Langkah 3: Buat Rumus Total

Di sel E2, tulis:
\`\`\`
=C2*D2
\`\`\`

Ini akan mengalikan Harga x Qty.

## Langkah 4: Copy Rumus ke Bawah

1. Pilih sel E2
2. Arahkan cursor ke pojok kanan bawah sel (muncul tanda +)
3. Drag ke bawah sampai E6

Atau gunakan shortcut:
1. Pilih E2:E6
2. Tekan Ctrl + D

## Langkah 5: Tambah Ringkasan

Di bawah tabel, tambahkan:

Sel A8: "Total Penjualan"
Sel E8: \`=SUM(E2:E6)\`

Sel A9: "Rata-rata"
Sel E9: \`=AVERAGE(E2:E6)\`

Sel A10: "Penjualan Tertinggi"
Sel E10: \`=MAX(E2:E6)\`

Sel A11: "Penjualan Terendah"
Sel E11: \`=MIN(E2:E6)\`

## Langkah 6: Format Tabel

### Header
1. Pilih A1:E1
2. Bold (Ctrl + B)
3. Background warna hijau tua
4. Font warna putih
5. Center alignment

### Data Harga & Total
1. Pilih C2:C6 dan E2:E11
2. Format sebagai Currency (Ctrl + Shift + $)

### Borders
1. Pilih seluruh tabel A1:E11
2. Tambahkan All Borders

## Langkah 7: Hasil Akhir

Tabel profesional dengan:
- Header yang jelas dan menonjol
- Data terformat dengan baik
- Perhitungan otomatis
- Ringkasan statistik

## Tips Copy Formula

### Relative Reference
Rumus seperti \`=C2*D2\` akan berubah saat di-copy:
- Di E3 menjadi \`=C3*D3\`
- Di E4 menjadi \`=C4*D4\`

### Absolute Reference ($)
Untuk mengunci referensi, gunakan $:
- \`$A$1\` = Kolom dan baris terkunci
- \`$A1\` = Hanya kolom terkunci
- \`A$1\` = Hanya baris terkunci

Tekan **F4** untuk toggle antara mode referensi!

## Tips Praktis Lainnya

1. **Ctrl + ;** = Insert tanggal hari ini
2. **Ctrl + Shift + ;** = Insert waktu sekarang
3. **Ctrl + '** = Copy nilai sel di atas
4. **Ctrl + Enter** = Input nilai ke semua sel yang dipilih`
    },
    {
        id: "6",
        slug: "tutorial-lengkap",
        episode: 0,
        title: "Tutorial Lengkap Excel (Masterclass)",
        description: "Video komprehensif dari dasar sampai mahir dalam satu sesi belajar intensif.",
        duration: "1:38:25",
        youtubeId: "310z5K14JXw",
        topics: [
            "Pengenalan lengkap Excel",
            "Semua fitur formatting",
            "Rumus dan fungsi dasar",
            "Tips dan trik produktivitas",
            "Praktik kasus nyata"
        ],
        shortcuts: [
            { keys: "Ctrl + N", description: "Buat workbook baru", category: "File" },
            { keys: "Ctrl + O", description: "Buka file", category: "File" },
            { keys: "Ctrl + S", description: "Simpan file", category: "File" },
            { keys: "Ctrl + P", description: "Print", category: "File" },
            { keys: "Ctrl + W", description: "Tutup workbook", category: "File" },
            { keys: "Ctrl + Z", description: "Undo", category: "Edit" },
            { keys: "Ctrl + Y", description: "Redo", category: "Edit" },
            { keys: "Ctrl + C", description: "Copy", category: "Edit" },
            { keys: "Ctrl + X", description: "Cut", category: "Edit" },
            { keys: "Ctrl + V", description: "Paste", category: "Edit" }
        ],
        transcript: `# Tutorial Lengkap Excel (Masterclass)

## Tentang Video Ini

Video ini adalah tutorial komprehensif yang mencakup seluruh materi Excel dari dasar sampai mahir dalam satu sesi. Cocok untuk:
- Pemula yang ingin belajar Excel dari nol
- Pengguna yang ingin mengulang semua konsep dasar
- Referensi lengkap dalam satu tempat

## Materi yang Dibahas

### Bagian 1: Dasar-Dasar Excel (0:00 - 20:00)
- Mengenal interface Excel
- Rows, columns, dan cells
- Navigasi dalam worksheet
- Input dan edit data

### Bagian 2: Formatting (20:00 - 40:00)
- Format font dan warna
- Alignment dan borders
- Format angka dan tanggal
- Merge cells dan wrap text

### Bagian 3: Rumus Dasar (40:00 - 60:00)
- Operator aritmatika
- Menulis rumus yang benar
- Referensi sel
- Order of operations

### Bagian 4: Fungsi Excel (60:00 - 80:00)
- SUM, AVERAGE, MIN, MAX, COUNT
- IF dan logika dasar
- VLOOKUP pengenalan
- TEXT functions

### Bagian 5: Tips Produktivitas (80:00 - akhir)
- Keyboard shortcuts penting
- AutoFill dan Flash Fill
- Find & Replace
- Data validation dasar

## Rekomendasi Belajar

Jika ini pertama kali Anda belajar Excel:
1. Tonton episode 1-5 terlebih dahulu
2. Praktikkan setiap konsep
3. Gunakan video ini sebagai referensi tambahan

Jika Anda sudah familiar dengan Excel:
1. Gunakan video ini untuk mengisi gap knowledge
2. Skip ke bagian yang Anda butuhkan
3. Fokus pada shortcuts dan tips produktivitas

## All-in-One Reference

Video ini menjadi satu-satunya sumber yang Anda butuhkan untuk menguasai dasar-dasar Excel dengan lengkap.`
    }
];

export const getLessonBySlug = (slug: string): Lesson | undefined => {
    return lessons.find(lesson => lesson.slug === slug);
};

export const getNextLesson = (currentSlug: string): Lesson | undefined => {
    const currentIndex = lessons.findIndex(lesson => lesson.slug === currentSlug);
    if (currentIndex === -1 || currentIndex === lessons.length - 1) return undefined;
    return lessons[currentIndex + 1];
};

export const getPreviousLesson = (currentSlug: string): Lesson | undefined => {
    const currentIndex = lessons.findIndex(lesson => lesson.slug === currentSlug);
    if (currentIndex <= 0) return undefined;
    return lessons[currentIndex - 1];
};
