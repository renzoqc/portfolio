import React from 'react';
import cv from './CV_Quispe Cardenas Renzo.pdf'
import profile from './profile.png'
import Header from '../Header'
import './index.css'

const Profile = () => (
	<div className="background">
		<Header/>
		<div className="profile">
			<img src={profile} alt="Renzo Quispe"/>
			<p className="name">RENZO QUISPE</p>
			<p className="phrase">Full Stack Developer | Telecommunications Engineering</p>
			<a className="show-more" href={cv} download>RESUME</a>
		</div>
	</div>
)

export default Profile;
