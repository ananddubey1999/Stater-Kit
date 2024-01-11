import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap'

const Home = () => {
  const [centeredModal, setCenteredModal] = useState(false) 
  return (
    <div className='vertically-centered-modal'>
        <Button.Ripple color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
          Vertically Centered
        </Button.Ripple>

        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className=' modal-dialog-centered modal-xl'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Vertically</ModalHeader>
          <ModalBody>
        <div>
      <h2 className="pb-1" style={{ fontSize: '20px', textDecoration: 'underline' }}>Personal Details</h2>
       <Row className="border">

  <Col md='4'>
  <div className="d-flex flex-column">
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-2 px-2 font-weight-bold fs-4">Full Name</div>
      <div className="fs-4">Anand Dubey</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-2 px-2 font-weight-bold fs-4">Email</div>
      <div className="fs-4">dubeyanand19d@gmail.com</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-2 px-2 font-weight-bold fs-4">Contact Number</div>
      <div className="fs-4">7379772844</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-2 px-2 font-weight-bold fs-4">Date of Birth</div>
      <div className="fs-4">19/10/1999</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-2 px-2 font-weight-bold fs-4">Date of Join</div>
      <div className="fs-4">09/01/2024</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-5 px-2 font-weight-bold fs-4">Marital Status</div>
      <div className="fs-4">Single</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-5 px-2 font-weight-bold fs-4">Address</div>
      <div className="fs-4">Medical Road Gorakhpur, Uttar Pradesh, 273013</div>
    </div>
  </div>
</Col>
<Col md='4'>
  <div className="d-flex flex-column">
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-2 px-2 font-weight-bold fs-6">Roll</div>
      <div className="fs-6">POS</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-2 px-2 font-weight-bold fs-6">Team</div>
      <div className="fs-6">Sales Manager</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-2 px-2 font-weight-bold fs-6">Region</div>
      <div className="fs-6">North</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-2 px-2 font-weight-bold fs-6">Branch</div>
      <div className="fs-6">North</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-2 px-2 font-weight-bold fs-6">Pos Code</div>
      <div className="fs-6">SIBPL/POS/10009</div>
    </div>
    <div className="d-flex justify-content-start border-bottom pb-1">
      <div className="mr-2 px-2 font-weight-bold fs-6">Refer Code</div>
      <div className="fs-6">EMA/HR/876</div>
    </div>
  </div>
</Col>
<Col md='4'>
    {/* New column for the image */}
    <div  className="d-flex justify-content-center align-items-center">
      <img src="https://avatars.githubusercontent.com/u/988934?v=4"alt="Profile"style={{ width: '200px', height: '250px', objectFit: 'cover' }}/>
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
      <Col md='6' >
        <div className="d-flex flex-column">

          <div className="d-flex  justify-content-start border-bottom pb-2 ">
            <div className="mr-2 px-2 font-weight-bold">Bank Name</div>
            <div>ICICI Bank</div>
          </div>
          <div className="d-flex  justify-content-start border-bottom pb-2">
            <div className="mr-2 px-2 font-weight-bold">Branch Name</div>
            <div>Medical College</div>
          </div>
          <div className="d-flex  justify-content-start border-bottom pb-2">
            <div className="mr-2 px-2 font-weight-bold">IFSE Code</div>
            <div>ICIC0000465</div>
          </div>

        </div>
      </Col>
      <Col md='6'>
        <div className="d-flex flex-column">

          <div className="d-flex justify-content-start border-bottom pb-2">
            <div className="mr-2 px-2 font-weight-bold">Account Holder</div>
            <div>Anand Dubey</div>
          </div>
          <div className="d-flex justify-content-start border-bottom pb-2">
            <div className="mr-2 px-2 font-weight-bold">Account Number</div>
            <div>123456789006</div>
          </div>
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
