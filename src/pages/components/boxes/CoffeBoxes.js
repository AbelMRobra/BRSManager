import React, {useRef, useEffect} from "react";
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import CoffeCard from "../cards/CoffeCard";

const CoffeBox = (props) => (
    <React.Fragment>
        <Box
            component="span"
            sx={{ mx: '2px'}}
        >
            <Card variant="outlined">
                <CoffeCard name={props.name} description={props.description} />
            </Card>
        </Box>
    </React.Fragment>
)

export default CoffeBox