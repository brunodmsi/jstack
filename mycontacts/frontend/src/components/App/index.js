import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import Header from '../Header';
import ContactsList from '../ContactsList';

import { Container } from './styles';

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />

			<Container>
				<Header />
				<ContactsList />
			</Container>
		</ThemeProvider>
	);
}

export default App;
