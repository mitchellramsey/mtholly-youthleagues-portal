// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Component
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import MainHeader from "../../components/MainHeader/MainHeader";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";
import TextFieldGroup from "../../components/TextFieldGroup";

// Actions
import { addFlashMessage } from "../../actions/flashMessages";
import API from "../../actions/API";

// CSS
import "./AdminPortal.css";


// ----------------------------------------------------------------------------------- //
// Creating the Admin Page

class AdminPortal extends Component {

    constructor() {
      super();
      
      this.state = {
        optionDisabled: false,
        showMenu: false,
        createSport: false,
        createTeam: false,
        assignPeople: false,
        createSchedule: false,
        name: "",
        sports: [],
        isLoading: false,
        sport: "",
        teamName: "",
        teams: [],
        coaches: [],
        players: []
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      
    }

    //Calling for Sport API
    componentDidMount() {
      this.getSports();
  }
    // Toggle create sport form
    toggleCreateSport () {
      this.setState({
          createSport: !this.state.createSport
      });
  }

  // Toggle create sport form
  createTeam () {
    this.setState({
        createTeam: !this.state.createTeam,
        optionDisabled: true
    });
}

assignPeople () {
  API.findKids(this.state.sport)
    .then(res => this.setState({ players: res.data}))
  API.findCoaches(this.state.sport)
     .then(res => this.setState({ coaches: res.data, assignPeople: !this.state.assignPeople, optionDisabled: true}))
     .catch(err => console.log(err));
}

  // Capturing form input
  handleInputChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
};

  getSports = () => {
    API.getSports()
      .then(res => this.setState({ sports: res.data }))
      .catch(err => console.log(err));
  }

  showMenu () {
    this.setState({
      optionDisabled: true,
      showMenu: true
    })
  }

  resetMenu () {
    this.setState({
      optionDisabled: false,
      showMenu: false,
      createTeam: false,
      assignPeople: false,
      createSchedule: false
    })
  }



  


// On form submit
handleSportCreate = event => {
    // Preventing default form behavior
    event.preventDefault();
    // If state is valid, perform the AJAX request
        API.addSport(this.state.name).then(
            // Then, redirect
            () => {
                window.location.reload(); 
            },
            // Setting errors
            (res) => this.getSports(),
            (err) => this.setState({ errors: err.response.data, isLoading: false })            
        );
}

// On form submit
handleTeamCreate = event => {
  // Preventing default form behavior
  event.preventDefault();
  // If state is valid, perform the AJAX request
      const teamData = {
        sportID: this.state.sport,
        teamName: this.state.teamName
      }
      API.createTeam(teamData).then(
          // Then, redirect
          () => {
              window.location.reload(); 
          },
          // Setting errors
          (res) => this.getSports(),
          (err) => this.setState({ errors: err.response.data, isLoading: false })            
      );
}

  // Render the page
  render() {
    const { addFlashMessage } = this.props;

    return (
      <div className="container-fluid">
        <Nav />
        <div className="row">
          <div className="col-md-6 form">
            <FlashMessageList />
            <MainHeader />
            <div className="createSportSection">
              <button className="btn btn-primary createSport button-actions " onClick={() => this.toggleCreateSport()}>Create Sport</button>
              
              {
                this.state.createSport
                  ? <form className="form text-center" onSubmit={this.handleSportCreate}>
                        <TextFieldGroup
                          onChange={this.handleInputChange}
                          errors={this.name}
                          label="Create League"
                          type="text"
                          field="name"
                          className="form-control"
                          value={this.state.name}
                          placeholder="Sport"
                          />
                        <button className="btn btn-primary form-btn mx-auto" disabled={this.state.isLoading}>Submit</button>
                    </form>                      
                  : null
               }
               
            </div>
            <hr/>
            <div className="showMenuSection">
              <select
                className="adminSportInput form-control" 
                name="sport" 
                onChange={this.handleInputChange}
                value={this.state.sport}
                disabled={this.state.optionDisabled}
                >
                <option value="">Sport</option>
                {this.state.sports.map(sport => (
                <option value={sport.id} key={sport.id}>{sport.name}</option>
                ))}
                </select>
              {this.state.sport ?
                <div className="menuOptions">
                  <button className="btn btn-primary adminMenu button-actions " onClick={() => this.createTeam()} disabled={this.state.optionDisabled}>Create Team</button>
                  <button className="btn btn-primary adminMenu button-actions " onClick={() => this.assignPeople()} disabled={this.state.optionDisabled}>Assign Players/Coaches</button>
                  <button className="btn btn-primary adminMenu button-actions " onClick={() => this.createSchedule()} disabled={this.state.optionDisabled}>Create Game Schedule</button>
                  <button className="btn btn-primary adminMenu button-actions " onClick={() => this.resetMenu()}>Reset</button>
                </div>
              : null}

            </div>

          </div>

          <div className="col-md-6 form">
            <div className="landing-bg">
            {
                this.state.createTeam
                  ? <form className="form text-center" onSubmit={this.handleTeamCreate}>
                        <TextFieldGroup
                          onChange={this.handleInputChange}
                          errors={this.name}
                          label="Create Team"
                          type="text"
                          field="teamName"
                          className="form-control"
                          value={this.state.teamName}
                          placeholder="Team Name"
                          />
                        <button className="btn btn-primary form-btn mx-auto" disabled={this.state.isLoading}>Submit</button>
                    </form>                      
                  : null
               }

               {
                this.state.assignPeople
                  ? <div>Test</div>                      
                  : null
               }
            </div>
          </div>
        </div>

        
      </div>
    );
  }
};

// ----------------------------------------------------------------------------------- //
// Setting propTypes
AdminPortal.propTypes = {
  addFlashMessage: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

// Exporting the page, and connecting the props with redux
export default connect(mapStateToProps, { addFlashMessage })(AdminPortal);