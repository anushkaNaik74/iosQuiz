import React from 'react'
import '../styles/Admin.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
const Admin = () => {
  return (
    <div className='Admin'>
      <Link className='navLink' to={'/createQuiz'}>
      <Card sx={{ maxWidth: 345 }} className='Card1'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={require('../assets/quiz1.png')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Create Quiz
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>



    <Card sx={{ maxWidth: 345 }} className='Card2'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={require('../assets/result1.png')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Show Results
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default Admin