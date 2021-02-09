import React from "react";
import '../assets/css/Logo.css';

class Logo extends React.Component {
    render() {
        const { imagen, clase, descripcion } = this.props
        return (
            <img src={imagen} className={clase} alt={descripcion}></img>
        )
    }
}

export default Logo;