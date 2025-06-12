import React from 'react'
import './FAQ.css';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div className='faq container'>
        <h1 className='faq-heading'>Frequently asked questions</h1>
        <Link to="/contactForm" className="btn btn-warning">Enquiry Form</Link>
        <div class="container accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What is Balloon Lagao ?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" >
              <div class="accordion-body">Balloon Lagao is one of the India's fastest growing balloon decoration company,offering high quality balloon decorations,sky balloon,corporate event,sky balloon, deliver services across PAN India with consistent quality ,creativity and professionalism. </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              How can i contact Balloon Lagao ?
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" >
              <div class="accordion-body">You can contact Balloon Lagao directly from website with the help of whatsapp , another social media like Instagram , Facebook,Linkedin. you can visit to our physical location which is provided below. </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Do i need to provide any materials for the decoration ? 
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" >
              <div class="accordion-body">No, we provide all the materials</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              How do i contact balloon lagao for support ?
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" >
              <div class="accordion-body">You can contact us on email support@balloonlagao.com or call us directly on +91-7666325325</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
              Which cities do you provide service in ?
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse" >
              <div class="accordion-body">We provide service in PAN India</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
              How many days are required to get the product  delivered?
              </button>
            </h2>
            <div id="flush-collapseSix" class="accordion-collapse collapse" >
              <div class="accordion-body">We delivered your product within 7 to 10  days.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                Delivery charges are included in the final price or not ?
              </button>
            </h2>
            <div id="flush-collapseSeven" class="accordion-collapse collapse" >
              <div class="accordion-body">Yes </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FAQ