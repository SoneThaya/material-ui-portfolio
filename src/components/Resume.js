import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Box } from "@material-ui/core"
import Navbar from './Navbar'

const Resume = () => {
  return (
    <>
      <Navbar />
      <Box component="header">
        <Typography variant="h4" align="center">
          Working experience
        </Typography>
        <Box component="div">
          <Typography variant="h2">
            2013
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Resume
