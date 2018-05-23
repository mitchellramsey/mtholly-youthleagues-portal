// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";


// Component
import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";
import MainHeader from "../../components/MainHeader";
import CreatePracticeForm from "../../components/createPracticeForm";
import { DeleteBtn } from "../../components/List";

// Actions
import { addFlashMessage } from "../../actions/flashMessages";
import { createPracticePost, getPractice, deletePractice } from "../../actions/practicePost";
import API from "../../actions/API";

// CSS
import "./coachespage.css";

// ----------------------------------------------------------------------------------- //
// Creating the Parent Page
class CoachPortal extends Component {

    constructor() {
        super();
        this.state = {
            createPracticeForm: false,
            showTeam: false,
            showSchedule: false,
            showPractice: false,
            practices: [],
            team_association: [],
            schedules: []
        }       
    }

    // Update state after data is called
    componentDidMount() {
        this.retrieveTeams(this.props.auth.user.id);
        this.retrievePractices(this.props.auth.user.id);
        this.retrieveSchedules(this.props.auth.user.id);
    }


    
    // Axios request to get the coaches Id and practices
    retrievePractices = practiceData =>  {
        this.props.getPractice(practiceData)
            .then(res => this.setState({ practices: res.data }))
                // Handle errors
                .catch(err => console.log(err));

    }

    // Retrieve teams for form dropdown
    retrieveTeams = id => {
        API.findTeams(id)
            .then(res => this.setState({ team_association: res.data }))
                // Handle errors
                .catch(err =>console.log(err));

    }

    // Retrieve teams with associated coaches
    retrieveSchedules = (TeamId) => {
        API.findSchedules(TeamId)
            .then(res => this.setState({ schedules: res.data }))
                // Handle errors
                .catch(err => console.log(err));
    }

    // Delete practices
    deleteCoachPractices = id => {
        this.props.deletePractice(id)
            .then(res => this.retrievePractices(this.props.auth.user.id))
                // Handle errors
                .catch(err => console.log(err));
    }


    // Toggle create practice form
    togglePracticeForm () {
        this.setState({
            createPracticeForm: !this.state.createPracticeForm,
            showPractice: false,
            showTeam: false,
            showSchedule: false
        });
    }

    // Toggle practice div
    togglePracticeDiv () {
        this.setState({
            showPractice: !this.state.showPractice,
            createPracticeForm: false,
            showTeam: false,
            showSchedule: false
        });
    }

    // Toggle team div
    toggleTeamDiv () {
        this.setState({
            showTeam: !this.state.showTeam,
            createPracticeForm: false,
            showPractice: false,
            showSchedule: false,
        })
    }

    // Toggle team div
    toggleScheduleDiv () {
        this.setState({
            showSchedule: !this.state.showSchedule,
            createPracticeForm: false,
            showPractice: false,
            showTeam: false
        })
    }

    

    // Render the page
    render() {
        const { addFlashMessage, createPracticePost } = this.props; 

        return (
            <div className="container-fluid">
            <Nav/>
                <div className="row">
                    <div className="col-md-6 form">
                        <MainHeader />
                        <FlashMessageList />
                        {/* Buttons to render certain data */}
                        <div className="button-div text-center">

                        <h3 className="dashboard-title">Coach Dashboard</h3>
                        <hr className="line"></hr>

                            <ul className="mx-auto">
                                <li><button className="btn btn-primary form-btn button-actions" onClick={() => this.togglePracticeForm()}>Create Practices</button></li>
                                <li><button className="btn btn-primary form-btn button-actions" onClick={() => this.toggleTeamDiv()}>Assigned Teams</button></li>
                                <li><button className="btn btn-primary form-btn button-actions" onClick={() => this.togglePracticeDiv()}>Show Practices</button></li>
                                <li><button className="btn btn-primary form-btn button-actions" onClick={() => this.toggleScheduleDiv()}>Show Team Schedule</button></li>
                            </ul>
                        </div> 

                        {/* Toggle Forms */}
                        { this.state.createPracticeForm ?  
                        // Create Practice Form
                        <CreatePracticeForm 
                            createPracticePost={createPracticePost}
                            addFlashMessage={addFlashMessage}
                            coachId={this.props.auth.user.id}
                            retrievePractices={this.retrievePractices}
                            team_association={this.state.team_association}
                            teamId={this.props.teamId}
                        />
                        // If not toggled to true, hide the form
                            :null
                        }

                        {/*  --------------------------------------------------- */}

                        {/* Show schedule div */}
                        { this.state.showPractice ? 
                            <div className="coachDataDiv col-md-8 mx-auto">
                                <div className="row text-center">
                                    <div className="col-md-3">
                                            <span className="data-header">Date</span>
                                        </div>
                                        <div className="col-md-2">
                                            <span className="data-header">Time</span>
                                        </div>
                                        <div className="col-md-3">
                                            <span className="data-header">Location</span>
                                        </div>
                                        <div className="col-md-3">
                                            <span className="data-header">Association</span>
                                        </div>
                                        <div className="col-md-1">
                                            <span className="data-header">X</span>
                                        </div>
                                    </div>
                                 
                                    {this.state.practices.map(practice => (
                                            <ul className="coachDataId" key={practice.id}>
                                                    <div className="col-md-3 coachListItem">
                                                            <li className="dateTime">{moment(practice.date, "YYYY-MM-DDTHH:mm:ss.SSS").format("MM/DD/YY")}</li>
                                                    </div>
                                                    <div className="col-md-2 coachListItem">
                                                            <li className="dateTime">{moment(practice.time, "HH:mm:ss").format("hh:MM p")}</li>
                                                    </div>
                                                    <div className="col-md-3 coachListItem">
                                                            <li className="dateTime">{practice.location}</li>
                                                    </div>
                                                    <div className="col-md-3 coachListItem">
                                                            <li className="dateTime">{practice.Team.teamName}</li>
                                                    </div> 
                                                    <div className="col-md-1 coachListItem">
                                                            <DeleteBtn onClick={() => this.deleteCoachPractices(practice.teamid)}/>
                                                    </div> 
                                                    <hr className="line"></hr>
                                            </ul>
                                    ))}
                                
                            </div>
                        // If not toggled to true, hide the form
                            :null
                        }
                        {/*  --------------------------------------------------- */}

                        {/* Show teams div */}
                        { this.state.showTeam ? 
                            <div className="coachDataDiv col-md-4 mx-auto">
                                <div className="row text-center">
                                    <div className="col-md-12">
                                            <span className="data-header">Team Name</span>
                                        </div>
                                    </div>

                                    {this.state.team_association.map(team => (
                                            <ul className="coachDataId" key={team.id}>
                                                    <div className="col-md-4 coachListItem">
                                                            <li className="dateTime">Id: {team.id}</li>
                                                    </div>
                                                    <div className="col-md-8 coachListItem">
                                                            <li className="dateTime">{team.teamName}</li>
                                                    </div> 
                                                    <hr className="line"></hr>
                                            </ul>
                                    ))}
                            </div>
                            // If not toggled to true, hide the form
                            :null
                        }

                         {/*  --------------------------------------------------- */}

                        {/* Show schedule div */}
                        { this.state.showSchedule ? 
                            <div className="coachDataDiv col-md-8 mx-auto">
                                <div className="row text-center">
                                    <div className="col-md-3">
                                            <span className="data-header">Date</span>
                                        </div>
                                        <div className="col-md-2">
                                            <span className="data-header">Time</span>
                                        </div>
                                        <div className="col-md-3">
                                            <span className="data-header">Location</span>
                                        </div>
                                        <div className="col-md-3">
                                            <span className="data-header">Opponent</span>
                                        </div>
                                    </div>
                                 
                                    {this.state.schedules.map(games => (
                                            <ul className="coachDataId" key={games.id}>
                                                    <div className="col-md-3 coachListItem">
                                                            <li className="dateTime">{moment(games.date, "YYYY-MM-DDTHH:mm:ss.SSS").format("MM/DD/YY")}</li>
                                                    </div>
                                                    <div className="col-md-2 coachListItem">
                                                            <li className="dateTime">{moment(games.time, "HH:mm:ss").format("hh:MM p")}</li>
                                                    </div>
                                                    <div className="col-md-3 coachListItem">
                                                            <li className="dateTime">{games.location}</li>
                                                    </div>
                                                    <div className="col-md-3 coachListItem">
                                                            <li className="dateTime">{games.opponent}</li>
                                                    </div> 
                                                    <hr className="line"></hr>
                                            </ul>
                                    ))}
                                
                            </div>
                        // If not toggled to true, hide the form
                            :null
                        }

                    {/* End col-md-6 */}
                    </div>

                    <div className="col-md-6 form">
                        <div className="landing-bg">
                        {/*  */}
                        </div>
                    </div>
                {/* End row */}
                </div>
                <Footer/>
            {/* End container */}
            </div>
        );
    }
};

// ----------------------------------------------------------------------------------- //
// Setting propTypes
CoachPortal.propTypes = {
    addFlashMessage: PropTypes.func.isRequired,
    createPracticePost: PropTypes.func.isRequired,
    getPractice: PropTypes.func.isRequired,
    deletePractice: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}


function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

// Exporting the page, and connecting the props with redux
export default connect(mapStateToProps, { addFlashMessage, createPracticePost, getPractice, deletePractice })(CoachPortal);