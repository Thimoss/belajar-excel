'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Clock, Lightbulb, List } from 'lucide-react';
import { getLessonBySlug, getNextLesson, getPreviousLesson } from '@/data/lessons';
import VideoPlayer from '@/components/VideoPlayer';
import ShortcutCard from '@/components/ShortcutCard';
import styles from './page.module.css';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default function LessonPage({ params }: PageProps) {
    const [slug, setSlug] = useState<string | null>(null);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        params.then((p) => setSlug(p.slug));
    }, [params]);

    useEffect(() => {
        if (slug) {
            const saved = localStorage.getItem('completedLessons');
            if (saved) {
                const completed = JSON.parse(saved) as string[];
                setIsCompleted(completed.includes(slug));
            }
        }
    }, [slug]);

    if (!slug) {
        return <div className={styles.loading}>Memuat...</div>;
    }

    const lesson = getLessonBySlug(slug);

    if (!lesson) {
        notFound();
    }

    const nextLesson = getNextLesson(slug);
    const prevLesson = getPreviousLesson(slug);

    const toggleComplete = () => {
        const saved = localStorage.getItem('completedLessons');
        let completed: string[] = saved ? JSON.parse(saved) : [];

        if (isCompleted) {
            completed = completed.filter(s => s !== slug);
        } else {
            completed.push(slug);
        }

        localStorage.setItem('completedLessons', JSON.stringify(completed));
        setIsCompleted(!isCompleted);

        // Trigger storage event for other components
        window.dispatchEvent(new Event('storage'));
    };

    // Parse transcript into sections with proper list grouping
    const renderTranscript = (transcript: string) => {
        const lines = transcript.split('\n');
        const elements: React.ReactNode[] = [];
        let inCodeBlock = false;
        let codeContent = '';
        let inTable = false;
        let tableRows: string[] = [];
        let currentListItems: React.ReactNode[] = [];
        let currentListType: 'ul' | 'ol' | null = null;

        const flushList = () => {
            if (currentListItems.length > 0 && currentListType) {
                const key = `list-${elements.length}`;
                if (currentListType === 'ol') {
                    elements.push(
                        <ol key={key} className={styles.orderedList}>
                            {currentListItems}
                        </ol>
                    );
                } else {
                    elements.push(
                        <ul key={key} className={styles.unorderedList}>
                            {currentListItems}
                        </ul>
                    );
                }
                currentListItems = [];
                currentListType = null;
            }
        };

        lines.forEach((line, index) => {
            // Code blocks
            if (line.startsWith('```')) {
                flushList();
                if (inCodeBlock) {
                    elements.push(
                        <pre key={`code-${index}`} className={styles.codeBlock}>
                            <code>{codeContent.trim()}</code>
                        </pre>
                    );
                    codeContent = '';
                    inCodeBlock = false;
                } else {
                    inCodeBlock = true;
                }
                return;
            }

            if (inCodeBlock) {
                codeContent += line + '\n';
                return;
            }

            // Tables
            if (line.startsWith('|')) {
                flushList();
                if (!inTable) {
                    inTable = true;
                    tableRows = [];
                }
                tableRows.push(line);
                return;
            } else if (inTable) {
                // End of table
                elements.push(renderTable(tableRows, index));
                tableRows = [];
                inTable = false;
            }

            // Headers - flush list before headers
            if (line.startsWith('# ')) {
                flushList();
                elements.push(<h1 key={index} className={styles.transcriptH1}>{line.slice(2)}</h1>);
            } else if (line.startsWith('## ')) {
                flushList();
                elements.push(<h2 key={index} className={styles.transcriptH2}>{line.slice(3)}</h2>);
            } else if (line.startsWith('### ')) {
                flushList();
                elements.push(<h3 key={index} className={styles.transcriptH3}>{line.slice(4)}</h3>);
            }
            // Bullet lists
            else if (line.startsWith('- ')) {
                if (currentListType !== 'ul') {
                    flushList();
                    currentListType = 'ul';
                }
                currentListItems.push(
                    <li key={index} className={styles.listItem}>
                        {formatInlineText(line.slice(2))}
                    </li>
                );
            }
            // Numbered lists
            else if (/^\d+\.\s/.test(line)) {
                if (currentListType !== 'ol') {
                    flushList();
                    currentListType = 'ol';
                }
                currentListItems.push(
                    <li key={index} className={styles.numberedItem}>
                        {formatInlineText(line.replace(/^\d+\.\s/, ''))}
                    </li>
                );
            }
            // Paragraphs
            else if (line.trim()) {
                flushList();
                elements.push(<p key={index} className={styles.paragraph}>{formatInlineText(line)}</p>);
            }
            // Empty lines also flush list
            else {
                flushList();
            }
        });

        // Flush any remaining list
        flushList();

        // Handle remaining table
        if (inTable && tableRows.length > 0) {
            elements.push(renderTable(tableRows, 9999));
        }

        return elements;
    };

    const renderTable = (rows: string[], key: number): React.ReactNode => {
        if (rows.length < 2) return null;

        const parseRow = (row: string) => {
            return row.split('|').slice(1, -1).map(cell => cell.trim());
        };

        const headers = parseRow(rows[0]);
        const dataRows = rows.slice(2).map(parseRow); // Skip header and separator

        return (
            <div key={`table-${key}`} className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            {headers.map((h, i) => <th key={i}>{h}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {dataRows.map((row, i) => (
                            <tr key={i}>
                                {row.map((cell, j) => <td key={j}>{formatInlineText(cell)}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const formatInlineText = (text: string): React.ReactNode => {
        // Bold
        const parts = text.split(/(\*\*[^*]+\*\*|\`[^`]+\`)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('`') && part.endsWith('`')) {
                return <code key={i} className={styles.inlineCode}>{part.slice(1, -1)}</code>;
            }
            return part;
        });
    };

    return (
        <div className={styles.page}>
            {/* Header */}
            <div className={styles.header}>
                <Link href="/pelajaran" className={styles.backLink}>
                    <ArrowLeft size={18} />
                    <span>Kembali ke Daftar Pelajaran</span>
                </Link>
                <div className={styles.meta}>
                    <span className={styles.badge}>
                        {lesson.episode === 0 ? 'Bonus' : `Episode ${lesson.episode}`}
                    </span>
                    <span className={styles.duration}>
                        <Clock size={16} />
                        {lesson.duration}
                    </span>
                </div>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>

            {/* Main Content */}
            <div className={styles.content}>
                {/* Video Column */}
                <div className={styles.mainColumn}>
                    <VideoPlayer youtubeId={lesson.youtubeId} title={lesson.title} />

                    {/* Topics */}
                    <div className={styles.topicsCard}>
                        <div className={styles.topicsHeader}>
                            <List size={20} />
                            <h3>Materi yang Dibahas</h3>
                        </div>
                        <ul className={styles.topicsList}>
                            {lesson.topics.map((topic, index) => (
                                <li key={index}>
                                    <Lightbulb size={16} className={styles.topicIcon} />
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Transcript */}
                    <div className={styles.transcriptSection}>
                        <h2>Transkrip Materi</h2>
                        <div className={styles.transcript}>
                            {renderTranscript(lesson.transcript)}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    {/* Complete Button */}
                    <button
                        onClick={toggleComplete}
                        className={`${styles.completeButton} ${isCompleted ? styles.completed : ''}`}
                    >
                        {isCompleted ? (
                            <>
                                <CheckCircle2 size={20} />
                                Tandai Belum Selesai
                            </>
                        ) : (
                            <>
                                <Circle size={20} />
                                Tandai Selesai
                            </>
                        )}
                    </button>

                    {/* Shortcuts */}
                    {lesson.shortcuts.length > 0 && (
                        <ShortcutCard
                            shortcuts={lesson.shortcuts}
                            title="Shortcuts di Pelajaran Ini"
                        />
                    )}
                </aside>
            </div>

            {/* Navigation */}
            <div className={styles.navigation}>
                {prevLesson ? (
                    <Link href={`/pelajaran/${prevLesson.slug}`} className={styles.navButton}>
                        <ArrowLeft size={18} />
                        <div>
                            <span className={styles.navLabel}>Sebelumnya</span>
                            <span className={styles.navTitle}>{prevLesson.title}</span>
                        </div>
                    </Link>
                ) : <div />}

                {nextLesson && (
                    <Link href={`/pelajaran/${nextLesson.slug}`} className={`${styles.navButton} ${styles.navNext}`}>
                        <div>
                            <span className={styles.navLabel}>Selanjutnya</span>
                            <span className={styles.navTitle}>{nextLesson.title}</span>
                        </div>
                        <ArrowRight size={18} />
                    </Link>
                )}
            </div>
        </div>
    );
}
