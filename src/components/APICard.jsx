import { Card, CardBody } from '@chakra-ui/react'
import React from 'react'

function APICard(props) {
  return (
    <Card
    minW={{base:'fit-content',md:'49%'}}
   
    variant={'outline'}
    boxShadow={'sm'} >
        <CardBody>
            {props.apiData.API}
        </CardBody>
    </Card>
  )
}

export default APICard