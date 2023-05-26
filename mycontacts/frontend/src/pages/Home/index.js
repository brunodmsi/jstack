import { Link } from 'react-router-dom';
import {
	Card,
	Container,
	Header,
	InputSearchContainer,
	ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import Modal from '../../components/Modal';

export default function Home() {
	return (
		<Container>
			<Modal danger title="Teste" body="Corpo" />

			<InputSearchContainer>
				<input type="text" placeholder="Pesquise pelo nome" />
			</InputSearchContainer>

			<Header>
				<strong>3 contatos</strong>
				<a href="/">Novo contato</a>
			</Header>

			<ListContainer>
				<header>
					<button type="button">
						<span>Nome</span>
						<img src={arrow} alt="Arrow" />
					</button>
				</header>

				<Card>
					<div className="info">
						<div className="contact-name">
							<strong>Bruno De Masi</strong>
							<small>instagram</small>
						</div>
						<span>bruno@demasi.dev</span>
						<span>(91) 99999-9999</span>
					</div>

					<div className="actions">
						<button type="button">
							<Link to="/edit/123">
								<img src={edit} alt="Edit" />
							</Link>
						</button>

						<button type="button">
							<a href="/#">
								<img src={trash} alt="Delete" />
							</a>
						</button>
					</div>
				</Card>
			</ListContainer>
		</Container>
	);
}
