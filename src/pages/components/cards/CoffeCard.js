import React from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CoffeCard = (props) => (
    <React.Fragment>
            <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Topic
        </Typography>
        <Typography variant="h4" component="div">
            {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            budget manager
        </Typography>
        <Typography variant="body2">
            {props.description}
        </Typography>
        </CardContent>
    </React.Fragment>
);

export default CoffeCard;