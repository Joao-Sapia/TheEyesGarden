import NavBar from './NavBar';
import SubNavBar from './SubNavBar';
import styles from './Venda.module.css';

function Venda({irParaCadastro, irParaLista}) {
    return (
        <div className={styles.telaVenda}>
            <NavBar />
            <div className={styles.conteudo}>
                <div className={styles.apresentacao}>
                    <h1> Cultive bons negócios! </h1>
                    <p> Tudo o que você precisa para cuidar
                        <br />
                        do seu jardim. </p>
                    <div className={styles.botoes}>
                        <div className={styles.cadastrar}>
                            <button onClick={irParaCadastro}> Cadastrar Item </button>
                        </div>
                        <div className={styles.verItens}>
                            <button onClick={irParaLista}> Ver Itens Cadastrados </button>
                        </div>
                    </div>
                </div>
            </div>
            <SubNavBar />
        </div>
    );
}

export default Venda;