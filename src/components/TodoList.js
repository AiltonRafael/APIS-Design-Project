import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { ItemToDoList } from './elements/ItemToDoList';
import { 
    Box, 
    Text
}
from '@chakra-ui/react';

export default function TodoList(props) {

  const { tasksList } = useContext(UserContext)

  return (
    <Box
    d='flex'
    w='100%'
    h='100%'
    flexDir='column'
    justifyContent='center'
    alignItems='center'
    alignContent='center'
    >
          <Text 
          fontSize={['1.5em', '1.5em', '1.5em', '2em']} 
          fontWeight='bold'> 
            Lista de Tarefas 
          </Text>
          {tasksList.map((currentTask, index) => 
                      !currentTask ? 
                        null
                        :   
                        <ItemToDoList
                        key={index}
                        task={currentTask}
                        />
    
            )}
    </Box>
  )
}
