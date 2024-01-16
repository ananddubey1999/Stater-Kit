import React from "react"
import { Row, Col, Button, Form } from "react-bootstrap"

import "./SecondPage.css"

const SecondPage = () => {
  return (
    <div className="bg-white">
      <Row style={{ maxWidth: "100%", margin: "0 auto" }}>
        <Col md="8" className="border ">
          {/* New column with a container */}
          <div className="d-flex flex-column ">
            <Row>
              <Col md="8">
                {/* Title and paragraph */}
                <div className="d-flex justify-content-start ">
                <h2 className="font-weight-bolder underline-title">
                  Go back to quots
                </h2>
              </div>
                <div className="d-flex justify-content-start">
                  <h4 className="font-weight-bolder">Max Saver 2.0</h4>
                </div>
                <div className="d-flex justify-content-start">
                  <div>
                    10 Lacs - ReAssure Bronze+90 Lacs - Health Recharge
                  </div>
                </div>

                {/* Two buttons */}
                <div className="d-flex justify-content-start  mt-3">
                  <button className="btn btn-primary">View all features</button>
                </div>
              </Col>

              {/* Second column */}
              <Col md="4" className="d-flex justify-content-center">
                {/* Image */}
                <img
                  src="https://tse3.mm.bing.net/th/id/OIP.4Ff0xGU9g63uTvS_AOtlQwAAAA?rs=1&pid=ImgDetMain"
                  alt="Image"
                  className="image-with-shadow"
                />
              </Col>
              <Col md="12">
                <div className="container-content2">
                  {/* Title and paragraph */}
                  <div className="d-flex justify-content-start">
                    <h4 className="font-weight-bolder">
                      Cover Amount - ₹1 Crore
                    </h4>
                  </div>
                  <div className="d-flex justify-content-start">
                    <div>
                      You get 1 Crore health cover at a very affordable price.
                      No catch and complete peace of mind.
                    </div>
                  </div>
                </div>

                <div className="container-content2">
                  {/* Title and paragraph */}
                  <div className="d-flex justify-content-start">
                    <h4 className="font-weight-bolder">Policy Period</h4>
                  </div>
                  <div className="d-flex justify-content-start">
                    <div>
                      Choosing a multi-year plan saves your money and the
                      trouble of remembering yearly renewals.
                    </div>
                  </div>

                  {/* Three checkboxes with paragraphs */}
                  <div className="d-flex flex-row mt-3  ">
                    <div className="d-flex align-items-center mb-2 ">
                      <input
                        type="checkbox"
                        id="checkbox1"
                        style={{
                          marginRight: "15px",
                          marginLeft: "25px",
                          transform: "scale(2.5)"
                        }}
                      />
                      <label htmlFor="checkbox1">1 Year @ Rs16,436</label>
                    </div>

                    <div className="d-flex align-items-center mb-2 ">
                      <input
                        type="checkbox"
                        id="checkbox2"
                        style={{
                          marginRight: "15px",
                          marginLeft: "25px",
                          transform: "scale(2.5)"
                        }}
                      />
                      <label htmlFor="checkbox2">1 Year @ Rs16,436</label>
                    </div>

                    <div className="d-flex align-items-center mb-2 ">
                      <input
                        type="checkbox"
                        id="checkbox3"
                        style={{
                          marginRight: "15px",
                          marginLeft: "25px",
                          transform: "scale(2.5)"
                        }}
                      />
                      <label htmlFor="checkbox3">1 Year @ Rs16,436</label>
                    </div>
                  </div>
                </div>

                <div className="container-content2">
                  {/* Title and paragraph */}
                  <div className="d-flex justify-content-start">
                    <h4 className="font-weight-bolder">Rider(s)</h4>
                  </div>
                  <div className="d-flex justify-content-start">
                    <div>
                      you should get these additional benefits to enhance your
                      current plan
                    </div>
                  </div>

                  {/* ---------------Inner Content start------------- */}
                  <div className="container-content1">
                    <div className="d-flex justify-content-start">
                      <div className="font-weight-bolder">
                        Safeguard Benefit
                      </div>
                    </div>
                    <div className="d-flex justify-content-start">
                      <div>
                        Helps in getting claims of non-payable items , no impact
                        on NCB if the claim is up to 50,000, and guarantee CPI
                        linked increase in Base SI.
                      </div>
                    </div>

                    <div className="d-flex flex-row mt-3 ">
                      <div className="d-flex align-items-center mb-2">
                        <button
                          className="btn btn-outline-primary"
                          style={{
                            marginRight: "15px",
                            marginLeft: "25px",
                            padding: "8px 12px",
                            fontSize: "16px"
                          }}
                        >
                          Rs 1150
                        </button>
                      </div>

                      <div className="d-flex align-items-center mb-2">
                        <button
                          className="btn btn-outline-primary"
                          style={{
                            marginRight: "15px",
                            marginLeft: "25px",
                            padding: "8px 12px",
                            fontSize: "16px"
                          }}
                        >
                          +Add
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="container-content1">
                    <div className="d-flex justify-content-start">
                      <div className="font-weight-bolder">
                        Safeguard<span style={{ fontSize: "30px" }}>+</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start">
                      <div>
                        <span
                          style={{ marginRight: "0.5em", fontSize: "1.5em" }}
                        >
                          •
                        </span>
                        Non-payable items will be covered(as per list
                        I,II,III,IV of Annexure I) <br />
                        <span
                          style={{ marginRight: "0.5em", fontSize: "1.5em" }}
                        >
                          •
                        </span>{" "}
                        No impact on Booster + if claim in a policy year is
                        le...
                      </div>
                    </div>
                    <div className="d-flex flex-row mt-3 ">
                      <div className="d-flex align-items-center mb-2">
                        <button
                          className="btn btn-outline-primary"
                          style={{
                            marginRight: "15px",
                            marginLeft: "25px",
                            padding: "8px 12px",
                            fontSize: "16px"
                          }}
                        >
                          Rs 1150
                        </button>
                      </div>

                      <div className="d-flex align-items-center mb-2">
                        <button
                          className="btn btn-outline-primary"
                          style={{
                            marginRight: "15px",
                            marginLeft: "25px",
                            padding: "8px 12px",
                            fontSize: "16px"
                          }}
                        >
                          +Add
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* ---------------Inner Content End------------- */}
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col md="4">
          {/* New column for the image */}
          <div className="orange-container">
            <div className="d-flex justify-content-start align-items-center">
              <div className="container-content">
                <h2 className="d-flex justify-content-start align-items-center ">
                  Order Summary
                </h2>
                <Row>
                  <Col md="8">
                    <div className="d-flex justify-content-start align-items-center">
                      <p>Base Premium- 1year</p>
                    </div>
                  </Col>
                  <Col md="4">
                    <p>Rs 16,436</p>
                  </Col>
                </Row>
                <div className="d-flex justify-content-start align-items-center">
                  <h3>Select Rider(s)</h3>
                </div>
                <Row>
                  <Col md="8">
                    <div className="d-flex justify-content-start align-items-center">
                      <p>Safeguard Benefit</p>
                    </div>
                  </Col>
                  <Col md="4">
                    <p>Rs 14,102</p>
                  </Col>
                </Row>
                <Row>
                  <Col md="8">
                    <div className="d-flex justify-content-start align-items-center">
                      <p>Safeguard +</p>
                    </div>
                  </Col>
                  <Col md="4">
                    <p>Rs 11,436</p>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <div className="d-flex justify-content-start align-items-center">
                      <h3>Select Add-ons</h3>
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="d-flex justify-content-start align-items-center">
                      <Form.Control
                        type="text"
                        placeholder="No add-ons Selected"
                        className="w-75"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <div className="d-flex justify-content-start align-items-center">
                      <h3>Posrt Existing Policy</h3>
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="d-flex justify-content-start align-items-center">
                      <p>
                        <input type="checkbox" />
                        Checkbox Paragraph
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="7">
                    <div className="d-flex justify-content-start align-items-center">
                      <h3>Total premium</h3>
                    </div>
                  </Col>
                  <Col md="4">
                    <h3>Rs 25,132</h3>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <div className="d-flex justify-content-center align-items-center ">
                      <Button variant="primary" className="btn-small-width">
                        Proceed to proposal
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default SecondPage 
