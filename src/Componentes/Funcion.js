import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'

export const Funcion = (props) => {
    let unidad = 0 
	switch (props.unidad) {
        case "unidad":
			unidad = <div>{props.number % 10}</div>;
			break;
		case "decena":
			unidad = <div>{Math.trunc(props.number / 10) % 10}</div>;
			break;
		case "centena":
			unidad = <div>{Math.trunc(props.number / 100) % 10}</div>;
			break;
		case "miles":
			unidad = <div>{Math.trunc(props.number / 1000) % 10}</div>;
			break;
        default:
			unidad = <div> <FontAwesomeIcon icon={faClock} /> </div>
			break;
    }
    return <div className="contador">{unidad}</div>;
};

Funcion.propTypes = {
	number: PropTypes.number,
};

    