import React from 'react';
import './index.css';

import data from './data.json'

import {
	Grid,
	Row,
	Column
} from 'carbon-components-react';

const styleContainerImage = {
	display: 'flex',
	textAlign: 'center',
	justifyContent: 'center',
	// backgroundColor: "rgba(250, 250, 250, 0.4)",
	backgroundColor: 'rgba(1, 5, 43, 0.7)',
	padding: '10px 0 0 0'
}
const styleImage = {
	// width: '100%',
	height: '120px',
	margin: '0',
	padding: '10px',
	backgroundColor: 'white',
	borderRadius: '50%'
}

const styleTitle = {
	textAlign: "center",
	// backgroundColor: "#04cb97",
	fontSize: '30px',
	// borderRadius: '16px'
}

const styleCard = {
	// borderRadius: '16px'
}

const styleContainerText = {
	backgroundColor: 'rgba(1, 5, 43, 1)',
	padding: '10px 20px',
	textAlign: 'left'
}

const Experience = () => {
	return (
		<div className='experience' id={"experience"}>
			<div className="section__title">
				<h3>&lt; experience &gt;</h3>
			</div>
			<Grid>
				{
					data.map(({company, logo, title, time, description, technologies}, index) => (
						<Row>
							<Column lg={{span: 10, offset: 1}}>
								<Grid style={styleCard} condensed>
									<Row>
										<Column md={2} style={styleContainerImage}>
											<img src={`/images/experiences/${logo}`} alt="" style={styleImage}/>
										</Column>
										<Column md={6} style={styleContainerText}>
											<h6 className="card__subtitle">{title}</h6>
											<p className="card__date">{time}</p>
											<p className="card__content">
												{description}
												<br/><br/>
												Technologies: {technologies}
											</p>
										</Column>
									</Row>
								</Grid>
							</Column>
						</Row>
					))
				}
			</Grid>
		</div>
	)
}

export default Experience;
