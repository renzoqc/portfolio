import logo from './logo.svg';
import './style.css';

import {
    Grid,
    Row,
    Column
} from 'carbon-components-react';

import Header from '../Header'
import AboutMe from '../AboutMe'
import Profile from "../Profile";
import Experience from "../Experience";
import Projects from '../Projects';
import Footer from '../Footer'

function Index() {
  return (
    <div className="App">
      {/*<Header/>*/}

      <Grid style={{ padding: '0', width: '100%', maxWidth: 'none'}} >
          <Row style={{ margin: 0}}>
              <Column style={{ padding: 0}}>
                  <Profile/>
              </Column>
          </Row>
          <Row style={{margin: 0}}>
              <Column style={{padding: 0}}>
                  <AboutMe/>
              </Column>
          </Row>
          <Row style={{margin: 0}}>
              <Column style={{padding: 0}}>
                 <Experience/>
              </Column>
          </Row>
          <Row style={{margin: 0}}>
              <Column style={{padding: 0}}>
                  <Projects/>
              </Column>
          </Row>
      </Grid>
      <Footer/>
    </div>
  );
}

export default Index;
