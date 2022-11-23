import React from 'react'
import './Home.css'

let nome = 'THAINARA'
let idade = 28
let turma = '02'
let professores = 'Eltim e Liza'

function Home(){
    return(
        <div>
            <h1 className='fonte'>Esse é o meu mundo</h1>

            <h2 className='fonte2'>{nome}</h2>
            <h2 className='fonte2'>{idade}</h2>
            <h2 className='fonte2'>{turma}</h2>
            <h2 className='fonte2'>{professores}</h2>
        </div>
    );
}
export default Home;