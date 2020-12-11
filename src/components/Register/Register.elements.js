import styled from 'styled-components';

export const FormGroup = styled.form`
    display: block;
	width: 300px;
	margin: 25px auto 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: #1DAB66;
    display: block;
`;

export const Input = styled.input`
	padding: 0.5em;
	color: #1DAB66;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const StyledDatePicker = styled.div`
 .react-datepicker-wrapper,
 .react-datepicker__input-container,
 .react-datepicker__input-container input {
   width: 100%;
   color: #1DAB66;
   background-color: papayawhip;
   border: none;
   border-radius: 3px;
   padding: 2px;
 }
 
 .react-datepicker__day--selected,
 .react-datepicker__day--keyboard-selected {
    background-color: #1DAB66;
 }
 
 .react-datepicker__current-month {
    color: #1DAB66;
 }
`;

export const Paragraph = styled.p`
	padding-bottom: 20px;
	color: #FA6C4C;
`;


