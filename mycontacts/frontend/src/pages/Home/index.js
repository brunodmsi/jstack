import { useEffect, useState } from 'react';
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

export default function Home() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8000/contacts')
			.then(async (response) => {
				const json = await response.json();
				setContacts(json);
			})
			.catch((error) => {
				console.log('error', error);
			});
	}, []);

	return (
		<Container>
			<InputSearchContainer>
				<input type="text" placeholder="Pesquise pelo nome" />
			</InputSearchContainer>

			<Header>
				<strong>
					{contacts.length} {contacts.length === 1 ? 'contato' : 'contatos'}
				</strong>
				<a href="/new">Novo contato</a>
			</Header>

			<ListContainer>
				<header>
					<button type="button">
						<span>Nome</span>
						<img src={arrow} alt="Arrow" />
					</button>
				</header>

				{contacts.map((contact, contactIndex) => (
					<Card key={contactIndex}>
						<div className="info">
							<div className="contact-name">
								<strong>{contact.name}</strong>
								{contact.category_name && (
									<small>{contact.category_name}</small>
								)}
							</div>
							<span>{contact.email}</span>
							<span>{contact.phone}</span>
						</div>

						<div className="actions">
							<button type="button">
								<Link to={`/edit/${contact.id}`}>
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
				))}
			</ListContainer>
		</Container>
	);
}
