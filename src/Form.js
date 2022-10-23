import React, { Component } from 'react'
import { TextField, Grid, Button, Typography } from '@mui/material'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

class Form extends Component {
    state = {
        name: '',
        dob: '',
        email: '',
        contact: '',
        str: '',
        nameErr: '',
        dobErr: '',
        emailErr: '',
        contactErr: '',
        strErr: '',
        validSuccess: false
    }

    ValChange = (ele) => {
        if (ele.target.id == "name") {
            this.nameValidate(ele.target.value);
        }
        if (ele.target.id == "dob") {
            this.dobValidate(ele.target.value);
        }
        if (ele.target.id == "email") {
            this.emailValidate(ele.target.value);
        }
        if (ele.target.id == "contact") {
            this.contactValidate(ele.target.value);
        }
        if (ele.target.id == "str") {
            this.strValidate(ele.target.value);
        }
    }
    getDate = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        return yyyy + '-' + mm + '-' + dd
    }

    nameValidate = (name) => {
        let nameErr = this.state.nameErr;
        let validSuccess = this.state.validSuccess;
        if (name.trim() === '') {
            nameErr = "*This field is required."
            validSuccess = false;
        }
        else if (!/^[A-Za-z\s]*$/.test(name)) {
            nameErr = '*No numbers or special characters are allowed.'
            validSuccess = false;
        }
        else {
            nameErr = '';
            validSuccess = true;
        }
        this.setState({
            name, nameErr, validSuccess
        });
        return validSuccess;
    }

    dobValidate = (dob) => {
        let dobErr = this.state.dobErr;
        let validSuccess = this.state.validSuccess;
        const todayDate = this.getDate()

        if (dob.trim() === '') {
            dobErr = "*This field is required."
            validSuccess = false;
        }
        else if (dob > todayDate) {
            validSuccess = false;
            dobErr = `*Date of birth cannot be after today's date.`
        }
        else {
            validSuccess = true;
            dobErr = '';
        }
        this.setState({
            dobErr, dob, validSuccess
        })
        return validSuccess;
    }

    emailValidate = (email) => {
        let emailErr = this.state.emailErr;
        let validSuccess = this.state.validSuccess;
        if (email.trim() === '') {
            validSuccess = false;
            emailErr = "*This field is required."
        }
        else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
            emailErr = '*Please enter a valid format.e.g. name@mail.com'
            validSuccess = false;
        }
        else {
            validSuccess = true;
            emailErr = '';
        }
        this.setState({
            email, emailErr, validSuccess
        });
        return validSuccess;
    }

    contactValidate = (contact) => {
        let contactErr = this.state.contactErr;
        let validSuccess = this.state.validSuccess;

        if (contact.trim() == '') {
            contactErr = "*This field is required."
            validSuccess = false;
        }
        else if (!/^[0-9]*$/.test(contact)) {
            contactErr = "*Only numbers are allowed in this field."
            validSuccess = false;
        }
        else if (contact.trim().length != 10) {
            contactErr = "*Contact number should consist of 10 digits."
            validSuccess = false;
        }
        else {
            validSuccess = true;
            contactErr = '';
        }
        this.setState({
            contact, contactErr, validSuccess
        })
        return validSuccess;
    }

    strValidate = (str) => {
        let strErr = this.state.strErr;
        let validSuccess = this.state.validSuccess;

        if (str.trim() == '') {
            validSuccess = false;
            strErr = '*Please write a short sentence about yourself.'
        }
        else {
            validSuccess = true;
            strErr = ''
        }
        this.setState({
            str, strErr, validSuccess
        })
        return validSuccess;
    }

    clearInput = () => {
        document.getElementById("name").value = '';
        document.getElementById("dob").value = '';
        document.getElementById("email").value = '';
        document.getElementById("contact").value = '';
        document.getElementById("str").value = '';
        this.setState({
            name: '',
            dob: '',
            email: '',
            contact: '',
            str: '',
        })
    }

    submitForm = (ele) => {
        ele.preventDefault();
        if (this.nameValidate(this.state.name) && this.dobValidate(this.state.dob) && this.emailValidate(this.state.email) && this.contactValidate(this.state.contact) && this.strValidate(this.state.str)) {
            alert("Congratulation! Sign up is successful.");
            this.props.newForm(this.state);
            this.clearInput();
        }
        else {
            alert("Sign up failed. Please check all the fields carefully.")
        }
    }

    render() {
        return (
            <Grid container
                justify="center"
                alignItems={'center'}
                direction="column"
            >
                <Typography
                    variant="h4"
                    fontWeight={"bold"}
                    fontFamily={"Verdana"}
                    color="#000000"
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <MailOutlinedIcon sx={{ fontSize: "55px" }} /><span style={{ marginLeft: "15px" }}>Sign Up Now!</span></div>
                </Typography>

                <form onSubmit={this.submitForm}>
                    <Grid container direction={'column'}
                        alignItems={'center'}
                        justify={'center'}
                        mt={4}
                    >
                        <TextField
                            id="name"
                            onChange={this.ValChange}
                            helperText={this.state.nameErr}
                            variant="outlined" label="Name"
                            sx={{ marginTop: 3, width: 400 }}
                        />
                        <TextField
                            id="dob"
                            type="date"
                            label="Date of Birth"
                            onChange={this.ValChange}
                            helperText={this.state.dobErr}
                            variant="outlined"
                            defaultValue={this.getDate()}
                            sx={{ marginTop: 2, width: 400 }}
                        />
                        <TextField
                            id="email"
                            label="Email"
                            onChange={this.ValChange}
                            helperText={this.state.emailErr}
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                        />
                        <TextField
                            id="contact"
                            label="Contact No."
                            onChange={this.ValChange}
                            helperText={this.state.contactErr}
                            variant="outlined"
                            sx={{ marginTop: 2, width: 400 }}
                        />
                        <TextField
                            id="str"
                            onChange={this.ValChange}
                            variant="outlined"
                            label="Share some facts about yourself!"
                            helperText={this.state.strErr}
                            sx={{ marginTop: 2, width: 400 }}
                            multiline
                            rows={5}
                            rowsmax={10}
                        />
                        <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            sx={{
                                ':hover': {
                                    bgcolor: '#D2D2D2',
                                    color: '#000000',
                                },
                                mt: "2em", p: "12px 85px", backgroundColor: "#000000", fontFamily: "Verdana", fontWeight: "bold"
                            }}>
                            Submit
                        </Button>
                    </Grid>
                </form>
            </Grid>
        )
    }
}
export default Form;