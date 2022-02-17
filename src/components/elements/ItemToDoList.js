import React, { useState } from 'react';
import { 
    Box, 
    Checkbox,
    Text,
}
from '@chakra-ui/react';
import { RemoveModal } from './RemoveModal';

export const ItemToDoList = (props) => {
    
    const [ isChecked, setIsChecked ] = useState(false)

  return (
      <Box
      w='80%'
      h='100px'
      d='flex'
      alignItems='center'
      justifyContent='center'
      border='1px'
      borderStyle='hidden'
      borderRadius='12px'
      bgColor='#e2e2e2'
      mt='10px'
      p='10px'

      > 
        <Checkbox
        w='100%'
        d='flex'
        isChecked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        colorScheme='white'
        iconColor='black'
        size='lg'
        > 
            <Text
            textDecoration={isChecked ? 'line-through' : 'none'}
            color={isChecked ? 'grey' : 'black'}
            fontSize={['1.5em', '1.5em', '1.5em', '2em']} 
            >
                {props.task}
            </Text>
        </Checkbox>
        <RemoveModal 
        task={props.task}
        />
      </Box>
  )
}
