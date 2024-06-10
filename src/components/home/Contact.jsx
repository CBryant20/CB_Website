import { useState } from "react";

export default function AppContact() {
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleHearChange = (e) => {
    setShowOtherInput(e.target.value === "other");
  };

  return (
    <div id='contact' className='contact'>
      <div className='container'>
        <div className='titleHolder'>
          <h2>Get in Touch</h2>
        </div>
        <div className='column'>
          <form action='https://api.web3forms.com/submit' method='POST'>
            <input
              type='hidden'
              name='access_key'
              value='b7f60ed2-4dc3-42e5-8ab4-80bdf117cda4'
            />
            <label htmlFor='fname'>First Name *</label>
            <input
              className='input-box'
              type='text'
              id='fname'
              name='fname'
              placeholder='Your first name..'
              required
            />

            <label htmlFor='lname'>Last Name *</label>
            <input
              className='input-box'
              type='text'
              id='lname'
              name='lname'
              placeholder='Your last name..'
              required
            />

            <label htmlFor='email'>Email *</label>
            <input
              className='input-box'
              type='email'
              id='email'
              name='email'
              placeholder='Email...'
              required
            />

            <label htmlFor='hear'>How did you hear about my website? *</label>
            <select
              className='input-box'
              id='hear'
              name='hear'
              required
              onChange={handleHearChange}
            >
              <option value='' disabled selected>
                Select an option
              </option>
              <option value='resume'>Resume</option>
              <option value='email'>Email</option>
              <option value='linkedin'>LinkedIn</option>
              <option value='other'>Other</option>
            </select>

            {showOtherInput && (
              <input
                className='input-box'
                type='text'
                id='other'
                name='other'
                placeholder='Please specify other source...'
                required
              />
            )}

            <label htmlFor='improvement'>
              What improvements can I make to enhance your user experience? *
            </label>
            <input
              className='input-box'
              type='text'
              id='improvement'
              name='improvement'
              required
            />

            <label htmlFor='message'>
              Could you please share details about the project you need
              completed and the goals you aim to achieve? *
            </label>
            <textarea
              className='input-box'
              id='message'
              name='message'
              required
            ></textarea>
            <div className='h-captcha' data-captcha='true'></div>
            <input className='input-submit' type='submit' value='Submit' />
          </form>
          {/* <script
            src='https://web3forms.com/client/script.js'
            async
            defer
          ></script> */}
        </div>
      </div>
    </div>
  );
}
