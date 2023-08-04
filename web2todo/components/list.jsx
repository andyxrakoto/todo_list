export const TodoList = (props) => {
    return (
        <>
            <ul>
                {props.todo.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
        </>
    );
}