'use client';

import { useState } from 'react';
import { Search, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { glossaryTerms, glossaryCategories, getGlossaryByCategory } from '@/data/glossary';
import styles from './page.module.css';

export default function KamusPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());

    const glossaryByCategory = getGlossaryByCategory();

    const filteredTerms = glossaryTerms.filter(term => {
        const matchesSearch = searchQuery === '' ||
            term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = activeCategory === null || term.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    const groupedFiltered = filteredTerms.reduce((acc, term) => {
        if (!acc[term.category]) {
            acc[term.category] = [];
        }
        acc[term.category].push(term);
        return acc;
    }, {} as Record<string, typeof glossaryTerms>);

    const toggleTerm = (term: string) => {
        const newExpanded = new Set(expandedTerms);
        if (newExpanded.has(term)) {
            newExpanded.delete(term);
        } else {
            newExpanded.add(term);
        }
        setExpandedTerms(newExpanded);
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerIcon}>
                    <BookOpen size={32} />
                </div>
                <h1>Kamus Excel</h1>
                <p>
                    Daftar istilah dan terminologi Excel yang sering digunakan.
                    Pelajari arti dari setiap istilah untuk lebih memahami Excel.
                </p>
            </div>

            {/* Search & Filter */}
            <div className={styles.controls}>
                <div className={styles.searchBox}>
                    <Search size={18} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Cari istilah..."
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
                    {glossaryCategories.map((category) => (
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
                <span>{filteredTerms.length} istilah ditemukan</span>
            </div>

            {/* Glossary Content */}
            <div className={styles.glossaryContainer}>
                {glossaryCategories.map((category) => {
                    const terms = groupedFiltered[category];
                    if (!terms || terms.length === 0) return null;

                    return (
                        <div key={category} className={styles.categorySection}>
                            <h2 className={styles.categoryTitle}>{category}</h2>
                            <div className={styles.termsList}>
                                {terms.map((item) => {
                                    const isExpanded = expandedTerms.has(item.term);
                                    return (
                                        <div
                                            key={item.term}
                                            className={`${styles.termCard} ${isExpanded ? styles.expanded : ''}`}
                                        >
                                            <button
                                                className={styles.termHeader}
                                                onClick={() => toggleTerm(item.term)}
                                            >
                                                <h3 className={styles.termName}>{item.term}</h3>
                                                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                            <div className={styles.termContent}>
                                                <p className={styles.definition}>{item.definition}</p>
                                                {item.example && (
                                                    <div className={styles.example}>
                                                        <span className={styles.exampleLabel}>Contoh:</span>
                                                        <span>{item.example}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

                {filteredTerms.length === 0 && (
                    <div className={styles.noResults}>
                        <p>Tidak ada istilah yang cocok dengan pencarian Anda.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
