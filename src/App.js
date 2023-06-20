import { useEffect, useState } from "react";

export default function App() {
  // Estado para armazenar a lista de compras
  const [listaCompras, setListaCompras] = useState([]);

  // Estado para armazenar o valor do item sendo digitado
  const [item, setItem] = useState("");

  // Função para adicionar um item à lista de compras
  const adicionarItem = () => {
    if (item.trim() !== "") {
      // Verifica se o item não está vazio ou contém apenas espaços em branco
      setListaCompras([...listaCompras, item]); // Adiciona o item à lista de compras
      setItem(""); // Limpa o campo de entrada
    }
  };

// coloquei no localStorage
  const saveLocalStorage = () => {
//forma resumida em uma linha localStorage.setItem("lista", JSON.stringify(listaCompras))
const listaString = JSON.stringify(listaCompras)
localStorage.setItem('lista', listaString)
}

// peguei do localStorage
const getItensLocalStorage = () => {
// transformando em array forma resumida: JSON.parse(localStorage.getItem('lista'))
const listString2 = localStorage.getItem("lista")
const listaArray = JSON.parse(listString2)
if (listaArray) {setListaCompras(listaArray)}
}

// remover do localStorage
const removeItemLocalStorage = () => {
localStorage.removeItem("lista")
setListaCompras([])
}

// acontece 1x quando minha pagina é montada
useEffect(() => {
  getItensLocalStorage()
}, [])
// acontece toda vez que o estado listaCompras é atualizado
useEffect (() => {
  if(listaCompras.length){
    saveLocalStorage()}
}, [listaCompras])

  return (
    <div>
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite um item"
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <button onClick={removeItemLocalStorage}>Remover do localStorage</button>
{/*   <button onClick={saveLocalStorage}>Salvar no localStorage</button>
      <button onClick={getItensLocalStorage}>Pegar</button>
*/} 

      <ul>
        {listaCompras.map((compra, index) => (
          <li key={index}>{compra}</li>
        ))}
      </ul>
    </div>
  );
}
