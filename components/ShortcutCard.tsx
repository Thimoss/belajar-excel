import { Keyboard } from 'lucide-react';
import styles from './ShortcutCard.module.css';

interface Shortcut {
    keys: string;
    description: string;
}

interface ShortcutCardProps {
    shortcuts: Shortcut[];
    title?: string;
}

export default function ShortcutCard({ shortcuts, title = "Keyboard Shortcuts" }: ShortcutCardProps) {
    const formatKeys = (keys: string) => {
        return keys.split(' + ').map((key, index, arr) => (
            <span key={index}>
                <kbd className={styles.kbd}>{key}</kbd>
                {index < arr.length - 1 && <span className={styles.plus}>+</span>}
            </span>
        ));
    };

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <Keyboard size={20} />
                <h4>{title}</h4>
            </div>
            <div className={styles.list}>
                {shortcuts.map((shortcut, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.keys}>
                            {formatKeys(shortcut.keys)}
                        </div>
                        <span className={styles.description}>{shortcut.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
