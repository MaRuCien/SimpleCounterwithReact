import React, {useState, useEffect } from 'react';
import './Contador.css';
import { Funcion } from './Funcion';


const Contador = ()  => {

    let unidades = {
		unidad: "unidad",
		decena: "decena",
		centena: "centena",
		miles: "miles",
	};
    
    const [counter, setCounter] = useState(0);
    
   useEffect(() => {
        const interval = setInterval(() => {
          setCounter(counter => counter + 1);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

  return (
            <div className="contenedor">
				<Funcion />
				<Funcion unidad={unidades.miles} number={counter} />
				<Funcion unidad={unidades.centena} number={counter} />
				<Funcion unidad={unidades.decena} number={counter} />
				<Funcion unidad={unidades.unidad} number={counter} />   
            </div>
  );   
};

export default Contador;