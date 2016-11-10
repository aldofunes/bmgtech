import React from 'react';
import styles from './Contact.scss';
import Banner from './Banner';
import Location from './Location';
import Form from './Form';
import Support from './Support';

class Contact extends React.Component {
  componentDidMount() {
    _gs('track');
    _agile.track_page_view();
    _agile_execute_web_rules();
  }

  render() {
    return (
      <div className={styles.view}>
        <Banner />
        <Location />
        <Form />
        <Support />
      </div>
    );
  }
}

export default Contact;
