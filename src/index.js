import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from 'search_bar';

const API_KEY = 'AIzaSyAUHF8UwzBkFBIyQlqWUaxWGjzL5aqdoho';

// Create a new component. This should produce some HTML
const App =  () => {
    return <div>Hi!</div>
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));