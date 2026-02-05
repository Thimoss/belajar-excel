export interface GlossaryTerm {
    term: string;
    definition: string;
    example?: string;
    category: string;
}

export const glossaryTerms: GlossaryTerm[] = [
    // Dasar
    {
        term: "Workbook",
        definition: "File Excel yang berisi satu atau lebih worksheet. Workbook adalah dokumen utama tempat Anda menyimpan dan mengolah data.",
        example: "File 'Laporan_Keuangan.xlsx' adalah sebuah workbook",
        category: "Dasar"
    },
    {
        term: "Worksheet",
        definition: "Lembar kerja individual dalam sebuah workbook. Satu workbook bisa memiliki banyak worksheet yang dapat diakses melalui tab di bagian bawah.",
        example: "Sheet1, Sheet2, atau tab 'Januari', 'Februari' adalah worksheet",
        category: "Dasar"
    },
    {
        term: "Cell (Sel)",
        definition: "Kotak individual yang merupakan pertemuan antara satu baris (row) dan satu kolom (column). Sel adalah unit terkecil tempat Anda memasukkan data.",
        example: "Sel A1 adalah pertemuan kolom A dan baris 1",
        category: "Dasar"
    },
    {
        term: "Row (Baris)",
        definition: "Baris horizontal yang membentang dari kiri ke kanan. Baris diberi nomor mulai dari 1 hingga lebih dari 1 juta.",
        example: "Baris 1, baris 2, baris 100",
        category: "Dasar"
    },
    {
        term: "Column (Kolom)",
        definition: "Kolom vertikal yang membentang dari atas ke bawah. Kolom diberi huruf mulai dari A sampai XFD (lebih dari 16.000 kolom).",
        example: "Kolom A, kolom B, kolom AA",
        category: "Dasar"
    },
    {
        term: "Range (Rentang)",
        definition: "Kumpulan sel yang dipilih secara bersamaan, bisa berupa satu baris, satu kolom, atau blok sel persegi.",
        example: "A1:C5 berarti semua sel dari A1 sampai C5",
        category: "Dasar"
    },
    {
        term: "Active Cell (Sel Aktif)",
        definition: "Sel yang sedang dipilih/aktif saat ini, ditandai dengan border tebal. Semua input keyboard akan masuk ke sel aktif.",
        example: "Sel yang dikelilingi kotak hijau tebal",
        category: "Dasar"
    },

    // Interface
    {
        term: "Ribbon",
        definition: "Area menu bergambar di bagian atas Excel yang berisi tab-tab seperti Home, Insert, Page Layout, dll. Setiap tab berisi grup tools terkait.",
        category: "Interface"
    },
    {
        term: "Formula Bar",
        definition: "Kotak panjang di bawah Ribbon yang menampilkan isi sel aktif. Di sinilah Anda bisa melihat dan mengedit rumus atau data dalam sel.",
        category: "Interface"
    },
    {
        term: "Name Box",
        definition: "Kotak kecil di sebelah kiri Formula Bar yang menampilkan alamat sel aktif (misalnya A1). Bisa juga digunakan untuk langsung menuju sel tertentu.",
        example: "Ketik B10 di Name Box lalu Enter untuk langsung ke sel B10",
        category: "Interface"
    },
    {
        term: "Quick Access Toolbar",
        definition: "Toolbar kecil di pojok kiri atas yang berisi shortcut untuk perintah yang sering digunakan seperti Save, Undo, Redo.",
        category: "Interface"
    },
    {
        term: "Status Bar",
        definition: "Bar di bagian paling bawah Excel yang menampilkan informasi seperti mode kerja, quick stats (sum, average) dari sel yang dipilih, dan zoom level.",
        category: "Interface"
    },
    {
        term: "Sheet Tab",
        definition: "Tab di bagian bawah workbook yang menampilkan nama-nama worksheet. Klik tab untuk berpindah antar worksheet.",
        category: "Interface"
    },

    // Formula & Fungsi
    {
        term: "Formula (Rumus)",
        definition: "Ekspresi yang dimulai dengan tanda = untuk melakukan perhitungan. Formula bisa berisi operasi matematika, referensi sel, atau fungsi.",
        example: "=A1+B1 atau =C1*D1",
        category: "Formula"
    },
    {
        term: "Function (Fungsi)",
        definition: "Rumus bawaan Excel yang sudah diprogram untuk melakukan tugas tertentu. Fungsi memiliki nama dan memerlukan argumen dalam kurung.",
        example: "=SUM(A1:A10), =AVERAGE(B1:B5)",
        category: "Formula"
    },
    {
        term: "Argument",
        definition: "Nilai atau referensi yang dimasukkan ke dalam fungsi. Argumen ditulis di dalam kurung setelah nama fungsi.",
        example: "Dalam =SUM(A1:A10), 'A1:A10' adalah argument",
        category: "Formula"
    },
    {
        term: "Cell Reference (Referensi Sel)",
        definition: "Alamat sel yang digunakan dalam rumus untuk merujuk ke nilai di sel tersebut.",
        example: "A1, B5, C10 adalah referensi sel",
        category: "Formula"
    },
    {
        term: "Relative Reference",
        definition: "Referensi sel yang akan berubah secara otomatis saat rumus di-copy ke lokasi lain.",
        example: "=A1 jika di-copy ke bawah menjadi =A2",
        category: "Formula"
    },
    {
        term: "Absolute Reference",
        definition: "Referensi sel yang dikunci dengan tanda $ sehingga tidak berubah saat rumus di-copy.",
        example: "=$A$1 akan tetap merujuk ke A1 meskipun di-copy",
        category: "Formula"
    },
    {
        term: "Mixed Reference",
        definition: "Kombinasi relative dan absolute reference, di mana hanya kolom atau hanya baris yang dikunci.",
        example: "$A1 (kolom terkunci) atau A$1 (baris terkunci)",
        category: "Formula"
    },
    {
        term: "AutoSum",
        definition: "Fitur cepat untuk memasukkan fungsi SUM secara otomatis. Diakses melalui tombol Σ di ribbon atau shortcut Alt + =.",
        category: "Formula"
    },

    // Format
    {
        term: "Cell Format",
        definition: "Tampilan visual sel termasuk font, warna, border, dan format angka. Format tidak mengubah nilai sebenarnya dari sel.",
        category: "Format"
    },
    {
        term: "Number Format",
        definition: "Cara Excel menampilkan angka - bisa sebagai bilangan biasa, persentase, mata uang, tanggal, dll.",
        example: "1000 bisa ditampilkan sebagai Rp1.000 atau 1.000,00",
        category: "Format"
    },
    {
        term: "Conditional Formatting",
        definition: "Format yang diterapkan secara otomatis berdasarkan aturan/kondisi tertentu.",
        example: "Sel dengan nilai > 100 otomatis berwarna hijau",
        category: "Format"
    },
    {
        term: "Merge Cells",
        definition: "Menggabungkan beberapa sel menjadi satu sel besar. Biasa digunakan untuk judul tabel.",
        category: "Format"
    },
    {
        term: "Wrap Text",
        definition: "Fitur untuk menampilkan teks panjang dalam beberapa baris di dalam satu sel, bukan memotongnya.",
        category: "Format"
    },
    {
        term: "Cell Style",
        definition: "Kumpulan format (font, warna, border) yang sudah didefinisikan dan bisa diterapkan dengan cepat ke sel.",
        category: "Format"
    },

    // Data
    {
        term: "Sort",
        definition: "Mengurutkan data berdasarkan nilai dalam satu atau lebih kolom, bisa ascending (A-Z, kecil-besar) atau descending (Z-A, besar-kecil).",
        category: "Data"
    },
    {
        term: "Filter",
        definition: "Menampilkan hanya baris data yang memenuhi kriteria tertentu. Data yang tidak sesuai disembunyikan sementara.",
        example: "Filter untuk menampilkan hanya transaksi bulan Januari",
        category: "Data"
    },
    {
        term: "Table (Tabel)",
        definition: "Range data yang diformat sebagai tabel Excel dengan fitur khusus seperti filter otomatis, baris total, dan formatting bergantian.",
        category: "Data"
    },
    {
        term: "Pivot Table",
        definition: "Tool analisis data yang powerful untuk meringkas, menganalisis, dan menampilkan data dalam berbagai cara.",
        category: "Data"
    },
    {
        term: "Data Validation",
        definition: "Aturan yang membatasi jenis data yang bisa dimasukkan ke sel. Berguna untuk mencegah kesalahan input.",
        example: "Sel hanya boleh diisi angka 1-100",
        category: "Data"
    },
    {
        term: "Fill Handle",
        definition: "Kotak kecil di pojok kanan bawah sel aktif yang bisa di-drag untuk meng-copy data atau rumus, atau membuat series.",
        example: "Drag fill handle untuk meng-copy rumus ke sel di bawahnya",
        category: "Data"
    },
    {
        term: "AutoFill",
        definition: "Fitur untuk mengisi sel secara otomatis dengan pola, seperti urutan angka, hari, bulan, atau meng-copy rumus.",
        example: "Ketik Senin, lalu drag untuk mendapatkan Selasa, Rabu, dst",
        category: "Data"
    },

    // Lainnya
    {
        term: "Clipboard",
        definition: "Tempat penyimpanan sementara untuk data yang di-copy atau di-cut. Excel dapat menyimpan hingga 24 item di clipboard.",
        category: "Lainnya"
    },
    {
        term: "Error Value",
        definition: "Pesan kesalahan yang muncul saat rumus tidak dapat menghitung dengan benar. Diawali dengan tanda #.",
        example: "#VALUE!, #REF!, #DIV/0!, #NAME?",
        category: "Lainnya"
    },
    {
        term: "Chart (Grafik)",
        definition: "Representasi visual dari data dalam bentuk diagram seperti bar chart, pie chart, line chart, dll.",
        category: "Lainnya"
    },
    {
        term: "Print Area",
        definition: "Range sel yang ditandai untuk dicetak. Sel di luar print area tidak akan ikut tercetak.",
        category: "Lainnya"
    },
    {
        term: "Freeze Panes",
        definition: "Fitur untuk mengunci baris atau kolom tertentu agar tetap terlihat saat scroll, berguna untuk header tabel.",
        example: "Freeze baris 1 agar judul kolom selalu terlihat saat scroll ke bawah",
        category: "Lainnya"
    }
];

export const glossaryCategories = ["Dasar", "Interface", "Formula", "Format", "Data", "Lainnya"];

export const getGlossaryByCategory = (): Record<string, GlossaryTerm[]> => {
    return glossaryTerms.reduce((acc, term) => {
        if (!acc[term.category]) {
            acc[term.category] = [];
        }
        acc[term.category].push(term);
        return acc;
    }, {} as Record<string, GlossaryTerm[]>);
};
