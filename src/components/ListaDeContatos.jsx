import { useState } from "react"
import './ListaDeContatos.css'

function ListaDeContatos() {
    const [contatos, setContatos] = useState([]);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
  
    const adicionarContato = () => {
      if (nome && telefone) {
        setContatos([...contatos, { nome, telefone }]);
        setNome('');
        setTelefone('');
      }
    };
  
    return (
      <div className="adri">
        <h2>Lista de Contatos</h2>
        <div>
            <br/>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />
          <br/>
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Telefone"
          />
          <br/>
          <button onClick={adicionarContato}>Adicionar Contato</button>
        </div>
        <ul>
          {contatos.map((contato, index) => (
            <li key={index}>
              <strong>{contato.nome}:</strong> {contato.telefone}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ListaDeContatos;