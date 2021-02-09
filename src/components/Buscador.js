import React from "react";
import '../assets/css/Buscador.css';

class Buscador extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            musica: [],
            musicaBackup: [],
            busqueda: '',
            musicas: []
        }
    }

    onChange = async e => {

        await this.setState({
            busqueda: e.target.value
        })

        if (this.state.busqueda !== '') {
            let url = "https://api.deezer.com/search?q=" + this.state.busqueda;
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            console.log("Url: " + url);

            let data = await response.json();

            if (data.data.length > 0) {
                console.log("Se muestra");
            } else {
                console.log("No se muestra");
            }
            console.log(data.data);
        }
    }

    render() {

        return (
            <div className="position-relative min-container">
                <form id="loginForm">
                    <div className="form-group position-relative">
                        <input className="form-control input-lg rounded-0" id="email" name="email" type="text"
                            placeholder="Buscar" value={this.state.busqueda} onChange={this.onChange} />
                        <i className="fa fa-search fa-lg position-absolute"></i>
                    </div>
                </form>
            </div>
        );

    }
}

export default Buscador;