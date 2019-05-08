import React, { Component } from 'react';
import "../../node_modules/animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
          <ScrollAnimation animateIn="slideInUp">
            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="markhays" />

            </div>
         </ScrollAnimation>
            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               {/* <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div> */}
            </div>
         </div>
      </section>
    );
  }
}