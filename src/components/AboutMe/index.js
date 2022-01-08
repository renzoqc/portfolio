import React from 'react';
import './index.css'

const AboutMe = () => (
	<div className="about" id={"about"}>
		<h3>
			Hey there! I'm Renzo, Full-Stack Developer at
			<span className="highlight"> Uncodeit EIRL Perú</span> and <span className="highlight">Data Science</span> enthusiast
		</h3>
		<p className="brackets">
			I build web apps to configure, deploy and manage telecommunications
			systems, these systems can use protocols like SSH, Telnet, SNMP to
			monitor the network status.
		</p>
		<p>
			I'm an enthusiast of technology, every day it advances by leaps and bounds,
			so I am always researching to know the new trends, and to be able to offer current solutions.
			Learning every day and sharing my knowledge with the team in order to grow as a team.
			<br/>
			<br/>
			We can change the world.
		</p>
	</div>
)

export default AboutMe;
