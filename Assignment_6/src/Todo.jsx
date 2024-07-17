import { useEffect, useState } from "react"
import NewItem from './NewItem'
import List from './List'

export default function TodoList() {

    function getData() {
        const data = JSON.parse(localStorage.getItem("todos"));
        if (!data)
            return [];
        return data;
    }

    const [items, setItems] = useState(getData);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(items))
    }, [items]);

    const todo = (text) => {
        setItems((prevItems) => {
            return [...prevItems, { text: text, id: crypto.randomUUID() }];
        })
    }

    const removeTodo = (id) => {
        setItems((prevItems) => {
            return prevItems.filter((t) => t.id !== id);
        })
    }
    return (
        <div>
            <NewItem addTodo={todo} />
            {items.map(item => {
                return <List item={item} remove={removeTodo} key={item.id} />
            })}
        </div>
    )
}