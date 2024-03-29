import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import Header from '../Header';

import { Container } from './styles';
import Routes from '../../routes';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />

				<Container>
					<Header />
					<Routes />
				</Container>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
