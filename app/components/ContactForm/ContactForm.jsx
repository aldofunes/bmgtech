import React from 'react';
import styles from './ContactForm.scss';
import Input from './Input';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      formValid: false,
      success: false,
    };

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeFirstName(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  onChangeLastName(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  onChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  onChangeMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const {firstName, lastName, email, message } = this.state;

    _gs('event', 'Web form submission');
    _gs('identify', {
      email,
      first_name: firstName,
      last_name: lastName
    });

    const self = this;

    _agile.set_email(email);

    _agile.create_contact({
      first_name: firstName,
      last_name: lastName,
      email,
      tags: 'Website'
    }, {
      success(data) {
        _agile.add_note({
          subject: 'Web form submission',
          description: message
        }, {
          success(data) {
            self.setState({
              firstName: '',
              lastName: '',
              email: '',
              message: '',
            });
          },
          error({error}) {
            console.log({error});
          }
        });
      },
      error({error}) {
        console.log({error});
      }
    });
  }

  render () {
    const {firstName, lastName, email, message} = this.state;

    return (
      <form className={styles.form} onSubmit={this.onSubmit}>

        <Input
          label="First Name"
          type="text"
          value={firstName}
          onChange={this.onChangeFirstName}
        />

        <Input
          label="Last Name"
          type="text"
          value={lastName}
          onChange={this.onChangeLastName}
        />

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={this.onChangeEmail}
        />

        <Input
          label="Message"
          type="textArea"
          value={message}
          onChange={this.onChangeMessage}
        />

        <button className={styles.submitButton} type="submit">Submit</button>
      </form>
    )
  }
}

export default ContactForm;