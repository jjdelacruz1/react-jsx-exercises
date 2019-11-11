let TextInput = () => {
    return <div><label>Enter a Name (Min 4 characters)</label><input type="text" minLength="4" size="10"></input><br></br><label>Enter an email (Min 4 characters)</label><input type="email" minLength="4" size="10"></input><br></br><label>Enter a Password (Min 4 characters)</label><input type="password" minLength="4" size="10"></input></div>
    
}

let YesNoRadio = () => {
    return <div><p>Would you like to keep coding?</p>
    <div className="d-flex flex-row">
      <div>
        <input type="radio" value="yes"></input><label>YES</label>
      </div>
      <div>
        <input type="radio" value="no"></input><label>NO</label>
      </div>
    </div>
    </div>
    // <span>Make this component render two styled radio button side by side labelled "yes" and "no"</span>
}

let SubmitButton = () => {
    return <div><button type="button" className="btn btn-primary">Submit</button></div>
    // <span>Make this component render a styled button of type "submit"</span>
}

let Form = () => {
    return <div><TextInput /><br></br>
    <YesNoRadio /><br></br>
    <SubmitButton /></div>
    
    // <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
}


ReactDOM.render(<Form />, document.getElementById('root'))