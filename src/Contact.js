import React, { Component } from "react";
import "./App.css";
import LocationIcon from "@material-ui/icons/LocationCity";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      messagec: "",
      hasSubmitted: false,
    };
  }

  // onChangeHandler = (event) => {
  //   this.setState({
  //     ...this.state,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  render() {
    return (
      <div className="container md-4">
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>

          <p className="text-center w-responsive mx-auto mb-5 font">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form
                className="contactinput"
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        // value={this.state.name}
                        // onChange={this.onChangeHandler}
                      />
                      <label for="name">Your name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        // value={this.state.email}
                        // onChange={this.onChangeHandler}
                      />
                      <label for="email">Your email</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        // value={this.state.subject}
                        // onChange={this.onChangeHandler}
                      />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="messagec"
                        rows="2"
                        className="form-control md-textarea"
                        style={{ color: "black" }}
                        // value={this.state.messagec}
                        // onChange={this.onChangeHandler}
                      ></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left">
                <a
                  style={{ backgroundColor: "orange" }}
                  // onClick={this.sendData}
                  className="btn btnc"
                  id="contactbtn"
                  type="submit"
                >
                  Send
                </a>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              {/* <i className="fas fa-map-marker-alt fa-2x"></i> */}
              <LocationIcon />
              <p>Textricks Pvt. Ltd.</p>

              {/* <i className="fas fa-phone mt-4 fa-2x"></i> */}
              <PhoneIcon />
              <p>+ 01 234 567 89</p>

              {/* <i className="fas fa-envelope mt-4 fa-2x"></i> */}
              <MailIcon />
              <p>hr@textricks.com</p>
            </div>
          </div>
        </section>
        <div>
          {/* {this.state.hasSubmitted
            ? alert(
                "Thank you for reaching to us! Our team will shortly get back to you."
              )
            : null} */}
        </div>
      </div>
    );
  }
}

export default Contact;
