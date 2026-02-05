export interface ExcelFormula {
    name: string;
    syntax: string;
    description: string;
    example: string;
    result?: string;
    category: string;
    difficulty: 'Dasar' | 'Menengah' | 'Lanjutan';
}

export const formulas: ExcelFormula[] = [
    // ==================== MATEMATIKA & ARITMATIKA ====================
    {
        name: "SUM",
        syntax: "=SUM(number1, [number2], ...)",
        description: "Menjumlahkan semua angka dalam range atau argumen yang diberikan.",
        example: "=SUM(A1:A10)",
        result: "Hasil: Total semua nilai di A1 sampai A10",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "AVERAGE",
        syntax: "=AVERAGE(number1, [number2], ...)",
        description: "Menghitung rata-rata dari sekumpulan angka.",
        example: "=AVERAGE(B1:B20)",
        result: "Hasil: Rata-rata nilai di B1 sampai B20",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "MIN",
        syntax: "=MIN(number1, [number2], ...)",
        description: "Mencari nilai terkecil dari sekumpulan angka.",
        example: "=MIN(C1:C50)",
        result: "Hasil: Nilai terkecil di range C1:C50",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "MAX",
        syntax: "=MAX(number1, [number2], ...)",
        description: "Mencari nilai terbesar dari sekumpulan angka.",
        example: "=MAX(D1:D100)",
        result: "Hasil: Nilai terbesar di range D1:D100",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "COUNT",
        syntax: "=COUNT(value1, [value2], ...)",
        description: "Menghitung jumlah sel yang berisi angka.",
        example: "=COUNT(A1:A20)",
        result: "Hasil: Jumlah sel yang berisi angka",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "COUNTA",
        syntax: "=COUNTA(value1, [value2], ...)",
        description: "Menghitung jumlah sel yang tidak kosong (termasuk teks).",
        example: "=COUNTA(A1:A50)",
        result: "Hasil: Jumlah sel yang terisi",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "COUNTBLANK",
        syntax: "=COUNTBLANK(range)",
        description: "Menghitung jumlah sel kosong dalam range.",
        example: "=COUNTBLANK(A1:A100)",
        result: "Hasil: Jumlah sel kosong",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "ROUND",
        syntax: "=ROUND(number, num_digits)",
        description: "Membulatkan angka ke jumlah digit desimal tertentu.",
        example: "=ROUND(3.14159, 2)",
        result: "Hasil: 3.14",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "ROUNDUP",
        syntax: "=ROUNDUP(number, num_digits)",
        description: "Membulatkan angka ke atas.",
        example: "=ROUNDUP(3.14, 1)",
        result: "Hasil: 3.2",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "ROUNDDOWN",
        syntax: "=ROUNDDOWN(number, num_digits)",
        description: "Membulatkan angka ke bawah.",
        example: "=ROUNDDOWN(3.99, 0)",
        result: "Hasil: 3",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "ABS",
        syntax: "=ABS(number)",
        description: "Mengembalikan nilai absolut (positif) dari angka.",
        example: "=ABS(-15)",
        result: "Hasil: 15",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "SQRT",
        syntax: "=SQRT(number)",
        description: "Menghitung akar kuadrat dari angka.",
        example: "=SQRT(16)",
        result: "Hasil: 4",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "POWER",
        syntax: "=POWER(number, power)",
        description: "Menghitung hasil pangkat dari angka.",
        example: "=POWER(2, 3)",
        result: "Hasil: 8 (2 pangkat 3)",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "MOD",
        syntax: "=MOD(number, divisor)",
        description: "Mengembalikan sisa pembagian.",
        example: "=MOD(10, 3)",
        result: "Hasil: 1 (sisa 10÷3)",
        category: "Matematika",
        difficulty: "Menengah"
    },
    {
        name: "INT",
        syntax: "=INT(number)",
        description: "Membulatkan angka ke bawah ke bilangan bulat terdekat.",
        example: "=INT(5.9)",
        result: "Hasil: 5",
        category: "Matematika",
        difficulty: "Dasar"
    },
    {
        name: "PRODUCT",
        syntax: "=PRODUCT(number1, [number2], ...)",
        description: "Mengalikan semua angka dalam argumen.",
        example: "=PRODUCT(A1:A5)",
        result: "Hasil: Perkalian semua nilai di range",
        category: "Matematika",
        difficulty: "Menengah"
    },
    {
        name: "SUMPRODUCT",
        syntax: "=SUMPRODUCT(array1, [array2], ...)",
        description: "Mengalikan elemen array lalu menjumlahkan hasilnya.",
        example: "=SUMPRODUCT(A1:A3, B1:B3)",
        result: "(A1*B1) + (A2*B2) + (A3*B3)",
        category: "Matematika",
        difficulty: "Lanjutan"
    },
    {
        name: "MEDIAN",
        syntax: "=MEDIAN(number1, [number2], ...)",
        description: "Mencari nilai tengah dari sekumpulan angka.",
        example: "=MEDIAN(A1:A10)",
        result: "Hasil: Nilai tengah",
        category: "Matematika",
        difficulty: "Menengah"
    },
    {
        name: "MODE",
        syntax: "=MODE(number1, [number2], ...)",
        description: "Mencari nilai yang paling sering muncul.",
        example: "=MODE(A1:A20)",
        result: "Hasil: Nilai yang paling sering muncul",
        category: "Matematika",
        difficulty: "Menengah"
    },
    {
        name: "STDEV",
        syntax: "=STDEV(number1, [number2], ...)",
        description: "Menghitung standar deviasi (sampel).",
        example: "=STDEV(A1:A100)",
        result: "Hasil: Standar deviasi",
        category: "Matematika",
        difficulty: "Lanjutan"
    },
    {
        name: "RAND",
        syntax: "=RAND()",
        description: "Menghasilkan angka acak antara 0 dan 1.",
        example: "=RAND()",
        result: "Hasil: Angka acak seperti 0.234891",
        category: "Matematika",
        difficulty: "Menengah"
    },
    {
        name: "RANDBETWEEN",
        syntax: "=RANDBETWEEN(bottom, top)",
        description: "Menghasilkan angka bulat acak antara dua nilai.",
        example: "=RANDBETWEEN(1, 100)",
        result: "Hasil: Angka acak 1-100",
        category: "Matematika",
        difficulty: "Menengah"
    },
    {
        name: "CEILING",
        syntax: "=CEILING(number, significance)",
        description: "Membulatkan angka ke atas ke kelipatan terdekat.",
        example: "=CEILING(4.3, 1)",
        result: "Hasil: 5",
        category: "Matematika",
        difficulty: "Menengah"
    },
    {
        name: "FLOOR",
        syntax: "=FLOOR(number, significance)",
        description: "Membulatkan angka ke bawah ke kelipatan terdekat.",
        example: "=FLOOR(4.9, 1)",
        result: "Hasil: 4",
        category: "Matematika",
        difficulty: "Menengah"
    },

    // ==================== LOGIKA ====================
    {
        name: "IF",
        syntax: "=IF(logical_test, value_if_true, value_if_false)",
        description: "Menjalankan kondisi logika. Jika benar, kembalikan nilai pertama. Jika salah, kembalikan nilai kedua.",
        example: '=IF(A1>70, "Lulus", "Gagal")',
        result: "Hasil: Lulus jika A1>70, Gagal jika tidak",
        category: "Logika",
        difficulty: "Dasar"
    },
    {
        name: "AND",
        syntax: "=AND(logical1, [logical2], ...)",
        description: "Mengembalikan TRUE jika semua kondisi benar.",
        example: "=AND(A1>0, B1>0)",
        result: "TRUE jika keduanya positif",
        category: "Logika",
        difficulty: "Menengah"
    },
    {
        name: "OR",
        syntax: "=OR(logical1, [logical2], ...)",
        description: "Mengembalikan TRUE jika salah satu kondisi benar.",
        example: "=OR(A1>100, B1>100)",
        result: "TRUE jika salah satu >100",
        category: "Logika",
        difficulty: "Menengah"
    },
    {
        name: "NOT",
        syntax: "=NOT(logical)",
        description: "Membalik nilai logika. TRUE menjadi FALSE, dan sebaliknya.",
        example: "=NOT(A1>10)",
        result: "TRUE jika A1 TIDAK >10",
        category: "Logika",
        difficulty: "Menengah"
    },
    {
        name: "IFS",
        syntax: "=IFS(logical_test1, value1, [logical_test2, value2], ...)",
        description: "Mengevaluasi beberapa kondisi dan mengembalikan nilai yang sesuai dengan kondisi pertama yang TRUE.",
        example: '=IFS(A1>=90,"A", A1>=80,"B", A1>=70,"C", TRUE,"D")',
        result: "Konversi nilai ke grade",
        category: "Logika",
        difficulty: "Menengah"
    },
    {
        name: "IFERROR",
        syntax: "=IFERROR(value, value_if_error)",
        description: "Mengembalikan nilai alternatif jika rumus menghasilkan error.",
        example: '=IFERROR(A1/B1, "Error")',
        result: "Menampilkan 'Error' jika pembagian gagal",
        category: "Logika",
        difficulty: "Menengah"
    },
    {
        name: "IFNA",
        syntax: "=IFNA(value, value_if_na)",
        description: "Mengembalikan nilai alternatif jika rumus menghasilkan #N/A.",
        example: '=IFNA(VLOOKUP(A1,B:C,2,0), "Tidak ditemukan")',
        result: "Menampilkan teks jika VLOOKUP gagal",
        category: "Logika",
        difficulty: "Menengah"
    },
    {
        name: "SWITCH",
        syntax: "=SWITCH(expression, value1, result1, [value2, result2], ..., [default])",
        description: "Mengevaluasi ekspresi terhadap daftar nilai dan mengembalikan hasil yang cocok.",
        example: '=SWITCH(A1, 1,"Jan", 2,"Feb", 3,"Mar", "Lainnya")',
        result: "Konversi angka bulan ke nama",
        category: "Logika",
        difficulty: "Menengah"
    },
    {
        name: "XOR",
        syntax: "=XOR(logical1, [logical2], ...)",
        description: "Exclusive OR - TRUE jika jumlah kondisi TRUE ganjil.",
        example: "=XOR(A1>0, B1>0)",
        result: "TRUE jika tepat satu yang TRUE",
        category: "Logika",
        difficulty: "Lanjutan"
    },

    // ==================== TEKS ====================
    {
        name: "LEFT",
        syntax: "=LEFT(text, [num_chars])",
        description: "Mengambil karakter dari kiri teks.",
        example: '=LEFT("Hello World", 5)',
        result: "Hasil: Hello",
        category: "Teks",
        difficulty: "Dasar"
    },
    {
        name: "RIGHT",
        syntax: "=RIGHT(text, [num_chars])",
        description: "Mengambil karakter dari kanan teks.",
        example: '=RIGHT("Hello World", 5)',
        result: "Hasil: World",
        category: "Teks",
        difficulty: "Dasar"
    },
    {
        name: "MID",
        syntax: "=MID(text, start_num, num_chars)",
        description: "Mengambil karakter dari tengah teks.",
        example: '=MID("Hello World", 7, 5)',
        result: "Hasil: World",
        category: "Teks",
        difficulty: "Dasar"
    },
    {
        name: "LEN",
        syntax: "=LEN(text)",
        description: "Menghitung jumlah karakter dalam teks.",
        example: '=LEN("Excel")',
        result: "Hasil: 5",
        category: "Teks",
        difficulty: "Dasar"
    },
    {
        name: "CONCATENATE",
        syntax: "=CONCATENATE(text1, [text2], ...)",
        description: "Menggabungkan beberapa teks menjadi satu.",
        example: '=CONCATENATE(A1, " ", B1)',
        result: "Menggabungkan isi A1 dan B1",
        category: "Teks",
        difficulty: "Dasar"
    },
    {
        name: "CONCAT",
        syntax: "=CONCAT(text1, [text2], ...)",
        description: "Versi modern CONCATENATE, bisa menerima range.",
        example: "=CONCAT(A1:A5)",
        result: "Menggabungkan semua teks di range",
        category: "Teks",
        difficulty: "Dasar"
    },
    {
        name: "TEXTJOIN",
        syntax: "=TEXTJOIN(delimiter, ignore_empty, text1, ...)",
        description: "Menggabungkan teks dengan pemisah.",
        example: '=TEXTJOIN(", ", TRUE, A1:A5)',
        result: "Hasil: A1, A2, A3, A4, A5 (dengan koma)",
        category: "Teks",
        difficulty: "Menengah"
    },
    {
        name: "UPPER",
        syntax: "=UPPER(text)",
        description: "Mengubah semua huruf menjadi kapital.",
        example: '=UPPER("hello")',
        result: "Hasil: HELLO",
        category: "Teks",
        difficulty: "Dasar"
    },
    {
        name: "LOWER",
        syntax: "=LOWER(text)",
        description: "Mengubah semua huruf menjadi huruf kecil.",
        example: '=LOWER("HELLO")',
        result: "Hasil: hello",
        category: "Teks",
        difficulty: "Dasar"
    },
    {
        name: "PROPER",
        syntax: "=PROPER(text)",
        description: "Mengubah huruf pertama setiap kata menjadi kapital.",
        example: '=PROPER("john doe")',
        result: "Hasil: John Doe",
        category: "Teks",
        difficulty: "Dasar"
    },
    {
        name: "TRIM",
        syntax: "=TRIM(text)",
        description: "Menghapus spasi berlebih dari teks.",
        example: '=TRIM("  Hello   World  ")',
        result: "Hasil: Hello World",
        category: "Teks",
        difficulty: "Dasar"
    },
    {
        name: "CLEAN",
        syntax: "=CLEAN(text)",
        description: "Menghapus karakter non-printable dari teks.",
        example: "=CLEAN(A1)",
        result: "Teks bersih tanpa karakter khusus",
        category: "Teks",
        difficulty: "Menengah"
    },
    {
        name: "SUBSTITUTE",
        syntax: "=SUBSTITUTE(text, old_text, new_text, [instance_num])",
        description: "Mengganti teks tertentu dengan teks baru.",
        example: '=SUBSTITUTE("Hello World", "World", "Excel")',
        result: "Hasil: Hello Excel",
        category: "Teks",
        difficulty: "Menengah"
    },
    {
        name: "REPLACE",
        syntax: "=REPLACE(old_text, start_num, num_chars, new_text)",
        description: "Mengganti bagian teks berdasarkan posisi.",
        example: '=REPLACE("Hello", 1, 2, "XX")',
        result: "Hasil: XXllo",
        category: "Teks",
        difficulty: "Menengah"
    },
    {
        name: "FIND",
        syntax: "=FIND(find_text, within_text, [start_num])",
        description: "Mencari posisi teks dalam teks lain (case-sensitive).",
        example: '=FIND("o", "Hello")',
        result: "Hasil: 5 (posisi huruf o)",
        category: "Teks",
        difficulty: "Menengah"
    },
    {
        name: "SEARCH",
        syntax: "=SEARCH(find_text, within_text, [start_num])",
        description: "Mencari posisi teks (tidak case-sensitive).",
        example: '=SEARCH("O", "Hello")',
        result: "Hasil: 5",
        category: "Teks",
        difficulty: "Menengah"
    },
    {
        name: "REPT",
        syntax: "=REPT(text, number_times)",
        description: "Mengulang teks sejumlah kali tertentu.",
        example: '=REPT("*", 5)',
        result: "Hasil: *****",
        category: "Teks",
        difficulty: "Dasar"
    },
    {
        name: "TEXT",
        syntax: "=TEXT(value, format_text)",
        description: "Memformat angka sebagai teks dengan format tertentu.",
        example: '=TEXT(1234.56, "#,##0.00")',
        result: "Hasil: 1,234.56",
        category: "Teks",
        difficulty: "Menengah"
    },
    {
        name: "VALUE",
        syntax: "=VALUE(text)",
        description: "Mengkonversi teks yang berisi angka menjadi angka.",
        example: '=VALUE("123")',
        result: "Hasil: 123 (sebagai angka)",
        category: "Teks",
        difficulty: "Menengah"
    },
    {
        name: "EXACT",
        syntax: "=EXACT(text1, text2)",
        description: "Membandingkan dua teks secara persis (case-sensitive).",
        example: '=EXACT("Hello", "hello")',
        result: "Hasil: FALSE",
        category: "Teks",
        difficulty: "Menengah"
    },

    // ==================== LOOKUP & REFERENSI ====================
    {
        name: "VLOOKUP",
        syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
        description: "Mencari nilai di kolom pertama tabel dan mengembalikan nilai dari kolom yang ditentukan.",
        example: "=VLOOKUP(A1, B:D, 2, FALSE)",
        result: "Mencari A1 di kolom B, ambil nilai dari kolom C",
        category: "Lookup",
        difficulty: "Menengah"
    },
    {
        name: "HLOOKUP",
        syntax: "=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])",
        description: "Seperti VLOOKUP tapi mencari secara horizontal di baris pertama.",
        example: "=HLOOKUP(A1, A1:Z10, 5, FALSE)",
        result: "Mencari di baris 1, ambil nilai dari baris 5",
        category: "Lookup",
        difficulty: "Menengah"
    },
    {
        name: "XLOOKUP",
        syntax: "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
        description: "Fungsi pencarian modern yang menggantikan VLOOKUP dan HLOOKUP. Lebih fleksibel dan powerful.",
        example: '=XLOOKUP(A1, B:B, C:C, "Tidak ada")',
        result: "Mencari A1 di kolom B, return dari kolom C",
        category: "Lookup",
        difficulty: "Menengah"
    },
    {
        name: "INDEX",
        syntax: "=INDEX(array, row_num, [column_num])",
        description: "Mengembalikan nilai dari sel pada posisi baris dan kolom tertentu dalam range.",
        example: "=INDEX(A1:C10, 5, 2)",
        result: "Nilai di baris 5, kolom 2 dari range",
        category: "Lookup",
        difficulty: "Menengah"
    },
    {
        name: "MATCH",
        syntax: "=MATCH(lookup_value, lookup_array, [match_type])",
        description: "Mencari posisi nilai dalam range dan mengembalikan nomor posisinya.",
        example: '=MATCH("Apple", A1:A10, 0)',
        result: "Posisi 'Apple' di range A1:A10",
        category: "Lookup",
        difficulty: "Menengah"
    },
    {
        name: "INDEX MATCH",
        syntax: "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
        description: "Kombinasi INDEX dan MATCH - alternatif VLOOKUP yang lebih fleksibel.",
        example: "=INDEX(C:C, MATCH(A1, B:B, 0))",
        result: "Mencari A1 di kolom B, return dari kolom C",
        category: "Lookup",
        difficulty: "Lanjutan"
    },
    {
        name: "LOOKUP",
        syntax: "=LOOKUP(lookup_value, lookup_vector, [result_vector])",
        description: "Fungsi pencarian sederhana dalam vektor atau array.",
        example: "=LOOKUP(80, A1:A10, B1:B10)",
        result: "Mencari 80 di A, return dari B",
        category: "Lookup",
        difficulty: "Menengah"
    },
    {
        name: "CHOOSE",
        syntax: "=CHOOSE(index_num, value1, [value2], ...)",
        description: "Memilih nilai dari daftar berdasarkan nomor index.",
        example: '=CHOOSE(2, "Jan", "Feb", "Mar")',
        result: "Hasil: Feb (pilihan ke-2)",
        category: "Lookup",
        difficulty: "Menengah"
    },
    {
        name: "INDIRECT",
        syntax: "=INDIRECT(ref_text, [a1])",
        description: "Mengembalikan referensi yang ditentukan oleh string teks.",
        example: '=INDIRECT("A"&B1)',
        result: "Jika B1=5, maka mengacu ke A5",
        category: "Lookup",
        difficulty: "Lanjutan"
    },
    {
        name: "OFFSET",
        syntax: "=OFFSET(reference, rows, cols, [height], [width])",
        description: "Mengembalikan referensi yang dioffset dari sel awal.",
        example: "=OFFSET(A1, 5, 2)",
        result: "Sel yang 5 baris ke bawah, 2 kolom ke kanan dari A1",
        category: "Lookup",
        difficulty: "Lanjutan"
    },
    {
        name: "ROW",
        syntax: "=ROW([reference])",
        description: "Mengembalikan nomor baris dari referensi.",
        example: "=ROW(A5)",
        result: "Hasil: 5",
        category: "Lookup",
        difficulty: "Dasar"
    },
    {
        name: "COLUMN",
        syntax: "=COLUMN([reference])",
        description: "Mengembalikan nomor kolom dari referensi.",
        example: "=COLUMN(C1)",
        result: "Hasil: 3 (C adalah kolom ke-3)",
        category: "Lookup",
        difficulty: "Dasar"
    },
    {
        name: "ROWS",
        syntax: "=ROWS(array)",
        description: "Menghitung jumlah baris dalam range atau array.",
        example: "=ROWS(A1:A10)",
        result: "Hasil: 10",
        category: "Lookup",
        difficulty: "Dasar"
    },
    {
        name: "COLUMNS",
        syntax: "=COLUMNS(array)",
        description: "Menghitung jumlah kolom dalam range atau array.",
        example: "=COLUMNS(A1:E1)",
        result: "Hasil: 5",
        category: "Lookup",
        difficulty: "Dasar"
    },

    // ==================== TANGGAL & WAKTU ====================
    {
        name: "TODAY",
        syntax: "=TODAY()",
        description: "Mengembalikan tanggal hari ini.",
        example: "=TODAY()",
        result: "Hasil: Tanggal hari ini (misal: 05/02/2026)",
        category: "Tanggal",
        difficulty: "Dasar"
    },
    {
        name: "NOW",
        syntax: "=NOW()",
        description: "Mengembalikan tanggal dan waktu saat ini.",
        example: "=NOW()",
        result: "05/02/2026 14:30:00",
        category: "Tanggal",
        difficulty: "Dasar"
    },
    {
        name: "DATE",
        syntax: "=DATE(year, month, day)",
        description: "Membuat tanggal dari komponen tahun, bulan, dan hari.",
        example: "=DATE(2026, 2, 5)",
        result: "Hasil: 05/02/2026",
        category: "Tanggal",
        difficulty: "Dasar"
    },
    {
        name: "TIME",
        syntax: "=TIME(hour, minute, second)",
        description: "Membuat waktu dari komponen jam, menit, dan detik.",
        example: "=TIME(14, 30, 0)",
        result: "Hasil: 14:30:00",
        category: "Tanggal",
        difficulty: "Dasar"
    },
    {
        name: "YEAR",
        syntax: "=YEAR(serial_number)",
        description: "Mengekstrak tahun dari tanggal.",
        example: "=YEAR(A1)",
        result: "Hasil: 2026",
        category: "Tanggal",
        difficulty: "Dasar"
    },
    {
        name: "MONTH",
        syntax: "=MONTH(serial_number)",
        description: "Mengekstrak bulan dari tanggal (1-12).",
        example: "=MONTH(TODAY())",
        result: "Hasil: 2 (Februari)",
        category: "Tanggal",
        difficulty: "Dasar"
    },
    {
        name: "DAY",
        syntax: "=DAY(serial_number)",
        description: "Mengekstrak hari dari tanggal (1-31).",
        example: "=DAY(TODAY())",
        result: "Hasil: 5",
        category: "Tanggal",
        difficulty: "Dasar"
    },
    {
        name: "HOUR",
        syntax: "=HOUR(serial_number)",
        description: "Mengekstrak jam dari waktu (0-23).",
        example: "=HOUR(NOW())",
        result: "Hasil: 14",
        category: "Tanggal",
        difficulty: "Dasar"
    },
    {
        name: "MINUTE",
        syntax: "=MINUTE(serial_number)",
        description: "Mengekstrak menit dari waktu (0-59).",
        example: "=MINUTE(NOW())",
        result: "Hasil: 30",
        category: "Tanggal",
        difficulty: "Dasar"
    },
    {
        name: "SECOND",
        syntax: "=SECOND(serial_number)",
        description: "Mengekstrak detik dari waktu (0-59).",
        example: "=SECOND(NOW())",
        result: "Hasil: 45",
        category: "Tanggal",
        difficulty: "Dasar"
    },
    {
        name: "WEEKDAY",
        syntax: "=WEEKDAY(serial_number, [return_type])",
        description: "Mengembalikan hari dalam seminggu (1-7).",
        example: "=WEEKDAY(TODAY())",
        result: "Hasil: 4 (Rabu = 4 jika Minggu = 1)",
        category: "Tanggal",
        difficulty: "Menengah"
    },
    {
        name: "WEEKNUM",
        syntax: "=WEEKNUM(serial_number, [return_type])",
        description: "Mengembalikan nomor minggu dalam tahun.",
        example: "=WEEKNUM(TODAY())",
        result: "Hasil: 6",
        category: "Tanggal",
        difficulty: "Menengah"
    },
    {
        name: "DATEDIF",
        syntax: "=DATEDIF(start_date, end_date, unit)",
        description: "Menghitung selisih antara dua tanggal dalam tahun, bulan, atau hari.",
        example: '=DATEDIF(A1, B1, "Y")',
        result: "Selisih dalam tahun",
        category: "Tanggal",
        difficulty: "Menengah"
    },
    {
        name: "EDATE",
        syntax: "=EDATE(start_date, months)",
        description: "Menambah atau mengurangi bulan dari tanggal.",
        example: "=EDATE(TODAY(), 3)",
        result: "Tanggal 3 bulan dari sekarang",
        category: "Tanggal",
        difficulty: "Menengah"
    },
    {
        name: "EOMONTH",
        syntax: "=EOMONTH(start_date, months)",
        description: "Mengembalikan akhir bulan setelah penambahan bulan tertentu.",
        example: "=EOMONTH(TODAY(), 0)",
        result: "Akhir bulan ini",
        category: "Tanggal",
        difficulty: "Menengah"
    },
    {
        name: "NETWORKDAYS",
        syntax: "=NETWORKDAYS(start_date, end_date, [holidays])",
        description: "Menghitung jumlah hari kerja (tanpa Sabtu-Minggu) antara dua tanggal.",
        example: "=NETWORKDAYS(A1, B1)",
        result: "Jumlah hari kerja",
        category: "Tanggal",
        difficulty: "Menengah"
    },
    {
        name: "WORKDAY",
        syntax: "=WORKDAY(start_date, days, [holidays])",
        description: "Mengembalikan tanggal setelah sejumlah hari kerja.",
        example: "=WORKDAY(TODAY(), 10)",
        result: "10 hari kerja dari sekarang",
        category: "Tanggal",
        difficulty: "Menengah"
    },

    // ==================== KONDISIONAL ====================
    {
        name: "SUMIF",
        syntax: "=SUMIF(range, criteria, [sum_range])",
        description: "Menjumlahkan sel yang memenuhi kriteria tertentu.",
        example: '=SUMIF(A:A, "Apel", B:B)',
        result: "Total B dimana A adalah 'Apel'",
        category: "Kondisional",
        difficulty: "Menengah"
    },
    {
        name: "SUMIFS",
        syntax: "=SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)",
        description: "Menjumlahkan sel yang memenuhi beberapa kriteria.",
        example: '=SUMIFS(C:C, A:A, "Apel", B:B, ">100")',
        result: "Total C dimana A='Apel' DAN B>100",
        category: "Kondisional",
        difficulty: "Menengah"
    },
    {
        name: "COUNTIF",
        syntax: "=COUNTIF(range, criteria)",
        description: "Menghitung sel yang memenuhi kriteria tertentu.",
        example: '=COUNTIF(A:A, "Apel")',
        result: "Jumlah sel berisi 'Apel'",
        category: "Kondisional",
        difficulty: "Menengah"
    },
    {
        name: "COUNTIFS",
        syntax: "=COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2], ...)",
        description: "Menghitung sel yang memenuhi beberapa kriteria.",
        example: '=COUNTIFS(A:A, "Apel", B:B, ">0")',
        result: "Jumlah baris A='Apel' DAN B>0",
        category: "Kondisional",
        difficulty: "Menengah"
    },
    {
        name: "AVERAGEIF",
        syntax: "=AVERAGEIF(range, criteria, [average_range])",
        description: "Menghitung rata-rata sel yang memenuhi kriteria.",
        example: '=AVERAGEIF(A:A, "Apel", B:B)',
        result: "Rata-rata B dimana A='Apel'",
        category: "Kondisional",
        difficulty: "Menengah"
    },
    {
        name: "AVERAGEIFS",
        syntax: "=AVERAGEIFS(average_range, criteria_range1, criteria1, ...)",
        description: "Menghitung rata-rata sel yang memenuhi beberapa kriteria.",
        example: '=AVERAGEIFS(C:C, A:A, "Apel", B:B, ">50")',
        result: "Rata-rata C dengan kondisi ganda",
        category: "Kondisional",
        difficulty: "Menengah"
    },
    {
        name: "MINIFS",
        syntax: "=MINIFS(min_range, criteria_range1, criteria1, ...)",
        description: "Mencari nilai minimum dengan kriteria.",
        example: '=MINIFS(B:B, A:A, "Apel")',
        result: "Nilai B terkecil dimana A='Apel'",
        category: "Kondisional",
        difficulty: "Menengah"
    },
    {
        name: "MAXIFS",
        syntax: "=MAXIFS(max_range, criteria_range1, criteria1, ...)",
        description: "Mencari nilai maksimum dengan kriteria.",
        example: '=MAXIFS(B:B, A:A, "Apel")',
        result: "Nilai B terbesar dimana A='Apel'",
        category: "Kondisional",
        difficulty: "Menengah"
    },

    // ==================== INFORMASI ====================
    {
        name: "ISBLANK",
        syntax: "=ISBLANK(value)",
        description: "Mengecek apakah sel kosong.",
        example: "=ISBLANK(A1)",
        result: "TRUE jika A1 kosong",
        category: "Informasi",
        difficulty: "Dasar"
    },
    {
        name: "ISNUMBER",
        syntax: "=ISNUMBER(value)",
        description: "Mengecek apakah nilai adalah angka.",
        example: "=ISNUMBER(A1)",
        result: "TRUE jika A1 berisi angka",
        category: "Informasi",
        difficulty: "Dasar"
    },
    {
        name: "ISTEXT",
        syntax: "=ISTEXT(value)",
        description: "Mengecek apakah nilai adalah teks.",
        example: "=ISTEXT(A1)",
        result: "TRUE jika A1 berisi teks",
        category: "Informasi",
        difficulty: "Dasar"
    },
    {
        name: "ISERROR",
        syntax: "=ISERROR(value)",
        description: "Mengecek apakah nilai adalah error.",
        example: "=ISERROR(A1/B1)",
        result: "TRUE jika pembagian error",
        category: "Informasi",
        difficulty: "Dasar"
    },
    {
        name: "ISNA",
        syntax: "=ISNA(value)",
        description: "Mengecek apakah nilai adalah #N/A error.",
        example: "=ISNA(VLOOKUP(A1,B:C,2,0))",
        result: "TRUE jika VLOOKUP gagal",
        category: "Informasi",
        difficulty: "Menengah"
    },
    {
        name: "ISEVEN",
        syntax: "=ISEVEN(number)",
        description: "Mengecek apakah angka genap.",
        example: "=ISEVEN(4)",
        result: "Hasil: TRUE",
        category: "Informasi",
        difficulty: "Dasar"
    },
    {
        name: "ISODD",
        syntax: "=ISODD(number)",
        description: "Mengecek apakah angka ganjil.",
        example: "=ISODD(5)",
        result: "Hasil: TRUE",
        category: "Informasi",
        difficulty: "Dasar"
    },
    {
        name: "TYPE",
        syntax: "=TYPE(value)",
        description: "Mengembalikan tipe data (1=angka, 2=teks, 4=logika, 16=error, 64=array).",
        example: "=TYPE(A1)",
        result: "Hasil: 1 jika angka",
        category: "Informasi",
        difficulty: "Menengah"
    },
    {
        name: "CELL",
        syntax: "=CELL(info_type, [reference])",
        description: "Mengembalikan informasi tentang sel (format, alamat, dll).",
        example: '=CELL("address", A1)',
        result: "Hasil: $A$1",
        category: "Informasi",
        difficulty: "Lanjutan"
    },

    // ==================== ARRAY & DINAMIS ====================
    {
        name: "FILTER",
        syntax: "=FILTER(array, include, [if_empty])",
        description: "Memfilter range berdasarkan kriteria dan mengembalikan hasil dinamis.",
        example: "=FILTER(A:C, B:B>100)",
        result: "Baris dimana kolom B>100",
        category: "Array",
        difficulty: "Lanjutan"
    },
    {
        name: "SORT",
        syntax: "=SORT(array, [sort_index], [sort_order], [by_col])",
        description: "Mengurutkan range atau array secara dinamis.",
        example: "=SORT(A1:B10, 2, -1)",
        result: "Data diurutkan berdasarkan kolom 2, descending",
        category: "Array",
        difficulty: "Lanjutan"
    },
    {
        name: "SORTBY",
        syntax: "=SORTBY(array, by_array1, [sort_order1], ...)",
        description: "Mengurutkan range berdasarkan nilai di range lain.",
        example: "=SORTBY(A1:A10, B1:B10, -1)",
        result: "Urutkan A berdasarkan nilai B",
        category: "Array",
        difficulty: "Lanjutan"
    },
    {
        name: "UNIQUE",
        syntax: "=UNIQUE(array, [by_col], [exactly_once])",
        description: "Mengembalikan nilai unik dari range.",
        example: "=UNIQUE(A1:A100)",
        result: "Daftar nilai unik",
        category: "Array",
        difficulty: "Lanjutan"
    },
    {
        name: "SEQUENCE",
        syntax: "=SEQUENCE(rows, [columns], [start], [step])",
        description: "Menghasilkan urutan angka secara otomatis.",
        example: "=SEQUENCE(10, 1, 1, 1)",
        result: "Hasil: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
        category: "Array",
        difficulty: "Lanjutan"
    },
    {
        name: "RANDARRAY",
        syntax: "=RANDARRAY([rows], [columns], [min], [max], [whole_number])",
        description: "Menghasilkan array angka acak.",
        example: "=RANDARRAY(5, 3, 1, 100, TRUE)",
        result: "Tabel 5x3 angka acak 1-100",
        category: "Array",
        difficulty: "Lanjutan"
    },
    {
        name: "TRANSPOSE",
        syntax: "=TRANSPOSE(array)",
        description: "Mengubah baris menjadi kolom dan sebaliknya.",
        example: "=TRANSPOSE(A1:E1)",
        result: "Mengubah horizontal ke vertikal",
        category: "Array",
        difficulty: "Menengah"
    },
    {
        name: "FLATTEN",
        syntax: "=FLATTEN(range1, [range2], ...)",
        description: "Menggabungkan beberapa range menjadi satu kolom.",
        example: "=FLATTEN(A1:C3)",
        result: "Data 3x3 menjadi 1 kolom 9 baris",
        category: "Array",
        difficulty: "Lanjutan"
    },

    // ==================== FINANSIAL ====================
    {
        name: "PMT",
        syntax: "=PMT(rate, nper, pv, [fv], [type])",
        description: "Menghitung pembayaran cicilan pinjaman.",
        example: "=PMT(10%/12, 36, 100000000)",
        result: "Cicilan bulanan untuk pinjaman 100jt",
        category: "Finansial",
        difficulty: "Lanjutan"
    },
    {
        name: "FV",
        syntax: "=FV(rate, nper, pmt, [pv], [type])",
        description: "Menghitung nilai masa depan investasi.",
        example: "=FV(5%/12, 60, -1000000)",
        result: "Hasil investasi setelah 5 tahun",
        category: "Finansial",
        difficulty: "Lanjutan"
    },
    {
        name: "PV",
        syntax: "=PV(rate, nper, pmt, [fv], [type])",
        description: "Menghitung nilai sekarang dari investasi.",
        example: "=PV(8%/12, 48, -2000000)",
        result: "Nilai pinjaman awal",
        category: "Finansial",
        difficulty: "Lanjutan"
    },
    {
        name: "NPV",
        syntax: "=NPV(rate, value1, [value2], ...)",
        description: "Menghitung Net Present Value dari investasi.",
        example: "=NPV(10%, B1:B5)",
        result: "NPV aliran kas",
        category: "Finansial",
        difficulty: "Lanjutan"
    },
    {
        name: "IRR",
        syntax: "=IRR(values, [guess])",
        description: "Menghitung Internal Rate of Return.",
        example: "=IRR(A1:A10)",
        result: "Tingkat pengembalian internal",
        category: "Finansial",
        difficulty: "Lanjutan"
    },
    {
        name: "RATE",
        syntax: "=RATE(nper, pmt, pv, [fv], [type], [guess])",
        description: "Menghitung suku bunga per periode.",
        example: "=RATE(36, -3000000, 100000000)",
        result: "Suku bunga per bulan",
        category: "Finansial",
        difficulty: "Lanjutan"
    },
    {
        name: "NPER",
        syntax: "=NPER(rate, pmt, pv, [fv], [type])",
        description: "Menghitung jumlah periode pembayaran.",
        example: "=NPER(10%/12, -5000000, 100000000)",
        result: "Jumlah bulan untuk melunasi",
        category: "Finansial",
        difficulty: "Lanjutan"
    }
];

export const formulaCategories = [
    "Matematika", "Logika", "Teks", "Lookup", "Tanggal",
    "Kondisional", "Informasi", "Array", "Finansial"
];

export const difficultyLevels = ["Dasar", "Menengah", "Lanjutan"];

export const getFormulasByCategory = (): Record<string, ExcelFormula[]> => {
    return formulas.reduce((acc, formula) => {
        if (!acc[formula.category]) {
            acc[formula.category] = [];
        }
        acc[formula.category].push(formula);
        return acc;
    }, {} as Record<string, ExcelFormula[]>);
};
