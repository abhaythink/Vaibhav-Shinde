import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'

const Accord = () => {
  return (
    <div>
        
        <Accordion>
            <AccordionSummary expandIcon={'>'}>
                <Typography variant='h6'>
                    What is Java
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat alias quae, placeat minima debitis magnam maiores. Facilis vel autem minus animi saepe natus, molestias delectus ducimus laudantium incidunt, nobis corporis!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default Accord