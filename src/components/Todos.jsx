import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodo } from "../services/actions/todosAction";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);
  return (
    <>
      <h2  className="title">Todos App</h2>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>{error.message}</h3>}
      <div className="todos-container">
        {todos && todos.map((todo)=>{
            const {id, title} = todo;
            return <div className="todo" key={todo.id}>
                <h4>{id}</h4>
                <h4>{title}</h4>
            </div>
        })}
      </div>
    </>
  );
};
export default Todos;
