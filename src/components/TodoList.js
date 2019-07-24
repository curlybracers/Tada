import React from "react";
import TodoCard from './TodoCard';


const TodoList = ({ title }) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            <TodoCard />
        </div>
    )
};

const styles = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 3,
        width: 300,
        padding: 8
    }
}

export default TodoList;
