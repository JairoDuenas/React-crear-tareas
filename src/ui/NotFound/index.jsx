import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import React from 'react'
import notFound from '../../statics/404 ERROR  PAGE NOT FOUND.png'; 

export default function NotFound() {
  return (
    <Container maxWidth='sm'
      sx={{
        marginTop: '40px'
      }}
    >
      <Paper elevation={6} sx={{
        borderRadius: '30%',
        background: '#bdbdbd'
      }}>
        <img
          src={notFound}
          alt="Not Found"
          style={{
            marginTop: '5px',
            width: '75vw'
          }}
          />
      </Paper>
    </Container>
  )
}
