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

// Validation
import "../../Shared/Validations/league";


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
        players: [],
        playerId: "",
        playerTeam: "",
        coachId: "",
        coachTeam: ""
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
  this.getChildren(this.state.sport);
  this.getCoaches(this.state.sport);
  this.getTeams(this.state.sport);
  this.setState({
    assignPeople: !this.state.assignPeople,
    optionDisabled: true
});
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

  getChildren = (sportId) => {
    API.findKids(sportId)
      .then(result => {
        console.log(result.data);
        this.setState({ players: result.data })})
      .catch(err => console.log(err));
  }

  getCoaches = (sportId) => {
    API.findCoaches(sportId)
      .then(results => {
        this.setState({ coaches: results.data })})
      .catch(err => console.log(err));
  }

  getTeams = (sportId) => {
    API.findTeams(sportId)
      .then(res => this.setState({ teams: res.data }))
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
handleAssignPlayer = event => {
  // Preventing default form behavior
  event.preventDefault();
  // If state is valid, perform the AJAX request
      const data = {
        playerId: this.state.playerId,
        teamId: this.state.playerTeam
      }
      API.assignPlayer(data).then(
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
handleAssignCoach = event => {
  // Preventing default form behavior
  event.preventDefault();
  // If state is valid, perform the AJAX request
      const data = {
        coachId: this.state.coachId,
        teamId: this.state.coachTeam
      }
      API.assignCoach(data).then(
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
              <button className="btn btn-primary createSport button-actions" onClick={() => this.toggleCreateSport()}>Create Sport</button>
              
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
                  ? <form className="form text-center adminSportInput mx-auto child-form" onSubmit={this.handleTeamCreate}>
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
                        <button className="btn btn-primary form-btn button-actions" disabled={this.state.isLoading}>Submit</button>
                    </form>                      
                  : null
               }

               {
                this.state.assignPeople
                  ? <div className="assignTeams">
                      <form className="form text-center assignPlayers mx-auto child-form" onSubmit={this.handleAssignPlayer}>
                        <h3>Assign Players</h3>
                        <select
                          className="adminSportInput form-control" 
                          name="playerId" 
                          onChange={this.handleInputChange}
                          value={this.state.playerId}
                        >
                          <option value="">Player</option>
                          {this.state.players.map(player => (
                          <option value={player.id} key={player.id}>{player.first_name} {player.last_name}</option>
                          ))}
                        </select>
                        <select
                          className="adminSportInput form-control" 
                          name="playerTeam" 
                          onChange={this.handleInputChange}
                          value={this.state.playerTeam}
                        >
                          <option value="">Team</option>
                          {this.state.teams.map(team => (
                          <option value={team.id} key={team.id}>{team.teamName}</option>
                          ))}
                        </select>
                        <button className="btn btn-primary form-btn mx-auto button-actions" disabled={this.state.isLoading}>Submit</button>
                      </form>
                    <div className="assignCoaches">
                        <form className="form text-center assignCoaches mx-auto child-form" onSubmit={this.handleAssignCoach}>
                          <h3>Assign Coaches</h3>
                          <select
                            className="adminSportInput form-control" 
                            name="coachId" 
                            onChange={this.handleInputChange}
                            value={this.state.coachId}
                          >
                            <option value="">Coach</option>
                            {this.state.coaches.map(coach => (
                            <option value={coach.id} key={coach.id}>{coach.first_name} {coach.last_name}</option>
                            ))}
                          </select>
                          <select
                            className="adminSportInput form-control" 
                            name="coachTeam" 
                            onChange={this.handleInputChange}
                            value={this.state.coachTeam}
                          >
                            <option value="">Team</option>
                            {this.state.teams.map(team => (
                            <option value={team.id} key={team.id}>{team.teamName}</option>
                            ))}
                          </select>
                          <button className="btn btn-primary form-btn mx-auto button-actions" disabled={this.state.isLoading}>Submit</button>
                        </form>
                    </div>
                    
                    </div>                      
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