export default function NewItem({addTodo}) {
    const handleSubmit = () => {
        const field = document.getElementById("text-field")
        addTodo(field.value);
        field.value = "";
    }

    return (
        <div className="intput-form">
            <input type="text" id="text-field" placeholder="ADD YOUR WORK HERE..."></input>
            <button type="submit" onClick={handleSubmit}>ADD</button>
        </div>
    )
}