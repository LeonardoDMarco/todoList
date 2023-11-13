import React from "react";

const Evento = () => {
    
    const meuEvento = () => {
        console.log( "Opa, fui ativado!")
    }
    
    
    
    return (
        <>
        <p>Clique para disparar um evento:</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
        
    )

}

export default Evento;