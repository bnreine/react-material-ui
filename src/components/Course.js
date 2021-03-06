import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'


const Course = (props) => {
    return(
        <div>
            { props.course ? (
                <Card >
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                    image={props.course.fields.image.fields.file.url}
                    title={props.course.fields.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.course.fields.title}
                    </Typography>
                    <Typography component="p">
                        {props.course.fields.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href={props.course.fields.url} target="_blank">
                        Go To Course
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default Course
