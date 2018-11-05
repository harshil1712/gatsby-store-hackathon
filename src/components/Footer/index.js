import React from 'react'
import Link from 'gatsby-link'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="About" />
            <List>
              <List.Item as={Link} to="/privacy/">
                Privacy
              </List.Item>
              <List.Item as={Link} to="/terms/">
                Terms
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Services" />
            <List>
              <List.Item as={Link} to="/">
                Our Products
              </List.Item>
              <List.Item as={Link} to="/gatsbyimage/">
                Gatsby Image Example
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header style={{textAlign: 'left'}} as="h4">Builders</Header>
            <ul style={{listStyle: 'none'}}>
              <li><a href='https://github.com/PhoeniXAbhisheK'>AbhisheK Yadav</a></li>
              <li><a href='https://github.com/lindakovacs'>Linda Kovacs</a></li>
              <li><a href='https://github.com/harshil1712'>Harshil Agrawal</a></li>
              <li><a href='#'>Cremona Mateli</a></li>
              <li><a href='https://github.com/RoniqueRicketts'>Ronique Ricketts</a></li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
