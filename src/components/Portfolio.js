import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core'
import Navbar from './Navbar'
import project1 from "../images/alan.jpg"
import project2 from "../images/javascript-fullstack.jpg"
import project3 from "../images/react-redux.jpg"
import project4 from "../images/mern-stack.jpg"


const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%"
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto"
  }
})

const Portfolio = () => {
  const classes = useStyles()

  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="180"
                image={project1}
              />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Voice Controlled News App
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    A conversational voice controlled React news application using Alan AI. A speech recognition software that allows you to add voice capabilities to your applications. This app uses News API for the news and Material UI for styling.
                  </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
              <a href="https://get-news.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button size="small" color="primary">
                  Visit Site
                </Button>
              </a>
              <a href="https://github.com/SoneThaya/voice-controlled-app" target="_blank" rel="noopener noreferrer">
                <Button size="small" color="primary">
                  Github
                </Button>
              </a>
                  
                </CardActions>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project2}
              />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 2
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, culpa hic. Illo quos excepturi aliquam nulla natus maxime a similique non, placeat quisquam incidunt, animi fugiat unde eaque doloremque! Repudiandae.
                  </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
          </Card>
        </Grid>

        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project3}
              />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 3
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, culpa hic. Illo quos excepturi aliquam nulla natus maxime a similique non, placeat quisquam incidunt, animi fugiat unde eaque doloremque! Repudiandae.
                  </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
          </Card>
        </Grid>

        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project4}
              />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 4
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, culpa hic. Illo quos excepturi aliquam nulla natus maxime a similique non, placeat quisquam incidunt, animi fugiat unde eaque doloremque! Repudiandae.
                  </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio
