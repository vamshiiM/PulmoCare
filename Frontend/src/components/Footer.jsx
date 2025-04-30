import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLungs } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className='bg-gray-100'>
        <div className='flex flex-col md:flex-row gap-4 justify-between max-w-6xl mx-auto px-4 py-8'>
          <div className='md:max-w-md'>
            <div className='text-2xl font-bold text-gray-700 mb-4'>Download our lung cancer screening app</div>
            <p className='text-gray-600 mb-4'>Track your appointments, access resources, and get personalized guidance on your mobile device.</p>
          </div>
          <div className='flex flex-col sm:flex-row gap-3'>
            <a href="#" className='transition hover:opacity-80'><img className='w-40' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="Get it on Google Play" /></a>
            <a href="#" className='transition hover:opacity-80'><img className='w-40' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="Download on App Store" /></a>
          </div>
        </div>

        <hr className='border-gray-300 mx-4 md:mx-auto max-w-6xl' />

        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-4 py-10'>
          <div className='col-span-1'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white'>
                <FontAwesomeIcon icon={faLungs} size="lg" />
              </div>
              <p className='font-bold text-black text-2xl'>PlumoCare</p>
            </div>
            <p className='text-gray-500 text-sm mb-4'>Early detection saves lives. Our mission is to make lung cancer screening accessible to everyone.</p>
            <div className='text-gray-500 text-sm'>© 2025 PlumoCare</div>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-gray-800 mb-1'>Resources</h3>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>About Lung Cancer</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Screening Guidelines</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Risk Assessment</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Patient Stories</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Clinical Trials</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Research Updates</a>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-gray-800 mb-1'>Patient Support</h3>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Help & Support</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Find a Specialist</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Treatment Options</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Support Groups</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Financial Assistance</a>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-gray-800 mb-1'>About Us</h3>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Our Mission</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Medical Advisory Board</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Research Partners</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Careers</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Contact Us</a>
            <a href="#" className='text-gray-500 hover:text-blue-600 text-sm'>Privacy Policy</a>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-gray-800 mb-1'>Connect With Us</h3>
            <div className='flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm'>
              <FontAwesomeIcon icon={faPhone} />
              <span>Helpline: 1-800-LUNG-HELP</span>
            </div>
            <div className='flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm'>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>support@plumocare.org</span>
            </div>
            <h3 className='font-semibold text-gray-800 mt-4 mb-1'>Follow Us</h3>
            <div className='flex gap-4 text-gray-600'>
              <a href="#" className='hover:text-blue-600 transition'><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
              <a href="#" className='hover:text-blue-600 transition'><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
              <a href="#" className='hover:text-blue-600 transition'><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
              <a href="#" className='hover:text-blue-600 transition'><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
              <a href="#" className='hover:text-blue-600 transition'><FontAwesomeIcon icon={faYoutube} size="lg" /></a>
            </div>
          </div>
        </div>

        <div className='bg-gray-200 py-4'>
          <div className='max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm'>
            <p>This website is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
            <p className='mt-2'>Always seek the advice of your physician with any questions regarding a medical condition.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer