import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

export default function LoginClientForm(){
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e){
        e.preventDefault();
        const data = {email, password}
        try{
            const response = await api.post('/auth/login', data);
            if(response){
                localStorage.setItem('app-token', response.data.token);
                localStorage.setItem('user-id', response.data.user.id);
                console.log(email, password)
                history.push('/home');
            }else{
                alert("E-mail ou senha incorretos")
            }
        }catch(err){
            alert("Não foi possível fazer login");
        }
    }
    return (
        <div className="login-clients-form">
            <form id="form-login" onSubmit={handleLogin}>
                <div>
                    <h2 id="h2">Entrar</h2>
                    <h4 className="h4">Bem-vindo de volta</h4>
                </div>
                <div>
                    <label>E-mail</label><br/>
                    <input type="text" id="email" placeholder="nome@email.com" value={email} onChange={e => setEmail(e.target.value)}/> 
                    <label>Senha</label><br/>
                    <input type="password" id="password" placeholder="••••••••••" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="button-group-space">
                    <button className="purple" type="submit">ENTRAR</button>
                </div>
            </form>
            <div className="bottom-register">
                <p className="register-link"> <Link to="/redefine-password">Esqueci minha senha</Link></p>
                <p className="register-link"> <Link to="/register">Ainda não tenho cadastro</Link></p> 
            </div>
        </div>
    )
    
}

