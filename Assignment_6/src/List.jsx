export default function List({item, remove}) {
    const handleDelete = () => {
        remove(item.id);
    }
    return (
        <div className="list-items">
            <label>{item.text}</label>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}