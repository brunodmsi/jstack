import { Container, InputSearchContainer } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
	return (
		<Container>
			<img alt="Logo" src={logo} width="201" />

			<InputSearchContainer>
				<input type="text" placeholder="Pesquise pelo nome" />
			</InputSearchContainer>
		</Container>
	);
}
