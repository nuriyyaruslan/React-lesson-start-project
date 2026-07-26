import React, { Component } from 'react';

export const linkedinProfile = {
    href: 'https://www.linkedin.com/in/nuriyya-ruslanovna-301200125/',
    title: 'Linkedin Profile',
    target: '_blank'
}

export const profileImage = {
    src: 'https://images.unsplash.com/photo-1656164631610-f104326810c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Linkedin',
    alt: 'Linkedin Image'
}

export const mainTitle = "We are learning Frontend development";

export default class Gallery extends Component {
    render() {
        return (
            <div className='component-cover'>
                <h1>ES6 modules</h1>
                <p>Linkedin Profile: <a href={linkedinProfile.href} title={linkedinProfile.title} target={linkedinProfile.target}>Click me</a></p>
                <p>Linkedin Profile: <img className='profile-image' src={profileImage.src} title={profileImage.title} alt={profileImage.alt} /> </p>
            </div>
        );
    }
}