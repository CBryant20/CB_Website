import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;

export default function AppContact() {
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
            <label htmlFor='fname'>First Name</label>
            <input
              className='input-box'
              type='text'
              id='fname'
              name='fname'
              placeholder='Your first name..'
              required
            />

            <label htmlFor='lname'>Last Name</label>
            <input
              className='input-box'
              type='text'
              id='lname'
              name='lname'
              placeholder='Your last name..'
              required
            />

            <label htmlFor='email'>Email</label>
            <input
              className='input-box'
              type='email'
              id='email'
              name='email'
              placeholder='Email...'
              required
            />

            <label htmlFor='message'>Message</label>
            <textarea
              className='input-box'
              id='message'
              name='message'
              placeholder='Write something or just say Hi!'
              required
            ></textarea>
            <div class='h-captcha' data-captcha='true'></div>
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
