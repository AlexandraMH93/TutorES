import { Card, CardContent, Typography, Box } from "@mui/material"
import { Link } from "react-router-dom"
import './TeacherClasses.css'

const Class = () => {


  return (
    <div className="class">
       <Card>
        <CardContent>
            <Typography variant="h5" mt={10}ml={10} >
              Your next Class
            </Typography>
            
            <div id="box1">
            <Typography variant="body2" color="text.secondary" ml={10}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellat alias eum natus, quibusdam atque officiis debitis temporibus dignissimos commodi dicta provident sunt reiciendis ipsam sapiente, dolorum maiores minima impedit!
         Veniam nostrum laboriosam optio laudantium quos debitis pariatur quam nisi minima. Modi magni aut, consequatur maxime aliquid quidem delectus. Animi facere aliquid repellat perspiciatis officiis aut saepe accusantium explicabo quisquam?
         Culpa dignissimos, officia incidunt earum maiores porro, possimus expedita exercitationem similique consequuntur rem, ratione ullam. Enim dolor voluptas nihil repudiandae consequatur? Optio cumque velit maxime beatae animi asperiores ullam natus?
        </Typography>

            <div id="button">
                <Link to=''>
                Contact Teacher
                </Link>
                <button className="cancel"> Cancel date </button>
            </div>
        </div>

            <Typography variant="h5"ml={8}>
              Your other Classes
            </Typography>
            <input type="search" /> 
            <input type="date" />

        <div id="box2">
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
              </Box>

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
            </Box>

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
        </div>
        </CardContent>
       </Card>
    </div>
  )
}

export default Class