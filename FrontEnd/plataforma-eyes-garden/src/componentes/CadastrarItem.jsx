import { useState } from 'react';
import styles from './CadastrarItem.module.css';
import NavBar from './NavBar';

function Cadastrar() {

    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [quantidade, setQuantidade] = useState('');

    async function cadastrarProduto() {

        const produto = {
            nome: nome,
            categoria: categoria,
            descricao: descricao,
            valor: Number(valor),
            quantidade: Number(quantidade)
        };
        try {
            const resposta = await fetch('http://localhost:8080/Produto/Cadastrar', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(produto)
            });
            if (resposta.ok) {alert('Produto cadastrado com sucesso!');
                
                setNome('');
                setCategoria('');
                setDescricao('');
                setValor('');
                setQuantidade('');
            } else {
                alert('Erro ao cadastrar o produto.');
            }
        } catch (erro) {
            console.error(erro);
            alert('Não foi possível conectar com o BackEnd.');
        }
    }

    return (
        <div className={styles.telaCadastro}>
            <NavBar />
            <div className={styles.areaCadastro}>
                <div className={styles.box}>
                    <div className={styles.titulo}>
                        <h1>Novo Produto</h1>
                    </div>
                    <p className={styles.subtitulo}> Preencha os dados abaixo para cadastrar um novo produto em nosso loja. </p>
                    <div className={styles.campo}>
                        <p>Nome do Produto</p>
                        <input type="text" placeholder="Digite o nome do produto..." value={nome} onChange={(event) => setNome(event.target.value)}/>
                    </div>
                    <div className={styles.campo}>
                        <p>Categoria</p>
                        <select value={categoria} onChange={(event) => setCategoria(event.target.value)}>
                            <option value=""> Selecione a categoria... </option>
                            <option value="ferramenta"> Ferramenta </option>
                            <option value="fertilizante"> Fertilizante </option>
                            <option value="semente"> Semente </option>
                            <option value="planta"> Planta </option>
                        </select>
                    </div>
                    <div className={styles.campo}>
                        <p>Descrição</p>
                        <textarea placeholder="Descreva o produto, suas características e benefícios..." value={descricao} onChange={(event) => setDescricao(event.target.value)}/>
                    </div>
                    <div className={styles.linha}>
                        <div className={styles.campoPequeno}>
                            <p>Valor do Produto</p>
                            <input type="text" placeholder="R$ 0,00" value={valor} onChange={(event) => setValor(event.target.value)}/>
                        </div>
                        <div className={styles.campoPequeno}>
                            <p>Quantidade disponível</p>
                            <input type="text" placeholder="Ex: 10" value={quantidade} onChange={(event) => setQuantidade(event.target.value)}/>
                        </div>
                    </div>
                    <button className={styles.botao} onClick={cadastrarProduto}> Cadastrar </button>
                </div>
            </div>
        </div>
    );
}

export default Cadastrar;