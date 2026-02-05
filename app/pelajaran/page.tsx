import { lessons } from '@/data/lessons';
import LessonCard from '@/components/LessonCard';
import styles from './page.module.css';

export const metadata = {
    title: 'Pelajaran - Excel Belajar',
    description: 'Daftar lengkap pelajaran Excel dari dasar sampai mahir dalam Bahasa Indonesia.',
};

export default function PelajaranPage() {
    // Sort: episodes 1-5 first, then bonus (episode 0)
    const sortedLessons = [...lessons].sort((a, b) => {
        if (a.episode === 0) return 1;
        if (b.episode === 0) return -1;
        return a.episode - b.episode;
    });

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1>Daftar Pelajaran</h1>
                <p>
                    Mulai dari dasar dan lanjutkan sampai mahir.
                    Setiap pelajaran dilengkapi video, transkrip, dan shortcuts.
                </p>
            </div>

            <div className={styles.lessonsGrid}>
                {sortedLessons.map((lesson, index) => (
                    <LessonCard
                        key={lesson.id}
                        slug={lesson.slug}
                        episode={lesson.episode}
                        title={lesson.title}
                        description={lesson.description}
                        duration={lesson.duration}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
