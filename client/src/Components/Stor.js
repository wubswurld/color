import React, { Component } from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import PaypalBtn from "react-paypal-checkout";
import ControlledMonthSelect from "./Checkout/MonthSelect";
import ControlledquanSelect from "./Checkout/quanselect";
import ControlledOpenSelect from "./Checkout/select";
import ControlledOpenSelect2 from "./Checkout/select2";
import Icon from "./svg";

class Stor extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
      jogcolor: "",
      jogquan: "",
      quantity: ""
    };
  }
  handleQuanChange = event => {
    this.setState({ quantity: event.target.value });
  };
  handlejogQuanChange = event => {
    this.setState({ jogquan: event.target.value });
  };
  handleChange = event => {
    this.setState({ color: event.target.value });
  };
  handleJogChange = event => {
    this.setState({ jogcolor: event.target.value });
  };
  render() {
    const onSuccess = payment => {
      console.log("The payment was succeeded!", payment);
    };
    const onCancel = data => {
      console.log("The payment was cancelled!", data);
    };
    const onError = err => {
      console.log("Error!", err);
    };
    let env = "production";
    let currency = "USD";
    let price = 55.0;
    let jogprice = 40.0;
    let total = price * this.state.quantity;
    let joggertotal = jogprice * this.state.jogquan;
    let locale = "en_US";
    let style = {
      label: "pay",
      tagline: false,
      size: "small",
      shape: "rect",
      color: "blue"
    };
    const paypalClient = {
      production:
        "AXMJXPugcgJd4_OYrDHA9DwuuE7h4nXtRpH9oUil67mEwoClToQLrzJ3UpNoGHuXMmSH79ZvDeKX3L_3"
    };
    console.log(this.state.quantity);
    return (
      <div id="contain">
        <div id="navbar">
          <Link className="hvr-grow" id="logo" to="/">
            <Icon id="icon"></Icon>
          </Link>
          <div>
            <div className="container2">
              <div className="left-column">
                <Carousel
                  showIndicators={false}
                  showArrows={true}
                  dynamicHeight={true}
                  showThumbs={false}
                  showStatus={false}
                  autoPlay={true}
                  className="carosal"
                >
                  <div>
                    <img src="DSC00847.jpg" id="img3"></img>
                  </div>
                  <div>
                    <img id="img3" src="DSC00842.jpg"></img>
                  </div>
                </Carousel>
              </div>
              <div className="right-column">
                <div className="product-description">
                  <span>Hoodies</span>
                  <h3>Color. Hoodie</h3>
                  <h3 id="fucku">
                    Available in 3 colors | Embroidered | 40 USD{" "}
                  </h3>
                  <div>
                    <ControlledOpenSelect
                      value={this.state.color}
                      controlChange={this.handleChange}
                    ></ControlledOpenSelect>
                  </div>
                  <div>
                    <ControlledMonthSelect
                      Quantity={this.state.quantity}
                      controlQuanChange={this.handleQuanChange}
                      id="month"
                    ></ControlledMonthSelect>
                  </div>
                </div>
                <div className="pricing">
                  <PaypalBtn
                    id="pp"
                    client={paypalClient}
                    currency={"USD"}
                    total={total}
                    env={env}
                    style={style}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container3">
            <div className="left-column">
              <Carousel
                showIndicators={false}
                dynamicHeight={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                className="carosal"
              >
                <div>
                  <img id="img3" src="img1.png"></img>
                </div>
                <div>
                  <img id="img3" src="img2.png"></img>
                </div>
              </Carousel>
            </div>
            <div className="right-column">
              <div className="product-description">
                <span>Joggers</span>
                <h3>Color. Jogger Pant</h3>
                <h3 id="fucku">Available in 2 colors | Embroidered</h3>
                <div>
                  <ControlledOpenSelect2
                    value={this.state.jogcolor}
                    controlChange={this.handleJogChange}
                  ></ControlledOpenSelect2>
                </div>
                <div>
                  <ControlledquanSelect
                    Quantity={this.state.jogquan}
                    controlQuanChange={this.handlejogQuanChange}
                    id="month"
                  ></ControlledquanSelect>
                </div>
              </div>
              <div className="pricing">
                <PaypalBtn
                  id="pp"
                  client={paypalClient}
                  currency={"USD"}
                  total={joggertotal}
                  env={env}
                  style={style}
                  onError={onError}
                  onSuccess={onSuccess}
                  onCancel={onCancel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Stor;
