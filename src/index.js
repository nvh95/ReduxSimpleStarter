import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAUHF8UwzBkFBIyQlqWUaxWGjzL5aqdoho';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { videos: []};

        YTSearch({key: API_KEY, term: 'nigahiga'}, (videos) => {
            this.setState({videos})
        })
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
            );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));