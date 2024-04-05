import { Card, CardContent, Typography, Box } from "@mui/material"
import { Link } from "react-router-dom"
// import './Class.css'

const Class = () => {


  return (
    <div className="class">
       <Card>
        <CardContent>
            <Typography variant="h5" mt={10}ml={8} >
              Your next Class
            </Typography>
            <Typography variant="body2" color="text.secondary" ml={8}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus voluptatum ipsam illum quam error quibusdam voluptatibus impedit eos doloribus minima qui illo iure a harum, esse dignissimos amet labore!
        </Typography>
        <Link to=''>
          Contact Teacher
        </Link>
        <button> Cancel date </button>
            <Typography variant="h5"ml={8}>
              Your other Classes
            </Typography>
            <input type="search" /> 
            <input type="date" /> 
            <Box
                ml={8}
                height={100}
                width={100}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}
              >
            <img></img>
            <Typography>
              Alejandro
              Data:<data> 04-04-24</data>
            </Typography>


          </Box>,
          <Box
                ml={8}
                height={100}
                width={100}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}
              >
              <img></img>
              <Typography>
                Alejandro
                Data: <data> 04-04-24</data>
              </Typography>
    </Box>,
    <Box
                ml={8}
                height={100}
                width={100}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}
              >
              <img></img>
              <Typography>
                Alejandro
                Data: <data > 04-04-24</data>
              </Typography>
             
        </Box>
        </CardContent>
       </Card>
    </div>
  )
}

export default Class
