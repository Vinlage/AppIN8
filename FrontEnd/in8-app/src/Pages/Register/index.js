import React, { useState } from 'react';
import api from '../../services/api';
import './styles.css';

export default function NewUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nascimento, setNasc] = useState('');
    const [telefone, setTel] = useState('');

    async function handleNewUser(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            nascimento,
            telefone,
        };

        try {
            await api.post('users', data, {
                
            })
        } catch (err){
            alert('Erro ao cadastrar, tente novamente');
        }
    }

    return (
        
        <div className="new-user-container" id="register">
            <div className="content">
                <div className="register-title">CADASTRO</div>
                <div className="register-form">
                    <form onSubmit={handleNewUser}>
                        <label className="register-label">Nome</label>
                        <input className="register-input"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <label className="register-label">E-mail</label>
                        <input className="register-input"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label className="register-label">Nascimento</label>
                        <input className="register-input"
                            value={nascimento}
                            onChange={e => setNasc(e.target.value)}
                        />
                        <label className="register-label">Telefone</label>
                        <input className="register-input"
                            value={telefone}
                            onChange={e => setTel(e.target.value)}
                        />
                        <div style={{width: "100%", textAlign: "center"}}>
                            <button className="button" type="submit">CADASTRAR</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
}