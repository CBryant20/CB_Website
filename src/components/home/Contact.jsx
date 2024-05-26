import { Form, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;

export default function AppContact() {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='titleHolder'>
          <h2>Get in Touch</h2>
        </div>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{ remember: true }}
        >
          <Form.Item
            name='fullname'
            rules={[
              {
                required: true,
                message: "Please enter your full name!",
              },
            ]}
          >
            <Input placeholder='Full Name' />
          </Form.Item>
          <Form.Item
            name='email'
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder='Email Address' />
          </Form.Item>
          <Form.Item name='telephone'>
            <Input placeholder='Telephone' />
          </Form.Item>
          <Form.Item name='subject'>
            <Input placeholder='Subject' />
          </Form.Item>
          <Form.Item name='message'>
            <TextArea placeholder='Message' />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
