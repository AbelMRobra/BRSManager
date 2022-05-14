import React, {useRef, useState} from "react";
import CoffeBox from "../components/boxes/CoffeBoxes";
import { Typography } from "@mui/material";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Header from "../components/headers/PageHeader";



const Start = () => {
    let logoItem = useRef(null);
    
    return (
    <div className="container">  

        <Header title='Coffe time' />      

        <div
        
        style={{
            'margin': '25px'
         }}
         >
            <Typography variant="body1" gutterBottom>
                Sabemos que utilizar una nueva herramienta puede ser desafiante, asi que te invitamos a prepararte un cafe y leer tranquilamente 
                este manual de uso, donde podras aprender cada una de las etapas para poder crear y monitorear los presupuestos de tus proyectos.
            </Typography>
        </div>
        
        <motion.div className='row' >
            <div className='col-6'>
                <motion.div
                initial={{
                    opacity:0
                }}
                transition={{
                    delay: 0.3,
                    duration: 1}}
                animate={{
                    opacity:1
                }}
                >
                    <CoffeBox name='Supplies' description='Los articulos son el inicio y la base de un buen presupuesto' />
                </motion.div>
                <motion.div
                initial={{
                    opacity:0
                }}
                transition={{
                    delay: 0.6,
                    duration: 1}}
                animate={{
                    opacity:1
                }}
                >
                    <CoffeBox name='Analysis' description='Tambien conocidos como APU, te ayudaran en el armado' />
                </motion.div>

            </div>

            <div className='col-6'>
            <motion.div
            initial={{
                opacity:0
            }}
            transition={{
                delay: 0.9,
                duration: 1}}
            animate={{
                opacity:1
            }}>
                <CoffeBox name='Budgets' description='Ahora si, armamos un presupuesto' />
            </motion.div>
                
            <motion.div
            initial={{
                opacity:0
            }}
            transition={{
                delay: 1.2,
                duration: 1}}
            animate={{
                opacity:1
            }}>
                <CoffeBox name='Dashboard' description='El seguimiento es la parte mas importante' />
            </motion.div>
                
            </div>

        </motion.div>

            
    </div>
    )
};

export default Start;