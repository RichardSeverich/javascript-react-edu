import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

//Components
import Content from './components/content/Content';
// Data
import { users } from './mock-data/users.json';
import { courses } from './mock-data/courses.json';

// Context
import { Provider } from './Context'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: users,
            courses: courses,
            updateUsers: (updatedUsers) => {this.setState({users: updatedUsers})}
        };
    };
    static propTypes = {
        children: PropTypes.object.isRequired
    };
    render() {
        const { children } = this.props;    
        return (
            <Provider value={this.state}>
                <div className="App">
                    <Content body={children}></Content>
                </div>
            </Provider>
        );
    }
}

export default App;
