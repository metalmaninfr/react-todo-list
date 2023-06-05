import { useState } from "react";
import { ContextTaskList } from "../../context/taskList";


export const Form: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const addToList = ContextTaskList.addToList();

  const addTask = (event: React.FormEvent<HTMLFormElement>, inputText: string) => {
    event?.preventDefault();

    if (!inputText.length) return
    
    addToList(inputText);
    setInputText("");
  }

    return (
      <form onSubmit={(e) => addTask(e, inputText)}>
        <input type='text' onChange={(e) => setInputText(e.target.value)} />
        <button type='submit'>submit</button>
      </form>
    );
}