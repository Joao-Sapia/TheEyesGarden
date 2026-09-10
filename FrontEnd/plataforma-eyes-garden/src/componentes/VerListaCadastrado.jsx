import { useEffect, useState } from 'react';
import styles from './VerListaCadastrado.module.css';
import NavBar from './NavBar';

function Listar() {

const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function buscarProdutos() {
            try {const resposta = await fetch('http://localhost:8080/Produto/Visualizar');
                if (resposta.ok) {const dados = await resposta.json();
                    setProdutos(dados);
                } else {alert('Erro ao buscar os produtos.');}
            } catch (erro) {
                console.error(erro);
                alert('Não foi possível conectar com o BackEnd.');
            }
        } buscarProdutos();
    }, []);

    return (
   <div className={styles.telaLista}>
            <NavBar />
            <div className={styles.conteudo}>
                <div className={styles.cabecalho}>
                    <h1>Produtos Cadastrados</h1>
                </div>
                <div className={styles.listaProdutos}>
                    {produtos.map((produto, index) => (
                        <div className={styles.boxProduto} key={index}>
                            <div className={styles.informacoes}>
                                <h3>{produto.nome}</h3>
                                <div className={styles.descricao}>
                                    <span>{produto.descricao}</span>
                                </div>
                            </div>
                            <div className={styles.categoria}>
                                <span>{produto.categoria}</span>
                            </div>
                            <div className={styles.estoque}>
                                <span>Em estoque: {produto.quantidade}</span>
                            </div>
                            <div className={styles.valor}>
                                <span>R$ {produto.valor}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Listar;