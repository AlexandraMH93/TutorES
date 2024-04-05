import { Box, Button, Typography  } from '@mui/material'
import './TeacherClasses.css' 
import { Link } from 'react-router-dom'

const TeacherClasses = () => {
  return (
    <div id="mainContainer">
      <Typography variant="h2">Your next class</Typography>

        <Box id='firstbox'
            height={200}
            width={600}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '2px solid grey' }}
            >
                
                    <div className='boximg'>
                        <Typography variant="h6"> Foto perfil </Typography> 
                    </div>

                <div className='boxDateSubjet' >
                    <div className='date'>
                        <Typography variant="h6"> Date: </Typography>
                    </div>
                    <div className='subject'>
                        <Typography variant="h6"> Subject: </Typography>
                    </div>
                </div>
            <div>
                <Typography type='body'>
                    Comment: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia esse, quae unde natus in ipsum...
                </Typography>
            </div>
            <div>
                <Link href="#" underline="none">
                {'underline="none"'}
            </Link>
            </div>
            <div>
                <Button variant="contained">Cancel Date </Button>
            </div>
        </Box>
   
    </div>
  )
}

export default TeacherClasses
