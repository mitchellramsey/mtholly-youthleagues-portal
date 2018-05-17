// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Component
import Nav from "../../components/Nav/Nav";
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
        showMenu: false,
        createSport: false,
        name: "",
        sports: []
      }
    }

    //Calling for Sport API
    componentDidMount() {
      this.getSports();
  }
    // Toggle create sport form
    toggleCreateSport () {
      console.log(this);
      this.setState({
          createSport: !this.state.createSport
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


// On form submit
handleSportCreate = event => {
    // Preventing default form behavior
    event.preventDefault();

    // If state is valid, perform the AJAX request
   
        API.createSport(this.state.name).then(
            // Then, redirect
            () => {
                this.props.history.push("/adminportal") 
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
              <button className="btn btn-success createSport" onClick={() => this.toggleCreateSport()}>Create Sport</button>
              
              {
                this.state.createSport
                  ? <form className="form text-center" onSubmit={this.handleSportCreate}>
                        <TextFieldGroup
                          onChange={this.handleInputChange}
                          errors={this.name}
                          label="Create Sport"
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

          </div>

          <div className="col-md-6 form">
            <div className="landing-bg">
              {/*  */}
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