import styled, { css } from 'styled-components';

export default styled.button`
	height: 52px;
	padding: 0 16px;
	border: none;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
	border-radius: 4px;
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	transition: background-color 0.2s ease-in;
	background: ${({ theme }) => theme.colors.primary.main};

	&:hover {
		background: ${({ theme }) => theme.colors.primary.light};
	}

	&:active {
		background: ${({ theme }) => theme.colors.primary.dark};
	}

	&[disabled] {
		background: #ccc;
		cursor: default;
	}

	${({ theme, danger }) =>
		danger &&
		css`
			transition: background-color 0.2s ease-in;
			background: ${theme.colors.danger.main};

			&:hover {
				background: ${theme.colors.danger.light};
			}

			&:active {
				background: ${theme.colors.danger.dark};
			}

			&[disabled] {
				background: #ccc;
				cursor: default;
			}
		`}
`;
