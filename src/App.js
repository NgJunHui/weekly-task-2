import React, { Component } from "react";
import Nav from './Nav';
import Display from './Display';
import Form from './Form';
import { Grid, Paper, Container } from '@mui/material'


class App extends Component {
    state = {
        dataArr: []
    }

    newForm = (props) => {
        this.setState({
            dataArr: [...this.state.dataArr, props]
        })
    }


    render() {
        console.log(this.state.dataArr)
        return (
            <Container>
                <Nav />
                <Grid
                    container justify="center"
                    alignItems={'center'}
                    direction="column"
                >
                    <Paper elevation={12} sx={{ px: 10, py: 5, mb:3}}>
                        <Form newForm={this.newForm} />
                    </Paper>
                </Grid>
                <Display dataArr={this.state.dataArr} />
            </Container>
        )
    }
}
export default App;
