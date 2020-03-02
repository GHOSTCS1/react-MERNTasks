import React, { Fragment } from 'react';

const NuevoProyecto = () => {
     return ( 
          <Fragment>
               <button
                    type="button"
                    classname="btn btn-block btn-primario"
               >Nuevo Proyecto</button>

               <form
                    classname="formulario-nuevo-proyecto"
               >
                    <input
                         type="text"
                         classname="input-text"
                         placeholder="Nombre Proyecto"
                         name="nombre"
                    />

                    <input
                         type="submit"
                         classname="btn btn-block btn-primario"
                         value="Agregar Proyecto"
                    />
               </form>
          </Fragment>
      );
}
 
export default NuevoProyecto;