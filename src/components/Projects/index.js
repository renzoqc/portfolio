import React from 'react';
import './index.css'
import defaultImage from './projects.jpeg'
import {
	Grid,
	Row,
	Column
} from 'carbon-components-react'

const data = [
	{
		title: 'Coming soon.',
		href: '',
		message: 'Coming soon I\'ll upload my projects.'
	},
	{
		title: 'Coming soon.',
		href: '',
		message: 'Coming soon I\'ll upload my projects.'
	}
]

const Projects = () => (
	<div className="projects" id={"projects"}>
		<div className="projects__title">
			<h3>&lt; projects &gt;</h3>
		</div>
		<Grid>
			<Row>
				{data.map(({title, href, message}, index) => (
					<Column md={4} lg={{span: 5}} className="card__column">
						<div className="card__project">
							<Grid>
								<Row>
									<Column style={{position: 'relative', padding: 0}}>
										<img src={defaultImage} alt="project photo" className="card__project-image"/>
										<div className="card__project-content">
											<p>{message}</p>
											<a className="know-more">Source</a>
										</div>
									</Column>
								</Row>
								<Row>
									<Column style={{padding: 0}}>
										<div className="card__project-title">{title}</div>
									</Column>
								</Row>
							</Grid>
						</div>
					</Column>
				))}
			</Row>
		</Grid>
	</div>
)

export default Projects;
