import Link from 'next/link';
import { Clock, PlayCircle, CheckCircle2 } from 'lucide-react';
import styles from './LessonCard.module.css';

interface LessonCardProps {
    slug: string;
    episode: number;
    title: string;
    description: string;
    duration: string;
    isCompleted?: boolean;
    index: number;
}

export default function LessonCard({
    slug,
    episode,
    title,
    description,
    duration,
    isCompleted = false,
    index
}: LessonCardProps) {
    return (
        <Link
            href={`/pelajaran/${slug}`}
            className={styles.card}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className={styles.header}>
                <div className={styles.episodeBadge}>
                    {episode === 0 ? 'Bonus' : `Episode ${episode}`}
                </div>
                {isCompleted && (
                    <div className={styles.completedBadge}>
                        <CheckCircle2 size={16} />
                        Selesai
                    </div>
                )}
            </div>

            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>

            <div className={styles.footer}>
                <div className={styles.duration}>
                    <Clock size={16} />
                    <span>{duration}</span>
                </div>
                <div className={styles.playButton}>
                    <PlayCircle size={20} />
                    <span>Mulai Belajar</span>
                </div>
            </div>
        </Link>
    );
}
