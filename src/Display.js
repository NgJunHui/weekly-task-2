import React from 'react'
import { Grid, Typography, CardContent, Card, Box } from '@mui/material';

const Display = (props) => {
    const { dataArr } = props;

    const personList = dataArr.map((ele => {
        return (
            <Grid container
            justify="center"
            alignItems={'center'}
            direction="column"
            mt={10} mb={10}
            key={ele.contact}
        >
            <Box sx={{ boxShadow: 3 }} ><Card style={{backgroundColor: "#F9F9F9"}}>
                <CardContent sx={{fontFamily: "Verdana" }}>
                    <Grid pl={6}  pr={6} >
                        <Typography textAlign={'center'} fontWeight={"bold"} fontFamily={"Verdana"} variant="h5" component="div" mb={3}>
                            Thank You, {ele.name}
                        </Typography>

                        <Typography fontFamily={"Verdana"} variant="h6">
                            <span style={{ color: "#686666" }}>Contact Number:</span>
                            {ele.contact}
                        </Typography>

                        <Typography fontFamily={"Verdana"} variant="h6">
                            <span style={{ color: "#686666" }}>Email:</span>
                            {ele.email} </Typography>

                        <Typography fontFamily={"Verdana"} variant="h6">
                            <span style={{ color: "#686666" }}>Date of Birth:</span>
                            {ele.dob}
                        </Typography>

                        <Typography fontFamily={"Verdana"} variant="h6">
                            <span sx={{ color: "#686666"}}>Description:</span>
                            {ele.str}
                        </Typography>

                    </Grid>
                </CardContent>
            </Card>
            </Box>
            </Grid>
        )

    }))

    return (
        <React.Fragment>
            {personList}
        </React.Fragment>
    )
}
export default Display;