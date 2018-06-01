// Imports
import React from "react";
import { Component } from "react";
import { Link } from "react";

// Css
import "../Nav/nav.css";

//------------------------------------------------------------------------------
// Creating the Footer
class Footer extends Component {
    // Render the footer
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <span className="resources">Resources</span>
                            <br />
                            <Link to="http://www.biomechaniks.com/training_page/youth-athletic-development">Bio Mechaniks Sports Training</Link>
                            <br />
                            <Link to="http://www.mycoreathletics.com/">Core Athletics</Link>
                            <br />
                            <Link to="http://www.mthollyoptimist.com/Default.aspx?tabid=479740&mid=502447&newskeyid=HN1&newsid=40118267&ctl=newsdetail">$10 Sport Physicals</Link>
                            <br />
                            <Link to="https://www.medexpress.com/services-and-treatment/sports-school-physicals.html">Low Cost Sport Physicals</Link>
                            <br />
                        </div>

                        <div className="col-md-4 text-center">
                            <span className="resources">Quick Links</span>
                            <br />
                            <Link to="http://www.mtholly.us/">City of Mount Holly</Link>
                            <br />
                            <Link to="http://www.gastongov.com/">Gaston County</Link>
                            <br />
                            <Link to="http://www.mtholly.us/parks_recreation.php?Parks-Recreation-1">Mt Holly Parks and Rec</Link>
                            <br/ >
                            
                        </div>
                        <div className="col-md-4 text-center">
                            <span className="resources">Docs</span>
                            <br></br>
                            <Link to="https://github.com/mramsey1992/mtholly-youthleagues-portal">Website Documentation</Link>
                            <br></br>
                        </div>

                    </div>
                </div>
            </div> 
        )
    }
};

export default Footer;

