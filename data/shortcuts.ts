export interface Shortcut {
    keys: string;
    description: string;
    category: string;
}

export const shortcuts: Shortcut[] = [
    // Navigasi
    { keys: "Ctrl + Home", description: "Kembali ke sel A1", category: "Navigasi" },
    { keys: "Ctrl + End", description: "Ke sel data terakhir", category: "Navigasi" },
    { keys: "Ctrl + ←/→/↑/↓", description: "Lompat ke ujung data", category: "Navigasi" },
    { keys: "Ctrl + Page Up", description: "Ke sheet sebelumnya", category: "Navigasi" },
    { keys: "Ctrl + Page Down", description: "Ke sheet selanjutnya", category: "Navigasi" },
    { keys: "Ctrl + G", description: "Buka Go To dialog", category: "Navigasi" },
    { keys: "F5", description: "Buka Go To dialog", category: "Navigasi" },
    { keys: "Tab", description: "Pindah ke sel kanan", category: "Navigasi" },
    { keys: "Shift + Tab", description: "Pindah ke sel kiri", category: "Navigasi" },
    { keys: "Enter", description: "Pindah ke sel bawah", category: "Navigasi" },
    { keys: "Shift + Enter", description: "Pindah ke sel atas", category: "Navigasi" },

    // Seleksi
    { keys: "Ctrl + A", description: "Pilih seluruh worksheet", category: "Seleksi" },
    { keys: "Ctrl + Space", description: "Pilih seluruh kolom", category: "Seleksi" },
    { keys: "Shift + Space", description: "Pilih seluruh baris", category: "Seleksi" },
    { keys: "Ctrl + Shift + End", description: "Pilih sampai sel data terakhir", category: "Seleksi" },
    { keys: "Shift + Arrow", description: "Memperluas seleksi", category: "Seleksi" },
    { keys: "Ctrl + Shift + Arrow", description: "Pilih sampai ujung data", category: "Seleksi" },

    // Edit
    { keys: "Ctrl + C", description: "Copy", category: "Edit" },
    { keys: "Ctrl + X", description: "Cut", category: "Edit" },
    { keys: "Ctrl + V", description: "Paste", category: "Edit" },
    { keys: "Ctrl + Z", description: "Undo", category: "Edit" },
    { keys: "Ctrl + Y", description: "Redo", category: "Edit" },
    { keys: "Delete", description: "Hapus isi sel", category: "Edit" },
    { keys: "F2", description: "Edit sel", category: "Edit" },
    { keys: "Ctrl + D", description: "Copy sel atas ke bawah", category: "Edit" },
    { keys: "Ctrl + R", description: "Copy sel kiri ke kanan", category: "Edit" },
    { keys: "Ctrl + '", description: "Copy nilai sel di atas", category: "Edit" },
    { keys: "Ctrl + Enter", description: "Input ke semua sel terpilih", category: "Edit" },
    { keys: "Ctrl + ;", description: "Insert tanggal hari ini", category: "Edit" },
    { keys: "Ctrl + Shift + ;", description: "Insert waktu sekarang", category: "Edit" },

    // Format
    { keys: "Ctrl + B", description: "Bold (tebal)", category: "Format" },
    { keys: "Ctrl + I", description: "Italic (miring)", category: "Format" },
    { keys: "Ctrl + U", description: "Underline (garis bawah)", category: "Format" },
    { keys: "Ctrl + 1", description: "Buka Format Cells dialog", category: "Format" },
    { keys: "Ctrl + Shift + $", description: "Format Currency", category: "Format" },
    { keys: "Ctrl + Shift + %", description: "Format Persen", category: "Format" },
    { keys: "Ctrl + Shift + #", description: "Format Date", category: "Format" },
    { keys: "Ctrl + Shift + @", description: "Format Time", category: "Format" },
    { keys: "Ctrl + Shift + ~", description: "Format General", category: "Format" },
    { keys: "Alt + H + H", description: "Fill color", category: "Format" },
    { keys: "Alt + H + A + C", description: "Center alignment", category: "Format" },

    // Formula
    { keys: "=", description: "Memulai penulisan rumus", category: "Formula" },
    { keys: "Alt + =", description: "AutoSum", category: "Formula" },
    { keys: "F4", description: "Toggle absolute reference ($)", category: "Formula" },
    { keys: "Ctrl + `", description: "Tampilkan semua rumus", category: "Formula" },
    { keys: "Ctrl + Shift + Enter", description: "Array formula", category: "Formula" },
    { keys: "Tab", description: "Autocomplete nama fungsi", category: "Formula" },
    { keys: "Esc", description: "Batal menulis rumus", category: "Formula" },

    // File
    { keys: "Ctrl + N", description: "Buat workbook baru", category: "File" },
    { keys: "Ctrl + O", description: "Buka file", category: "File" },
    { keys: "Ctrl + S", description: "Simpan file", category: "File" },
    { keys: "Ctrl + Shift + S", description: "Save As", category: "File" },
    { keys: "Ctrl + P", description: "Print", category: "File" },
    { keys: "Ctrl + W", description: "Tutup workbook", category: "File" },
    { keys: "Ctrl + F4", description: "Tutup workbook", category: "File" },
    { keys: "Alt + F4", description: "Tutup Excel", category: "File" },

    // Rows & Columns
    { keys: "Ctrl + +", description: "Insert row/column", category: "Baris & Kolom" },
    { keys: "Ctrl + -", description: "Delete row/column", category: "Baris & Kolom" },
    { keys: "Alt + H + O + I", description: "AutoFit column width", category: "Baris & Kolom" },
    { keys: "Alt + H + O + A", description: "AutoFit row height", category: "Baris & Kolom" },
    { keys: "Ctrl + 9", description: "Sembunyikan baris", category: "Baris & Kolom" },
    { keys: "Ctrl + 0", description: "Sembunyikan kolom", category: "Baris & Kolom" },
    { keys: "Ctrl + Shift + 9", description: "Tampilkan baris tersembunyi", category: "Baris & Kolom" },
    { keys: "Ctrl + Shift + 0", description: "Tampilkan kolom tersembunyi", category: "Baris & Kolom" }
];

export const getShortcutsByCategory = (): Record<string, Shortcut[]> => {
    return shortcuts.reduce((acc, shortcut) => {
        if (!acc[shortcut.category]) {
            acc[shortcut.category] = [];
        }
        acc[shortcut.category].push(shortcut);
        return acc;
    }, {} as Record<string, Shortcut[]>);
};

export const categories = [
    "Navigasi",
    "Seleksi",
    "Edit",
    "Format",
    "Formula",
    "File",
    "Baris & Kolom"
];
