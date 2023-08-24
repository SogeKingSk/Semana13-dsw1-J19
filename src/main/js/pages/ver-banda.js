const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerBandaPage = () => {

    let { id } = useParams();
    const [banda, setBanda] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/bandas/' + id
        }).done(response=>setBanda(response.entity))

    },[])




    return (
        <>
            <h1>Ver Banda</h1>

            <table border={1}>
                <tr>
                    <th>Nombre</th>
                    <td>{banda.nombre}</td>
                </tr>
            </table>
            <hr/>
            <h2>Formacion</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Musico</th>
                        <th>Instrumento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre de Musico</td>
                        <td>Instrumento que toca</td>
                    </tr>
                </tbody>
            </table>


            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerBandaPage;