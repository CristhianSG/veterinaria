import React from 'react'

export default () => {
    return (<div>
        <p>Esta es la página principal de la Veterinaria</p>
        <div>
            <p>Dueño de la Mascota: <input type="text"/></p>
        </div>
        <div>
            <p>Nombre de la Mascota: <input type="text"/></p>
        </div>
        <div>
            <p>Edad de la Mascota: <input type="text"/></p>
        </div>
        <div>
            <p>Raza de la Mascota: <input type="text"/></p>
        </div>
        <div>
            <button>Guardar</button>
            <button>Limpiar</button>
        </div>
    </div>)
}