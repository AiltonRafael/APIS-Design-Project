import React, { useState, useContext } from 'react'
import { Box, useDisclosure } from '@chakra-ui/react';
import { 
    Button,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    ModalContent,
    Text,
    IconButton,
} from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi'
import { UserContext } from '../../context/userContext';

export const RemoveModal = (props) => {

    const [ isOver, setIsOver ] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { tasksList, setTaskList } = useContext(UserContext)

    function removeIteminTodoList(){ 
        const index = tasksList.indexOf(props.task)
        if(index > -1){
          tasksList.splice(index, 1)
          setTaskList([...tasksList, null])
        }
    }
    
    return (
      <Box>
        <IconButton
        name='clicked'
        icon={<FiTrash2 />}
        size='lg'
        variant='ghost'
        onClick={onOpen}
        color={isOver ? 'black' : 'grey'}
        onMouseOver={(e) => setIsOver(true)}
        onMouseLeave={(e) => setIsOver(false)}
        onFocus={(e) => setIsOver(true)}
        />
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontWeight='thin'> 
              Tem certeza de que deseja remover o item? 
            </ModalHeader>
            <ModalBody>
              <Text fontSize='1.5em'> {props.task} </Text>
            </ModalBody>
            <Box
            d='flex'
            w='100%'>
              <Button 
              w='50%'
              bgColor="tomato" 
              variant='ghost' 
              color='white'
              onClick={removeIteminTodoList}
              borderRadius='none'
              > 
                    Remover
              </Button>
              <Button 
              w='50%'
              colorScheme='blue' 
              borderRadius='none'
              onClick={onClose}>
                    Cancelar
              </Button>
            </Box>
          </ModalContent>
        </Modal>
      </Box>
    )
}
