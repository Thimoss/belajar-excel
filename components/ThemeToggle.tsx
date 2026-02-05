'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme();

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) {
        return (
            <button className={styles.toggle} aria-label="Toggle theme">
                <Sun size={20} />
            </button>
        );
    }

    return (
        <button
            className={styles.toggle}
            onClick={toggleTheme}
            aria-label={`Beralih ke tema ${theme === 'dark' ? 'terang' : 'gelap'}`}
            title={theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
        >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
