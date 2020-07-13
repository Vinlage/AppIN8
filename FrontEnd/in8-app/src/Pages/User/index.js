import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-scroll';

export default function UsersList(){
    const [users, setUsers] = useState([]);
    const icon = require('../../Assets/Icons/topo-pag.svg');

    useEffect(() => {
        api.get('users'
            
        ).then(response => {
            setUsers(response.data);
        })
    });

    return (
        <div className="profile-container" id="users">
            <div className="users-title">LISTA DE CADASTRO</div>
            <div className="DataTable">
                <div className="ScrollContainer">
                <table className="Table">
                    <thead>
                    <tr>
                        <th></th>
                        <th className="table-header"><strong>NOME</strong></th>
                        <th className="table-header"><strong>E-MAIL</strong></th>
                        <th className="table-header"><strong>NASCIMENTO</strong></th>
                        <th className="table-header"><strong>TELEFONE</strong></th>
                    </tr>

                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}> 
                                <td className="table-numbers">{index+1}</td>
                                <td className="table-element">{user.name}</td>
                                <td className="table-element">{user.email}</td>
                                <td className="table-element">{user.nascimento}</td>
                                <td className="table-element">{user.telefone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="icon-top">
                    <Link className="link"
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                    <img src={icon} alt=""/></Link>
                </div>
                </div>
            </div>
        </div>
    );
}