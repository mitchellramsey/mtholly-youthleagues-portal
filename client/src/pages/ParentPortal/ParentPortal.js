// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PayPal from "../../PayPal/PayPal";

// Component
import Nav from "../../components/Nav";
import Footer from "../../components/Footer/Footer";
import FlashMessageList from "../../components/FlashMessageList/FlashMessageList";
import MainHeader from "../../components/MainHeader";
import CreateChildForm from "../../components/CreateChildForm";
import { DeleteBtn } from "../../components/List";

// Actions
import { childSignUp } from "../../actions/registerChild";
import { addFlashMessage } from "../../actions/flashMessages";
import API  from "../../actions/API";

// CSS
import "./ParentPortal.css";

// ----------------------------------------------------------------------------------- //
// Creating the Parent Page
class ParentPortal extends Component {
    constructor() {
        super();
        this.state = {
            showChildForm: false,
            kids: [],
            sports: []
        }

    }

    componentDidMount() {
        this.getChildren(this.props.auth.user.id);
        this.getSports();
    }

    getChildren = (parentId) => {
        API.retrieveChildren(parentId)
          .then(res => this.setState({ kids: res.data }))
          .catch(err => console.log(err));
    }

    removeChild = (kidId) => {
        API.removeChild(kidId)
            .then(res => this.getChildren(this.props.auth.user.id))
            .catch(err => console.log(err));
    }

    getSports = () => {
        API.getSports()
          .then(res => this.setState({ sports: res.data }))
          .catch(err => console.log(err));
      }
    

    // Toggle child form on click
    toggleChildForm () {
        console.log(this);
        this.setState({
            showChildForm: !this.state.showChildForm
        });
    }

    // Render the page
    render() {
        const { childSignUp, addFlashMessage} = this.props; 

        return (
            <div className="container-fluid">
            <Nav/>
                <div className="row">
                    <div className="col-md-6 form">
                    <FlashMessageList />
                    <MainHeader />
                    <div className="text-center">
                        <h1 className="dashboard-title">Parent Dashboard</h1>
                        <button className="btn btn-primary register button-actions" onClick={() => this.toggleChildForm()}>Register Child</button>
                    </div>
                    <div className="payPal">{PayPal}</div>
                    <div className="childList">
                        <h3>Registered Children</h3>
                        {this.state.kids.length ? (
                            <div className="coachDataDiv col-md-10 mr-auto">
                                <div className="row text-center">
                                        <div className="col-md-3">
                                            <span className="data-header">First Name</span>
                                        </div>
                                        <div className="col-md-3">
                                            <span className="data-header">Last Name</span>
                                        </div>
                                        <div className="col-md-2">
                                            <span className="data-header">Age</span>
                                        </div>
                                        <div className="col-md-3">
                                            <span className="data-header">Sport</span>
                                        </div>
                                        <div className="col-md-1">
                                            <span className="data-header">X</span>
                                        </div>
                                    </div>
                                
                                    {this.state.kids.map(kid => (
                                        <ul className="coachDataId" key={kid.id}>
                                            <div className="col-md-3 coachListItem">
                                                <li className="dateTime">{kid.first_name}</li>
                                            </div>
                                            <div className="col-md-3 coachListItem">
                                                <li className="dateTime">{kid.last_name}</li>
                                            </div>
                                            <div className="col-md-2 coachListItem kid-num-col">
                                                <li className="dateTime">{kid.age}</li>
                                            </div>
                                            <div className="col-md-3 coachListItem">
                                                <li className="dateTime">{kid.Sport.name}</li>
                                            </div><div className="col-md-1 coachListItem">
                                                <DeleteBtn onClick={() => this.removeChild(kid.id)}/>
                                            </div>
                                        </ul>
                                    ))}
                                
                                </div>
                            ) : (
                                <h3>No Children Registered</h3>
                            )}
                        </div>
                       
                        
                    </div>

                    <div className="col-md-6 form">
                        <div className="landing-bg">
                            {
                                this.state.showChildForm
                                    ? <CreateChildForm 
                                        childSignUp={childSignUp}
                                        addFlashMessage={addFlashMessage}
                                        userId={this.props.auth.user.id}
                                        sports={this.state.sports}
                                    />
                                    : null
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
};

// ----------------------------------------------------------------------------------- //
// Setting propTypes
ParentPortal.propTypes = {
    childSignUp: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
   
}


function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

// Exporting the page, and connecting the props with redux
export default connect(mapStateToProps, { childSignUp, addFlashMessage })(ParentPortal);
