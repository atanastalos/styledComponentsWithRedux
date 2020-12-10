import styled from 'styled-components';

export const FormGroup = styled.form`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: #1DAB66;
    display: block;
`;

export const Input = styled.input.attrs({
    type: 'text'
})`
	padding: 0.5em;
	color: #1DAB66;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const Paragraph = styled.p`
	padding-bottom: 20px;
`;

