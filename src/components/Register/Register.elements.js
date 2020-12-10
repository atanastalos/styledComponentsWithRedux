import styled from 'styled-components';

export const FormGroup = styled.form`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;

export const Label2 = styled.div.attrs({
    className: 'akarmi'
})`
    margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;

// export const Label2 = styled.label`
// 	margin-bottom: 0.5em;
// 	color: palevioletred;
//     display: block;
// `;

export const Input = styled.input.attrs({
    type: 'text'
})`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

