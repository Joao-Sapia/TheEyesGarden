import { useState } from 'react'
import NavBar from './componentes/NavBar';
import SubNavBar from './componentes/SubNavBar';
import Venda from './componentes/Venda';
import Cadastrar from './componentes/CadastrarItem';
import Listar from './componentes/VerListaCadastrado';
import './App.css'

function App() {

    const [tela, setTela] = useState('venda');

    return (
        <div>
            {tela === 'venda' && (<Venda irParaCadastro={() => setTela('cadastro')} irParaLista={() => setTela('lista')}/>)}
            {tela === 'cadastro' && (<Cadastrar />)}
            {tela === 'lista' && (<Listar />)}
        </div>
    );
}

export default App;