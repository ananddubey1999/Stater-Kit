import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap'

const Home = () => {
  const [centeredModal, setCenteredModal] = useState(false) 
  return (
    <div className='vertically-centered-modal'>
        <Button.Ripple color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
          Vertically Centered
        </Button.Ripple>

        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} style={{ maxWidth: '65%', margin: '0 auto' }}>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>User detail</ModalHeader>
          <ModalBody>
        <div>
      <h2 className="pb-1" style={{ fontSize: '20px', textDecoration: 'underline' }}>Personal Details</h2>
       <Row className="border">
          <Col md='2'>
             <div className="d-flex flex-column">
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bolder ">Full Name</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Email</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Contact Number</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Date of Birth</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Date of Join</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Gender</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Marital Status</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Address</div>
    </div>
  </div>
</Col>
          <Col md='3'>
             <div className="d-flex flex-column">
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bolder ">Anand Dubey</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div>dubeyanand19d@gmail.com </div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div>7379772846 </div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div>19/10/1999 </div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div>09/10/2024 </div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div>Male</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div>Single</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div>Medical Road , Gorakhpur , Uttar Pradesh,273013</div>
    </div>
  </div>
</Col>
          <Col md='2'>
             <div className="d-flex flex-column">
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Roll</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Team</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Region</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Branch</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Pos Code</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="font-weight-bold ">Refer Code</div>
    </div>
  </div>
</Col>
<Col md='2'>
  <div className="d-flex flex-column">
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div >Sales Manager</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div >POS</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div >North-East</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div >North</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div >SIBPL/POS/10009</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div >EMA/HR/876</div>
    </div>
  </div>
</Col>
<Col md='3'>
    {/* New column for the image */}
    <div  className="d-flex justify-content-center align-items-center">
      <img src="https://avatars.githubusercontent.com/u/988934?v=4"alt="Profile"style={{ width: '180px', height: '230px', objectFit: 'cover' }}/>
    </div>
  </Col>
    </Row>
    </div>

    <div>
      <h2 className="pb-2" style={{ fontSize: '20px', textDecoration: 'underline' }}>Documentation Details</h2>
      <Row className="border">
        <Col md='3'>
          <div className="d-flex flex-column align-items-center">
            <h3 className="" style={{ fontSize: '16px' }}>Aadhaar Front</h3>
           
            <img
              src="https://hotofer.b-cdn.net/wp-content/uploads/2022/05/PVC-Aadhar-Card-Front-Image-300x189.png"
              alt="Image 1"
              style={{ height: '100px', width: '120px' }}
            />
            <p>1234 1234 1234</p>
          </div>
        </Col>
        <Col md='3'>
          <div className="d-flex flex-column align-items-center">
            <h3 className="" style={{ fontSize: '16px' }}>Aadhaar Back</h3>
           
            <img
              src="https://hotofer.b-cdn.net/wp-content/uploads/2022/05/PVC-Aadhar-Card-Back-Image.png"
              alt="Image 1"
              style={{ height: '100px', width: '120px' }}
            />
            <p>1234 1234 1234</p>
          </div>
        </Col>
        <Col md='3'>
          <div className="d-flex flex-column align-items-center">
            <h3 className="" style={{ fontSize: '16px' }}>PAN Card</h3>
            
            <img
              src="https://4.imimg.com/data4/TB/OF/ANDROID-35807128/product-250x250.jpeg"
              alt="Image 1"
              style={{ height: '100px', width: '120px' }}
            />
            <p>DAS13HT5</p>
          </div>
        </Col>
        <Col md='3'>
          <div className="d-flex flex-column align-items-center">
            <h3 className="" style={{ fontSize: '16px' }}>Qualification</h3>
            <img
              src="https://cdn.slidesharecdn.com/ss_thumbnails/135f83ee-2fb6-484f-89e5-45a7f3f9858c-160318095134-thumbnail-4.jpg?cb=1458294711"
              alt="Image 1"
              style={{ height: '110px', width: '100px' }}
            />
            <p>B.tech</p>
          </div>
        </Col>
      </Row>
    </div>

    <div>
      <h2 className="pb-2" style={{ fontSize: '20px', textDecoration: 'underline' }}>Payment Details</h2>
       <Row className="border">
      <Col md='2' >
        <div className="d-flex flex-column">

          <div className="d-flex  justify-content-start border-bottom pb-2 ">
            <div className=" font-weight-bold">Bank Name</div>
          </div>
          <div className="d-flex  justify-content-start border-bottom pb-2">
            <div className=" font-weight-bold">Branch Name</div>
          </div>
          <div className="d-flex  justify-content-start border-bottom pb-2">
            <div className=" font-weight-bold">IFSE Code</div>
          </div>

        </div>
      </Col>
      <Col md='2' >
        <div className="d-flex flex-column">

          <div className="d-flex  justify-content-start border-bottom pb-2 ">
            <div>ICICI Bank</div>
          </div>
          <div className="d-flex  justify-content-start border-bottom pb-2">
            <div >Medical College</div>
          </div>
          <div className="d-flex  justify-content-start border-bottom pb-2">
            <div >ICI0000465</div>
          </div>
        </div>
      </Col>
      <Col md='2' >
        <div className="d-flex flex-column">

          <div className="d-flex  justify-content-start border-bottom pb-2 ">
            <div className=" font-weight-bold">Account Holder</div>
          </div>
          <div className="d-flex  justify-content-start border-bottom pb-2">
            <div className=" font-weight-bold">Account Number</div>
          </div>

        </div>
      </Col>
      <Col md='2' >
        <div className="d-flex flex-column">

          <div className="d-flex  justify-content-start border-bottom pb-2 ">
            <div>Anand Dubey</div>
          </div>
          <div className="d-flex  justify-content-start border-bottom pb-2">
            <div >12345678091</div>
          </div>
        </div>
      </Col>
    </Row>
    </div>

    <div>
      <h2 className="pb-2" style={{ fontSize: '20px', textDecoration: 'underline' }}>Privilege Details</h2>
       <Row className="border">
      <Col md='2' >
        <div className="d-flex flex-column">


        </div>
      </Col>
      <Col md='2'>
        <div className="d-flex flex-column">

        </div>
      </Col>
    </Row>
    </div>

          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
              Accept
            </Button>{''}
          </ModalFooter>
        </Modal>
      </div>
  )
}

export default Home
