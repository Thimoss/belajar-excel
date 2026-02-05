'use client';

import { useState } from 'react';
import { Search, Keyboard } from 'lucide-react';
import { shortcuts, categories, getShortcutsByCategory } from '@/data/shortcuts';
import styles from './page.module.css';

export default function ShortcutsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const shortcutsByCategory = getShortcutsByCategory();

    const filteredShortcuts = shortcuts.filter(shortcut => {
        const matchesSearch = searchQuery === '' ||
            shortcut.keys.toLowerCase().includes(searchQuery.toLowerCase()) ||
            shortcut.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = activeCategory === null || shortcut.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    const groupedFiltered = filteredShortcuts.reduce((acc, shortcut) => {
        if (!acc[shortcut.category]) {
            acc[shortcut.category] = [];
        }
        acc[shortcut.category].push(shortcut);
        return acc;
    }, {} as Record<string, typeof shortcuts>);

    const formatKeys = (keys: string) => {
        return keys.split(' + ').map((key, index, arr) => (
            <span key={index}>
                <kbd className={styles.kbd}>{key}</kbd>
                {index < arr.length - 1 && <span className={styles.plus}>+</span>}
            </span>
        ));
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerIcon}>
                    <Keyboard size={32} />
                </div>
                <h1>Keyboard Shortcuts Excel</h1>
                <p>
                    Daftar lengkap keyboard shortcuts Excel untuk meningkatkan produktivitas Anda.
                    Kuasai shortcuts ini untuk bekerja lebih cepat dan efisien.
                </p>
            </div>

            {/* Search & Filter */}
            <div className={styles.controls}>
                <div className={styles.searchBox}>
                    <Search size={18} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Cari shortcut..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.filters}>
                    <button
                        className={`${styles.filterBtn} ${activeCategory === null ? styles.active : ''}`}
                        onClick={() => setActiveCategory(null)}
                    >
                        Semua
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results count */}
            <div className={styles.resultsInfo}>
                <span>{filteredShortcuts.length} shortcuts ditemukan</span>
            </div>

            {/* Shortcuts Grid */}
            <div className={styles.shortcutsContainer}>
                {Object.entries(groupedFiltered).map(([category, categoryShortcuts]) => (
                    <div key={category} className={styles.categorySection}>
                        <h2 className={styles.categoryTitle}>{category}</h2>
                        <div className={styles.shortcutsGrid}>
                            {categoryShortcuts.map((shortcut, index) => (
                                <div key={index} className={styles.shortcutCard}>
                                    <div className={styles.keys}>
                                        {formatKeys(shortcut.keys)}
                                    </div>
                                    <p className={styles.description}>{shortcut.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {filteredShortcuts.length === 0 && (
                    <div className={styles.noResults}>
                        <p>Tidak ada shortcut yang cocok dengan pencarian Anda.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
