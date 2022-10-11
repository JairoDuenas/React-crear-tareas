import Paper from '@mui/material/Paper';
import React from 'react'
import notFound from '../../statics/404 ERROR  PAGE NOT FOUND.png'; 
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <Stack 
      display='flex'
      alignItems='center'
      marginTop='30px'
      height='auto'
      justifyContent ='center'
      direction={{ xs: 'column' }}
      spacing={{ xs: 2, sm: 4, md: 4 }}
    >
      <Paper elevation={10} sx={{
        width: '90%',
        height: '60vw',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10%',
        background: '#bdbdbd'
      }}>
        <img
          src={notFound}
          alt="Not Found"
          style={{
            width: '60%'
          }}
          />
      </Paper>
      <Button
        size='medium'
        variant="contained"
        onClick={() => navigate('/')}
      >
        volver a Home
      </Button>
    </Stack>
  )
}
