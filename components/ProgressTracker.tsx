'use client';

import { useEffect, useState } from 'react';
import { Trophy, BookOpen } from 'lucide-react';
import styles from './ProgressTracker.module.css';

interface ProgressTrackerProps {
    totalLessons: number;
}

export default function ProgressTracker({ totalLessons }: ProgressTrackerProps) {
    const [completedCount, setCompletedCount] = useState(0);

    useEffect(() => {
        const saved = localStorage.getItem('completedLessons');
        if (saved) {
            const completed = JSON.parse(saved) as string[];
            setCompletedCount(completed.length);
        }
    }, []);

    const percentage = Math.round((completedCount / totalLessons) * 100);

    return (
        <div className={styles.tracker}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <Trophy size={24} />
                </div>
                <div className={styles.info}>
                    <h4>Progress Belajar</h4>
                    <p>{completedCount} dari {totalLessons} pelajaran selesai</p>
                </div>
                <div className={styles.percentage}>{percentage}%</div>
            </div>
            <div className={styles.progressBar}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${percentage}%` }}
                />
            </div>
            {percentage === 100 && (
                <div className={styles.completed}>
                    <BookOpen size={16} />
                    <span>Selamat! Anda telah menyelesaikan semua pelajaran! 🎉</span>
                </div>
            )}
        </div>
    );
}
