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
          <Grid.Column width={7}>
            <Header as="h4">Footer Header</Header>
            <p>
              Extra space for a call to action inside the footer that could help
              re-engage users.
            </p>
            <List horizontal>
              <List.Item
                icon="twitter"
                content={
                  <a href="https://twitter.com/parmsang" alt="twitter link">
                    Twitter
                  </a>
                }
              />
              <List.Item
                icon="facebook"
                content={
                  <a href="https://facebook.com/" alt="facebook link">
                    Facebook
                  </a>
                }
              />
              <List.Item
                icon="mail"
                content={
                  <a href="#" alt="email link">
                    Email
                  </a>
                }
              />
              <List.Item content={
                
                <form action="https://formspree.io/cremona.matei19@gmail.com" method="POST">
        
                <label for="name">Name:</label>
                
                <input type="text" name="name" placeholder="Name" style={{display: `block`, margin: `auto`}}/>
                
                <label for="email">Email:</label>
                <input type="email" name="_replyto" placeholder="Email" style={{display: `block`, margin: `auto`}}/>
                
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="10" cols="33"></textarea>
                
                <button type="submit" value="submit">Send</button>
        </form>
              } />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer

