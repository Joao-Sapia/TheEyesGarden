import styles from './SubNavBar.module.css';

function SubNavBar() {
    return (
        <div className={styles.subNav}>
            <div className={styles.categoria}>
                <div className={styles.icone}>🔧</div>
                <p>Ferramentas</p>
            </div>
            <div className={styles.categoria}>
                <div className={styles.icone}>🌱</div>
                <p>Fertilizantes</p>
            </div>
            <div className={styles.categoria}>
                <div className={styles.icone}>🌾</div>
                <p>Sementes</p>
            </div>
            <div className={styles.categoria}>
                <div className={styles.icone}>🪴</div>
                <p>Plantas</p>
            </div>
        </div>
    );
}

export default SubNavBar;