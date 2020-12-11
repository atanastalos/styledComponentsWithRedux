<h1 align="center">React project with Styled Components and Redux</h1>

<p align="center">
<a href="https://github.com/badges/shields/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/languages/code-size/atanastalos/styledComponentsWithRedux" /></a>
<a href="https://github.com/badges/shields/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/stars/atanastalos/styledComponentsWithRedux?style=social" /></a>
<a href="https://github.com/badges/shields/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/forks/atanastalos/styledComponentsWithRedux?style=social" /></a>
  
<img src="https://github.com/atanastalos/styledComponentsWithRedux/blob/main/readme_assets/preview.png" alt="preview" height="400"/>
</p>
<h2>Description</h2>
<p align="justify">Input form for register without backend. Validator checks whether you fill all required fields or write a valid email. If you add correct data, it redirects to an other page where you can read your summarized data. Data is stored at frontend through Redux.</p>
<h2>Framework, tools :muscle: :muscle:</h2> 
<ul>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://reactdatepicker.com/">React Datepicker</a></li>
  <li><a href="https://styled-components.com/">Styled Components</a></li></li>
  <li><a href="https://redux.js.org/">Redux</a></li></li>
</ul>
<h2>Datepicker</h2>
<p align="center">
<img src="https://github.com/atanastalos/styledComponentsWithRedux/blob/main/readme_assets/datepicker.png" alt="datepicker" height="400"/>
</p>
<p align="justify">Datepicker created with React Datepicker, customizing through parameters and Styled Components.</p>

```
<Label htmlFor="label">
        Date of birth:
        <StyledDatePicker>
          <DatePicker
              dateFormat="yyyy/MM/dd"
              selected={dateOfBirth}
              onChange={date =>
                  setDateOfBirth(date)}/>
        </StyledDatePicker>
</Label>
```

```
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
`;
```

<h2>Validator</h2>
<p align="center">
<img src="https://github.com/atanastalos/styledComponentsWithRedux/blob/main/readme_assets/error1.png" alt="emptyField" height="400"/><img src="https://github.com/atanastalos/styledComponentsWithRedux/blob/main/readme_assets/error2.png" alt="emptyField" height="400"/>
</p>
<p align="justify">Validator checks error cases. If everything is okey, you'll be redirected to your summerized data.</p>

```
function submitRegister(event) {
    event.preventDefault();
    let error = '';
    if (username === '' || !dateOfBirth || email === '') {
        error = 'Every field is required!';
    } else if (!email.includes('@')) {
        error = 'Invalid email!';
    }
    if (error === '') {
        setRedirect(true);
        dispatch(Register(username, dateOfBirth, email));
    } else {
        setError(error);
    }
}
```
<p align="center">
<img src="https://github.com/atanastalos/styledComponentsWithRedux/blob/main/readme_assets/data.png" alt="data" height="300"/>
</p>
<h2>Project setup</h2>

```
npm install
npm start
```

<h2 align="center">Thank you for reading! :wave:</h2>
