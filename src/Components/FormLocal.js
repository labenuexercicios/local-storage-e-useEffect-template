import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
    const [nome, setNome] = useState("");
    const [tarefa, setTarefa] = useState("");
    const [listaTarefa, setListaTarefa] = useState([]);
    const [contador, setContador] = useState(0)

    const onChangeName = (e) => {
        setNome(e.target.value)
    }

    const onChangeTarefa = (e) => {
        setTarefa(e.target.value)
    }

    const onClickSaved = () => {
        localStorage.setItem('nomeUsuario', nome)
    }

    useEffect(()=>{
        onClickSaved()
    }, [nome])

    const onClickSavedTask = () => {
        const taskString = JSON.stringify(listaTarefa)
        localStorage.setItem('tarefa', taskString)
    }

    const dataClicked = () => {
        const acessado = localStorage.getItem("nomeUsuario")
        setNome(acessado)
        alert(acessado)
    }

    const dataClickedTask = () => {
        const acessado = localStorage.getItem("tarefa")
        setTarefa(acessado)
        alert(acessado)
        setTarefa('')
    }

    const addTask = () =>{
        const tasks = [...listaTarefa, tarefa]
        setListaTarefa(tasks)
        setTarefa('')
    }

    const increment = () => {
        setContador(contador + 1)
    }

    const decrement = () => {
        setContador(contador - 1)
    }

    useEffect(()=>{
        document.title = contador
    })

    return (
        <Form>
            <h3>Prática 1</h3>
            <label htmlFor="nome">
                nome:
                <input name="nome" id="nome" value={nome} onChange={onChangeName}/>
            </label>
            <div>
                <button onClick={onClickSaved}>Guardar Dados</button>
                <button onClick={dataClicked}>Acessar Dados</button>
            </div>
            <br />

            {/* {---------------------------------------------------} */}

            <h3>Prática 2</h3>
            <label htmlFor="tarefa">
                tarefa:
                <input name="tarefa" id="tarefa" value={tarefa} onChange={onChangeTarefa}/>
            </label>
            <button type="button" onClick={addTask}>adicionar Tarefa</button>
            <ul>
                {listaTarefa.map((task) => {
                    return <li key={task}>{task}</li>;
                })}
            </ul>
            <div>
                <button onClick={onClickSavedTask}>Guardar tarefa</button>
                <button onClick={dataClickedTask}>Acessar tarefa</button>
            </div>

            <h3>Prática 3</h3>
            <button onClick={increment}>+</button>
            <p>{contador}</p>
            <button onClick={decrement}>-</button>
        </Form>
    );
}