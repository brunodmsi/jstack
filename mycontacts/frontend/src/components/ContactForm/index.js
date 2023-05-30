import { useState } from 'react';

import useErrors from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { Form, ButtonContainer } from './styles';

export default function ContactForm({ buttonLabel }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [category, setCategory] = useState('');
	const [errors, setErrors] = useState([]);

	const { setError, removeError, getErrorMessageByFieldName } = useErrors();

	function handleNameChange(event) {
		setName(event.target.value);

		if (!event.target.value) {
			setError({ field: 'name', message: 'Nome é obrigatório' });
		} else {
			removeError('name');
		}
	}

	function handleEmailChange(event) {
		setEmail(event.target.value);

		if (event.target.value && !isEmailValid(event.target.value)) {
			setError({ field: 'email', message: 'Email inválido' });
		} else {
			removeError('email');
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log({ name, email, phone, category });
	}

	return (
		<Form onSubmit={handleSubmit}>
			<FormGroup error={getErrorMessageByFieldName('name')}>
				<Input
					error={getErrorMessageByFieldName('name')}
					value={name}
					placeholder="Nome"
					onChange={handleNameChange}
				/>
			</FormGroup>

			<FormGroup error={getErrorMessageByFieldName('email')}>
				<Input
					error={getErrorMessageByFieldName('email')}
					value={email}
					placeholder="E-mail"
					onChange={handleEmailChange}
				/>
			</FormGroup>

			<FormGroup>
				<Input
					value={phone}
					placeholder="Telefone"
					onChange={(event) => setPhone(event.target.value)}
				/>
			</FormGroup>

			<FormGroup>
				<Select
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				>
					<option value="">Categoria</option>
					<option value="instagram">Instagram</option>
					<option value="discord">Discord</option>
				</Select>
			</FormGroup>

			<ButtonContainer>
				<Button type="submit">{buttonLabel}</Button>
			</ButtonContainer>
		</Form>
	);
}
