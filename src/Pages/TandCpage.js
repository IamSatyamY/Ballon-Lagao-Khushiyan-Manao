import React from 'react'
import { Helmet } from 'react-helmet'

const TandCpage = () => {
  return (
    <div className='container text-justify' style={{marginTop:"65px"}}>
      <Helmet>
        <title>Terms  and  conditions</title>
        <meta name='description' content='Terms  and  conditions'></meta>
      </Helmet>
        <h1 className='text-center'>Terms and Conditions</h1>
        
        <ul>
            <li>By using this website, the user automatically and unconditionally agrees to the terms and conditions outlined here and/or elsewhere on the site.</li>

            <li>Users are encouraged to thoroughly read all product and service information provided in the relevant sections.</li>

            <li>This website is owned by "BalloonLagao.com". All content on this site and any other site owned or managed by BalloonLagao.com or its affiliates is protected by copyright laws. No part of this material may be copied, reproduced, republished, transmitted, downloaded, or otherwise used for any commercial or other purposes without BalloonLagao.com ’s written permission. Unauthorized use is a violation of copyright and intellectual property rights.</li>

            <dl><b>Product & Service Disclaimer</b>
              <li>Products and services on this site are offered “as is” without any guarantees or warranties, either express or implied. BalloonLagao.com does not guarantee that services/products will be error-free, or that any issues will be corrected. Additionally, we do not warrant that the site or its servers are free from viruses or other harmful elements. Any warranties or after-sales services provided by manufacturers or vendors must be dealt with directly by them. BalloonLagao.com holds no responsibility for such matters.</li>
            </dl>

            <dl><b>Additional Charges</b>
              <li>Some orders may incur extra charges like taxes, duties, or Octroi, which must be paid by the recipient at the time of delivery. BalloonLagao.com does not have control over these charges.</li>
            </dl>

            <dl><b>Delivery for Perishable Items</b>
              <li>If unsuccessful due to wrong or incomplete address, recipient unavailability, or refusal, the order will still be considered delivered and no refunds will be issued.</li>
            </dl>

            <dl><b>Product Variations</b>
              <li>As many products are handmade, there may be slight differences between product photos and the actual items delivered. balloon arrangements and other such items may not look exactly like their pictures, but we strive to ensure close resemblance. balloonlagao reserves the right to substitute products with similar ones if required.</li>
            </dl>

            <dl><b>Limitation of Liability</b>
              <li>BalloonLagao.com will not be liable for any loss of data, profits, or any other indirect, incidental, or consequential damages arising from the use or inability to use the products/services. Any liability from balloonlagao will not exceed the actual amount paid by the user for the specific product/service.</li>
            </dl>

            <dl><b>Changes and Errors</b>
              <li>BalloonLagao.com  may update site content and product/service information at any time without prior notice. Prices shown are applicable to online purchases and may vary locally. We reserve the right to limit sales or deny service to resellers. balloonlagao is not responsible for any typographical or photographic errors on the site.</li>
            </dl>

            <dl><b>Feedback and Communication</b>
              <li>Users who book services through the site may receive follow-up communication via SMS, email, calls, or WhatsApp for feedback or updates. The site holds complete ownership of this feedback process.</li>
            </dl>

            <dl><b>Refund Policy</b>
              <li>Any refund issued voluntarily or upon a user’s claim will not set a precedent for future claims and will not override these terms. All refunds, if applicable, are subject to a 10% deduction for bank and processing charges.</li>
            </dl>

            <dl><b>Clarifications</b>
              <li>If users have questions or doubts regarding any terms, they should contact us via email at "support@balloonlagao.com" and wait for a written response before using the services.</li>
            </dl>

            <dl><b>Legal Jurisdiction and Disputes</b>
              <li>By using this site, users confirm they have read, understood, and accepted all terms, conditions, and risks involved. In case of any disputes, parties will attempt to resolve the matter amicably. If unresolved within 30 days, disputes will be referred to a sole arbitrator under the Arbitration and Conciliation Act, 1996. All legal matters will fall under the jurisdiction of Delhi courts.</li>
            </dl>
        </ul>
    </div>
  )
}

export default TandCpage