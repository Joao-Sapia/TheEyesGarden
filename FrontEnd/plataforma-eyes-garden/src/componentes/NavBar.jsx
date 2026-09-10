import styles from './NavBar.module.css';

function NavBar() {
    return (
      <div className={styles.nav}>
            <div className={styles.titulo}>
                <h1>The Eye's Garden</h1>
                <p>Mais vida para o seu espaço</p>
            </div>
            <div className={styles.barraPesquisa}>
                <span>⌕</span>
                <input type="text" placeholder="Buscar produtos..."/>
            </div>
            <div className={styles.interacoes}>
                <div className={styles.interacao}>
                    <span className={styles.icone}>🪙</span>
                    <p>Minhas Vendas</p>
                </div>
                <div className={styles.interacao}>
                    <span className={styles.icone}>🛒</span>
                    <p>Carrinho</p>
                </div>
            </div>
        </div>
    );
}

export default NavBar;