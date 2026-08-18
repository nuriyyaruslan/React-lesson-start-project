import React, { Component } from 'react';
import { linkedinProfile, profileImage } from './Gallery';

const html = `
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
`;

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Nuriyya',
      age: '32',
      profession: 'Developer'
    }
  }

  changeUserValues = () => {
    this.setState({profession: "Software engineer", name: 'Leyla', age: '24'});
  }

  render() {
    const { name, age, profession } = this.state;
    const { email, phone } = this.props;
    return (
      <div className='component-cover'>
        <h2>Contact</h2>
        <ul>
          <li>{name}</li>
          <li>{age}</li>
          <li>{profession}</li>
          <li>{email}</li>
          <li>{phone}</li>
        </ul>
        <p>Linkedin Profile: <a href={linkedinProfile.href} title={linkedinProfile.title} target={linkedinProfile.target}>Click me</a></p>
        <p>Linkedin Profile: <img className='profile-image' src={profileImage.src} title={profileImage.title} alt={profileImage.alt} /> </p>

        <button
          type="button"
          onClick={this.changeUserValues}
        >Change profession</button>
      </div>
    );
  }
}