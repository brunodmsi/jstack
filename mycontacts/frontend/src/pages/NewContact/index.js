import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import Button from '../../components/Button';

export default function NewContact() {
	return (
		<>
			<PageHeader title="Novo contato" />
			<Input placeholder="Nome" />
			<Select>
				<option value="123"> instagram</option>
				<option value="123"> instagram</option>
				<option value="123"> instagram</option>
				<option value="123"> instagram</option>
				<option value="123"> instagram</option>
			</Select>
			<Button type="button">Salvar alterações</Button>
			<Button disabled type="button">
				Salvar alterações
			</Button>
		</>
	);
}
