import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../Login.css"

export const Login = () => {
	
    const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

    const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = form;

		const validarEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

		const resultadoValidacion = validarEmail.test(email);
		if (!resultadoValidacion) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Email no valido!',
				confirmButtonColor: '#8f8e8b',
			});
			return;
		} else if (password.length < 7) {
			Swal.fire({
				icon: 'warning',
				title: 'Oops...',
				text: 'La contraseña debe ser mayor a 7 caracteres!',
				confirmButtonColor: '#8f8e8b',
			});
			return;
		}
		navigate('/home', {replace:true});
	};
    
return (
		<section className='login'>
			<Form id='loginForm' className='logform bg-dark'>
				<h2 className='titulolog'>Login</h2>
				<Form.Group className='' controlId='inputemail'>
					<Form.Label className='labellog'>Email</Form.Label>
					<input
						className='inputlog'
						name='email'
						type='email'
						value={form.email}
						onChange={handleChange}
					/>
				</Form.Group>
<Form.Group className='' controlId='inputpassword'>
					<Form.Label className='labellog'>Contraseña</Form.Label>
					<input
						className='inputlog'
						name='password'
						type='password'
						value={form.password}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group className='botoneslogin' controlId='inputpassword'>
					<Link className='input-submitlog' onClick={handleSubmit}>
						Ingresar
					</Link>
				</Form.Group>
			</Form>
		</section>
	);
};