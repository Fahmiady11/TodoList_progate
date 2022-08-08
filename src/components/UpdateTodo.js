import useTodoStore from '../store/todoStore';
import { useState, useEffect } from 'react';
import { HStack, Input, Button } from '@chakra-ui/react';

function UpdateTodo() {
  const { todosTemp,updateTodo } = useTodoStore();
  const [change, setChange] = useState(null);

  useEffect(() => {
    setChange(todosTemp[0]);
  }, [todosTemp]);

  const handleChange = (e) => {
    setChange({ ...change, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(change)
    setChange(null)
  }

  return (
    <>
      {change && (
        <HStack width="md">
          <Input
            aria-label="Update-todo-input"
            placeholder={change.text}
            value={change.text}
            onChange={handleChange}
          />
          <Button aria-label="add-todo-button" onClick={handleSubmit}>Update</Button>
        </HStack>
      )}
    </>
  );
}

export default UpdateTodo;
