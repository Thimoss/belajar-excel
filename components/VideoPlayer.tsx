import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
    youtubeId: string;
    title: string;
}

export default function VideoPlayer({ youtubeId, title }: VideoPlayerProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={styles.iframe}
                />
            </div>
        </div>
    );
}
