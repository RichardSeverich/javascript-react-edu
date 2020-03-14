import React, { Component } from "react";
import PropTypes from "prop-types";
//Components
import Content from "./components/content/Content";
// Context
import { Provider } from "./Context";
// Mock Data
import { users } from "./mock-data/users.json";
import { courses } from "./mock-data/courses.json";
import { modules } from "./mock-data/modules.json";
import { coursesUsers } from "./mock-data/courses-users.json";
import { coursesModules } from "./mock-data/courses-modules.json";
import { scores } from "./mock-data/scores.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: users,
      courses: courses,
      modules: modules,
      coursesUsers: coursesUsers,
      coursesModules: coursesModules,
      scores: scores,
      updateUsers: updatedUsers => {
        this.setState({ users: updatedUsers });
      },
      updateCourses: updateCourses => {
        this.setState({ courses: updateCourses });
      },
      updateModules: updateModules => {
        this.setState({ modules: updateModules });
      },
      updateCourseUsers: updateCourseUsers => {
        this.setState({ coursesUsers: updateCourseUsers });
      },
      updateCourseModules: updateCourseModules => {
        this.setState({ coursesModules: updateCourseModules });
      },
      updateScores: updateScores => {
        this.setState({ scores: updateScores });
      }
    };
  }
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
