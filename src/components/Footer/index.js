import React from 'react'
import './index.css'
import iconEmail from './email.svg'
import iconGithub from './github.svg'
import iconLinkedin from './linkedin.svg'
import iconInstagram from './instagram.svg'
import iconMobile from './mobile.svg'
import iconSocial from './socials.svg'
import iconRocket from './rocket.svg'
import logoPromitia from './logo_promitia.png'

import {
	Grid,
	Row,
	Column,
	UnorderedList,
	ListItem,
	Link, OrderedList
} from 'carbon-components-react'

const styleFooter = {
	backgroundColor: 'black',

}

const styleListItem = {
	marginBottom: '8px'
}

const styleLinkListItem = {
	color: 'white'
}

const styleGridBox = {
	padding: '32px'
}

const styleColumn = {
	textAlign: 'left',
	paddingTop: '1.5rem',
	paddingBottom: '1.5rem'
}

const styleCardFooter = {
	backgroundColor: 'white',
}

const Footer = () => (
	<footer style={styleFooter} id={"contact"}>
		<Grid style={styleGridBox}>
			<Row>
				<Column>
					<img src={iconRocket} alt="rocket" width={45} className="icon__rocket"/>
					<p className="connectWMe">Connect with me!</p>
				</Column>
			</Row>
			<Row className="justify-content-md-center">
				<Column style={styleCardFooter} sm={12} md={{span: 3}} lg={{span: 3, offset: 1}} className="contact__card">
					<a href="mailto: renzo.quispe.c@uni.pe" target="_blank">
						<img src={iconEmail} alt="mail" width={25} className="icon__card"/>
					</a>
					<p className="title__card">E M A I L</p>
					<hr />
					<p className="bottom__text">renzo.quispe.c@uni.pe</p>
				</Column>
				<Column style={styleCardFooter} sm={12} md={{span: 3}} lg={{span: 3, offset: 2}} className="contact__card">
					<img src={iconSocial} alt="social" width={25} className="icon__card"/>
					<p className="title__card">S O C I A L S</p>
					<hr />
					<a href="https://www.linkedin.com/in/renzo-quispe-cardenas-37a62a15a" target="_blank">
						<img src={iconLinkedin} alt="linkedin" width={30} className="icon__card"/>
					</a>
					<a href="https://github.com/renzoqc" target="_blank">
						<img src={iconGithub} alt="github" width={30} className="icon__card"/>
					</a>
					<a href="https://www.instagram.com" target="_blank">
						<img src={iconInstagram} alt="instagram" width={30} className="icon__card"/>
					</a>
				</Column>
				<Column style={styleCardFooter} sm={12} md={{span: 3}} lg={{span: 3, offset: 2}} className="contact__card">
					<img src={iconMobile} alt="mobile" width={30} className="icon__card"/>
					<p className="title__card">P H O N E</p>
					<hr />
					<p className="bottom__text">+51 910 534 820</p>
				</Column>
			</Row>
			<Row>
				<Column>

					<p className="copyright">© 2022 Renzo Quispe C.</p>
				</Column>
			</Row>
		</Grid>
	</footer>
)

export default Footer
