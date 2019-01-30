import React, { Component } from 'react'
import {Grid, TextField} from '@material-ui/core';
import * as contentful from 'contentful'
import Course from '../components/Course'
const SPACE_ID = '1bvx5v3wfzeq'
const ACCESS_TOKEN = '179ad06a589d172135fc1a47e994f63ed1bbf6f598234309644aab7c671137ab'
const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
})

class CoursesList extends Component {
    state = {
        courses: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getCourses()
    }
    getCourses = () => {
        client.getEntries({
            content_type: 'course',
            query: this.state.searchString
        })
        .then((response) => {
            this.setState({courses: response.items})
        })
        .catch((error) => {
          console.log("Error occurred while fetching Entries")
          console.error(error)
        })
    }
    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value)
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getCourses()
    }
    render() {
        return (
            <div>
                { this.state.courses ? (
                    <div>
                        <TextField
                            style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                        />
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.courses.map((currentCourse, index) => (
                                <Grid key={index} item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}
export default CoursesList;
