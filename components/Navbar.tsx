'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Book, Calculator, Home, Keyboard, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Beranda', icon: Home },
        { href: '/pelajaran', label: 'Pelajaran', icon: BookOpen },
        { href: '/rumus', label: 'Rumus', icon: Calculator },
        { href: '/kamus', label: 'Kamus', icon: Book },
        { href: '/shortcuts', label: 'Shortcuts', icon: Keyboard },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M8 8L12 16L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span className={styles.logoText}>Excel<span>Belajar</span></span>
                </Link>

                <div className={styles.rightSection}>
                    <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href ||
                                (link.href !== '/' && pathname.startsWith(link.href));

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Icon size={18} />
                                    <span>{link.label}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <ThemeToggle />

                    <button
                        className={styles.menuButton}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
