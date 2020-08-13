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
import project1 from "../images/html-css-javascript-lg.jpg"


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
        <Grid>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, culpa hic. Illo quos excepturi aliquam nulla natus maxime a similique non, placeat quisquam incidunt, animi fugiat unde eaque doloremque! Repudiandae.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </CardMedia>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Portfolio
