import React, { useState } from "react";
import styled from 'styled-components';
import { ContextTaskList } from "../../context/taskList";
import { ITaskList } from "../../models/taskList";

interface Props {
  item: ITaskList;
}

const Container = styled.div<{ isChecked: boolean }>`
  padding: 1rem 2rem;
  margin: 2rem 0;
  border-radius: 1.5rem;
  border: 0.1rem solid;
  border-color: grey;
  ${props => props.isChecked && `
    text-decoration-line: line-through;
  `}
`

export const Checkbox: React.FC<Props> = ({ item }: Props) => {
  const removeFromList = ContextTaskList.removeFromList();
  const [checked, setChecked] = useState(item.checked);

  const handleChange = () => {
    setChecked(!checked);
    removeFromList(item.id)
  };


  return (
    <Container isChecked={checked}>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {item.text}
      </label>
    </Container>
  );
}