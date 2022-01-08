import React, {useEffect, useState} from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container} from 'react-bootstrap';


const Header = () => {

	const [navbar, setNavbar] = useState(false)

	const changeBackground = () => {
		console.log(window.scrollY)
		if (window.scrollY >= 86) {
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}


	useEffect(() => {
		changeBackground()
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBackground)
	})

	return (
		<>
			<Navbar fixed="top" className="navbar-nav" collapseOnSelect expand="sm" variant={"dark"}
					style={{ backgroundColor: navbar == true? 'black': ''}}
			>
				<Container >
					<Navbar.Brand>
						<a href={"/"} className="text_item"
						   style={{ color: navbar == true? '#2190ff': ''}}
						>
							Home
						</a>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls={"responsive-navbar-nav"} style={{ borderColor : navbar == true? '#2190ff': '' }} />
					<Navbar.Collapse id={"responsive-navbar-nav"}>
						<Nav className="mr-auto">
							<Nav.Link href="#about">
								<a className="text_item"
									// style={{ color: navbar == true? 'black': ''}}
								>
									About me
								</a>
							</Nav.Link>
							<Nav.Link href="#experience">
								<a  className="text_item"
									// style={{ color: navbar == true? 'black': ''}}
								>
									Experience
								</a>
							</Nav.Link>
							<Nav.Link href="#projects">
								<a className="text_item"
									// style={{ color: navbar == true? 'black': ''}}
								>
									Projects
								</a>
							</Nav.Link>
							<Nav.Link href="#contact">
								<a className="text_item"
									// style={{ color: navbar == true? 'black': ''}}
								>
									Contact
								</a>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>

				</Container>
			</Navbar>
		</>
	)

	// <HeaderContainer
	// 	render={({ isSideNavExpanded, onClickSideNavExpand }) => (
	// 		<HeaderCarbon aria-label="Carbon Tutorial" className="prueba">
	// 			<SkipToContent />
	// 			<HeaderMenuButton
	// 				aria-label="Open menu"
	// 				onClick={onClickSideNavExpand}
	// 				isActive={isSideNavExpanded}
	// 			/>
	// 			<HeaderName href="/" prefix="Airdaneel" >
	// 				Promitia
	// 				{/*<HeaderGlobalAction aria-label="Promitia">*/}
	// 				{/*	<img src={logo} alt="Promitia" style={{width: '100%', height: '100%', padding: '10px'}}/>*/}
	// 				{/*</HeaderGlobalAction>*/}
	// 			</HeaderName>
	// 			<HeaderNavigation aria-label="Carbon Tutorial">
	// 				{
	// 					menu.map(({ name, href }, index) => (
	// 						<HeaderMenuItem key={index} href={href}>{name}</HeaderMenuItem>
	// 					))
	// 				}
	// 			</HeaderNavigation>
	// 			<SideNav
	// 				aria-label="Side navigation"
	// 				expanded={isSideNavExpanded}
	// 				isPersistent={false}>
	// 				<SideNavItems>
	// 					<HeaderSideNavItems>
	// 						{
	// 							menu.map(({ name, href }, index) => (
	// 								<HeaderMenuItem key={index} href={href}>{name}</HeaderMenuItem>
	// 							))
	// 						}
	// 					</HeaderSideNavItems>
	// 				</SideNavItems>
	// 			</SideNav>
	// 			<HeaderGlobalBar />
	// 		</HeaderCarbon>
	// 	)}
	// />
}

export default Header;

