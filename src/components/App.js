import React from "react";
import { Link } from 'react-router-dom'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="app">
                <div className="app-header d-flex flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
                    <Link to="/"><h5 className="my-0 mr-md-auto font-weight-normal">Lattes Mining</h5></Link>
                    <div className="d-flex flex-md-row align-items-center justify-content-between">
                        <nav className="my-2 my-md-0 mr-md-3">
                            <Link className="p-2 text-dark" to="/">Home</Link>
                            <Link className="p-2 text-dark" to="/sobre">Sobre</Link>
                        </nav>
                        <a className="btn btn-outline-primary" href="https://github.com/Spacebus/lattes-mining">Ver no GitHub</a>
                    </div>
                </div>

                <div className="app-main container">
                    { ...this.props.children }
                </div>
                
                <footer className="app-footer pt-4 my-md-4  border-top text-center">
                    <div>Spacebus ©, 2018</div>
                </footer>
            </div>
        ) 
    }
}