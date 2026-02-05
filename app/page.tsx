import Link from 'next/link';
import { ArrowRight, BookOpen, Keyboard, Play, Sparkles } from 'lucide-react';
import { lessons } from '@/data/lessons';
import LessonCard from '@/components/LessonCard';
import ProgressTracker from '@/components/ProgressTracker';
import styles from './page.module.css';

export default function Home() {
  const featuredLessons = lessons.slice(0, 3);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGlow} />
          <div className={styles.heroGrid} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Sparkles size={14} />
            <span>Gratis untuk Belajar</span>
          </div>
          <h1 className={styles.heroTitle}>
            Kuasai <span className={styles.highlight}>Microsoft Excel</span>
            <br />dari Nol Sampai Mahir
          </h1>
          <p className={styles.heroDescription}>
            Platform belajar Excel terlengkap dalam Bahasa Indonesia.
            Video tutorial, transkrip materi, dan panduan keyboard shortcuts
            untuk meningkatkan produktivitas Anda.
          </p>
          <div className={styles.heroActions}>
            <Link href="/pelajaran" className={`btn btn-primary ${styles.heroBtn}`}>
              <Play size={18} />
              Mulai Belajar
            </Link>
            <Link href="/shortcuts" className={`btn btn-secondary ${styles.heroBtn}`}>
              <Keyboard size={18} />
              Lihat Shortcuts
            </Link>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>6</span>
              <span className={styles.statLabel}>Pelajaran</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>60+</span>
              <span className={styles.statLabel}>Shortcuts</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>Jam Video</span>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ProgressTracker totalLessons={lessons.length} />
        </div>
      </section>

      {/* Featured Lessons */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <h2>Mulai Belajar</h2>
              <p>Pelajaran dasar untuk memulai perjalanan Anda menguasai Excel</p>
            </div>
            <Link href="/pelajaran" className={`btn btn-ghost ${styles.viewAll}`}>
              Lihat Semua
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className={styles.lessonsGrid}>
            {featuredLessons.map((lesson, index) => (
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
      </section>

      {/* Features Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.centeredTitle}>Mengapa Belajar di Sini?</h2>
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <BookOpen size={24} />
              </div>
              <h3>Transkrip Lengkap</h3>
              <p>Setiap pelajaran dilengkapi transkrip materi dalam Bahasa Indonesia untuk referensi cepat.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Keyboard size={24} />
              </div>
              <h3>Keyboard Shortcuts</h3>
              <p>Pelajari shortcuts Excel yang akan meningkatkan produktivitas kerja Anda.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Play size={24} />
              </div>
              <h3>Video Tutorial</h3>
              <p>Video tutorial dari dasar yang terstruktur dan mudah diikuti.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Excel Belajar &copy; 2026 - Platform belajar untuk kebutuhan pribadi</p>
        </div>
      </footer>
    </div>
  );
}
