'use client';

import { useState, useMemo } from 'react';
import { Search, Calculator, Filter, ChevronDown, ChevronUp, Copy, CheckCircle } from 'lucide-react';
import { formulas, formulaCategories, difficultyLevels } from '@/data/formulas';
import styles from './page.module.css';

export default function RumusPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [activeDifficulty, setActiveDifficulty] = useState<string | null>(null);
    const [expandedFormulas, setExpandedFormulas] = useState<Set<string>>(new Set());
    const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

    const filteredFormulas = useMemo(() => {
        return formulas.filter(formula => {
            const matchesSearch = searchQuery === '' ||
                formula.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                formula.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                formula.syntax.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = activeCategory === null || formula.category === activeCategory;
            const matchesDifficulty = activeDifficulty === null || formula.difficulty === activeDifficulty;

            return matchesSearch && matchesCategory && matchesDifficulty;
        });
    }, [searchQuery, activeCategory, activeDifficulty]);

    const groupedFormulas = useMemo(() => {
        return filteredFormulas.reduce((acc, formula) => {
            if (!acc[formula.category]) {
                acc[formula.category] = [];
            }
            acc[formula.category].push(formula);
            return acc;
        }, {} as Record<string, typeof formulas>);
    }, [filteredFormulas]);

    const toggleFormula = (name: string) => {
        const newExpanded = new Set(expandedFormulas);
        if (newExpanded.has(name)) {
            newExpanded.delete(name);
        } else {
            newExpanded.add(name);
        }
        setExpandedFormulas(newExpanded);
    };

    const copyToClipboard = async (text: string, name: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedFormula(name);
            setTimeout(() => setCopiedFormula(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const getDifficultyClass = (difficulty: string) => {
        switch (difficulty) {
            case 'Dasar': return styles.difficultyBasic;
            case 'Menengah': return styles.difficultyMedium;
            case 'Lanjutan': return styles.difficultyAdvanced;
            default: return '';
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerIcon}>
                    <Calculator size={32} />
                </div>
                <h1>Rumus Excel Lengkap</h1>
                <p>
                    Referensi lengkap {formulas.length}+ rumus dan fungsi Excel dengan penjelasan,
                    sintaks, dan contoh penggunaan dalam Bahasa Indonesia.
                </p>
            </div>

            {/* Search & Filters */}
            <div className={styles.controls}>
                <div className={styles.searchBox}>
                    <Search size={18} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Cari rumus... (misal: VLOOKUP, SUM, IF)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>

                <div className={styles.filterSection}>
                    <div className={styles.filterGroup}>
                        <span className={styles.filterLabel}>
                            <Filter size={14} /> Kategori:
                        </span>
                        <div className={styles.filters}>
                            <button
                                className={`${styles.filterBtn} ${activeCategory === null ? styles.active : ''}`}
                                onClick={() => setActiveCategory(null)}
                            >
                                Semua
                            </button>
                            {formulaCategories.map((category) => (
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

                    <div className={styles.filterGroup}>
                        <span className={styles.filterLabel}>Level:</span>
                        <div className={styles.filters}>
                            <button
                                className={`${styles.filterBtn} ${activeDifficulty === null ? styles.active : ''}`}
                                onClick={() => setActiveDifficulty(null)}
                            >
                                Semua Level
                            </button>
                            {difficultyLevels.map((level) => (
                                <button
                                    key={level}
                                    className={`${styles.filterBtn} ${styles[`difficulty${level}`]} ${activeDifficulty === level ? styles.active : ''}`}
                                    onClick={() => setActiveDifficulty(level)}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Info */}
            <div className={styles.resultsInfo}>
                <span>{filteredFormulas.length} rumus ditemukan</span>
            </div>

            {/* Formulas List */}
            <div className={styles.formulasContainer}>
                {formulaCategories.map((category) => {
                    const categoryFormulas = groupedFormulas[category];
                    if (!categoryFormulas || categoryFormulas.length === 0) return null;

                    return (
                        <div key={category} className={styles.categorySection}>
                            <h2 className={styles.categoryTitle}>
                                {category}
                                <span className={styles.categoryCount}>{categoryFormulas.length}</span>
                            </h2>
                            <div className={styles.formulasList}>
                                {categoryFormulas.map((formula) => {
                                    const isExpanded = expandedFormulas.has(formula.name);
                                    return (
                                        <div
                                            key={formula.name}
                                            className={`${styles.formulaCard} ${isExpanded ? styles.expanded : ''}`}
                                        >
                                            <button
                                                className={styles.formulaHeader}
                                                onClick={() => toggleFormula(formula.name)}
                                            >
                                                <div className={styles.formulaTitle}>
                                                    <h3>{formula.name}</h3>
                                                    <span className={`${styles.difficultyBadge} ${getDifficultyClass(formula.difficulty)}`}>
                                                        {formula.difficulty}
                                                    </span>
                                                </div>
                                                <div className={styles.formulaPreview}>
                                                    <code>{formula.syntax}</code>
                                                </div>
                                                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>

                                            <div className={styles.formulaContent}>
                                                <div className={styles.description}>
                                                    <p>{formula.description}</p>
                                                </div>

                                                <div className={styles.syntaxSection}>
                                                    <div className={styles.sectionHeader}>
                                                        <span>Sintaks</span>
                                                        <button
                                                            className={styles.copyBtn}
                                                            onClick={() => copyToClipboard(formula.syntax, formula.name)}
                                                        >
                                                            {copiedFormula === formula.name ? (
                                                                <><CheckCircle size={14} /> Tersalin!</>
                                                            ) : (
                                                                <><Copy size={14} /> Salin</>
                                                            )}
                                                        </button>
                                                    </div>
                                                    <pre className={styles.syntaxCode}>{formula.syntax}</pre>
                                                </div>

                                                <div className={styles.exampleSection}>
                                                    <span className={styles.sectionHeader}>Contoh</span>
                                                    <div className={styles.exampleBox}>
                                                        <code className={styles.exampleCode}>{formula.example}</code>
                                                        {formula.result && (
                                                            <span className={styles.exampleResult}>{formula.result}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

                {filteredFormulas.length === 0 && (
                    <div className={styles.noResults}>
                        <Calculator size={48} strokeWidth={1} />
                        <p>Tidak ada rumus yang cocok dengan pencarian Anda.</p>
                        <button
                            className={styles.resetBtn}
                            onClick={() => {
                                setSearchQuery('');
                                setActiveCategory(null);
                                setActiveDifficulty(null);
                            }}
                        >
                            Reset Filter
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
