import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import "./Start.css"

const Header = (props) => (
    <motion.div
            style={{
               'display': 'flex',
               'margin-top': '25px'
            }}
            animate={{
                y: 20
            }}
        
        >
            <motion.div 
            className='circle'
            transition={{duration: 2}}
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "100%"],
              }}
              ></motion.div>
            <Typography variant="h3" gutterBottom component="div">
                {props.title}
            </Typography>
        </motion.div>
);

export default Header;