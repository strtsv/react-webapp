import React from "react";
import bar from "../../assets/images/bar/bar.png";

class ContactArea extends React.Component {
  render() {
    return (
      <div className="witr_contact_area">
        <div className="witr_contact_show">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="witr_section_title text-center">
                  <div className="witr_sec_title_inner">
                    <h6>Contact</h6>
                    <img src={bar} alt="fward" />
                    <h2> Request a Call Now To </h2>
                    <h2>Get Free Business</h2>
                  </div>
                </div>
                {}
                <div className="witr_contact_form">
                  <form action="#">
                    <div className="witr_contact_form_inner">
                      <div className="witr_form_filed">
                        <div className="witr_form_filed_inner ss_100">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="witr_form_filed">
                        <div className="witr_form_filed_inner">
                          <input
                            type="number"
                            name="phone"
                            placeholder="Your Phone"
                          />
                        </div>
                        <div className="witr_form_filed_inner">
                          <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                    </div>
                    {}
                    <div className="witr_contact_button">
                      <button name="submit">Send Request</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactArea;
