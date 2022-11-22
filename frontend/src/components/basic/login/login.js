import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import './login.css';
import { connect } from 'react-redux';
import { login, logout } from '../../../actions/loginAction';
import auth from '../../../services/AuthServices';
import Alert from '../../common/alert';
import { Redirect } from 'react-router-dom';
import login_picture from './login_picture.png';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        auth
          .LoginAuth(values.username, values.password)
          .then((response) => {
            console.log(response);
            if (response.data.success) {
              this.props.login(response.data.user);
              auth.storeToken(response.data.token);
              this.setState({
                isLoggedIn: true,
              });
            } else {
              return Alert('error', 'Error!', response.data.message);
            }
          })
          .catch((error) => {
            console.log(error);
            return Alert('error', 'Error!', 'Server Error');
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    if (this.state.isLoggedIn) {
      return <Redirect to={this.props.user.userOptions[0].link} />;
    } else {
      return (
        <div className="login-container">
          <div className="login-logo">
            <img src={login_picture} alt="" />
          </div>
          <div className="login-inner">
            <h3
              style={{
                fontSize: '20px',
                color: '#3907FF',
                fontWeight: 'bold',
              }}>
              Log In
            </h3>
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="Username" hasFeedback>
                {getFieldDecorator('username')(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Username"
                  />
                )}
                {/* <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                /> */}
              </Form.Item>
              <Form.Item label="Password" hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your Password!',
                    },
                  ],
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      );
    }
  }
}

const LoginForm = Form.create({ name: 'login' })(Login);

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  login,
  logout,
})(LoginForm);
