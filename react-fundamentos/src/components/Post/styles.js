import styled, { css } from "styled-components";

export const Container = styled.article`
	margin-bottom: 24px;

	${({ removed }) => css`
		color: ${removed ? '#f00' : '#fff'};
		opacity: ${removed ? 0.5 : 1};
	`};
`;

export const Subtitle = styled.small`
	display: block;
`;

export const Rate = styled.span`
	font-size: 10px;
	opacity: 0.7;
`;