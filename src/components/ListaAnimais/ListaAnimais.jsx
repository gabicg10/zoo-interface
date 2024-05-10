import Table from 'react-bootstrap/Table';

function ListaAnimais() {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Genero</th>
                        <th>Envergadura</th>
                    </tr>
                </thead>
                <tbody>
                    {Animais.length > 0 ? (
                        animais.map((animal)=>(
                            <tr>
                            <td>{animal.nomeanimal}</td>
                            <td>{animal.idadeanimal}</td>
                            <td>{animal.generoanimal}</td>
                            <td>{animal.envergaduraanimal}</td>
                        </tr>
                        )
                        )) : (
                            <p>carregando ... verifique se o servidor esta conectado</p>
                        )}
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}
;
export default BasicExample

