import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { Form, ButtonContainer } from './styles';

export default function ContactForm({ buttonLabel }) {
	return (
		<Form>
			<FormGroup error="Teste">
				<Input placeholder="Nome" error />
			</FormGroup>

			<FormGroup>
				<Input placeholder="E-mail" />
			</FormGroup>

			<FormGroup>
				<Input placeholder="Telefone" />
			</FormGroup>

			<FormGroup>
				<Select>
					<option value="instagram">Instagram</option>
				</Select>
			</FormGroup>

			<ButtonContainer>
				<Button type="submit">{buttonLabel}</Button>
			</ButtonContainer>
		</Form>
	);
}
