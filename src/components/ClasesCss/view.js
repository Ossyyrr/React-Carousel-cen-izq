import React, { useState } from 'react';
import './styles.scss';
import {getMock} from '../../services/ejemplo'

function ClasesCss(){
    const [counter, setCounter] = useState(0);


    const datos = getMock()

   console.log(counter)
   console.log(datos.length)
    
    function clickRight(){
        const elementos = document.querySelectorAll(".card")
        

        elementos.forEach(element => {
            if(element.classList.contains("cen") && !element.classList.contains("izq")){
                element.classList.remove("cen")
            }
            if( element === elementos[counter-2]){
                element.classList.remove("izq")
            }
            setCounter(counter-1)
        });
    }

    function clickLeft(){
        const elementos = document.querySelectorAll(".card")
        
        elementos.forEach(element => {
            if(element.classList.contains("cen")){
                element.classList.add("izq")
            }
            if( element === elementos[counter]){
                element.classList.add("cen")
            }
            setCounter(counter+1)
        });
    }



    return    <div className="container">
        
        <button onClick={clickLeft}>Izquierda</button>
        {datos.map(dato =>(
            <div className="card"> 
                <h2>{dato.nombre}</h2>
                <h4>{dato.dim}</h4>
           
            </div>
        ))}
        <button onClick={clickRight}>Derecha</button>
            {datos.length===counter-1? <h3 className="acabado">EXAMEN ACABADO</h3>: ''}
    </div>
}
export default ClasesCss