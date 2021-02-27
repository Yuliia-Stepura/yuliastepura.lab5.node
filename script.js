const Todo = props => (
    <li>
       <input type="checkbox" checked={props.todo.check} onChange={props.onChange}/>
        <button onClick={props.onDelete}>Delete</button>
        <span>{props.todo.text}</span>
    </li>
)
let id =0;
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                { id: 999, text: 'task 1', check: true },
                { id: 998, text: 'task 1', check: false }
            ]
        }
    }
    addTodo(){
        const text = promt("add todo");
        this.setState({todos: [...this.state.todos, {id: id++, text: text, check: false}]})
    }
    deleteTodo(id){
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !==id)
        })
    }
    changeTodo(id){
        this.setState({todos: this.state.todos.map(todo => todo.id == id ? {...todo, check: !todo.check } : todo)})
    }

    render() {
        return (
            <div>

                <h2> My TODO App </h2>
                <div> Todo count:{this.state.todos.length} </div>  
                <div>Unchecked Todod count: {this.state.todos.filter(todo => !todo.check).length}</div>
                <button onClick={()=> this.addTodo()}> Add todo </button>
                <ul>
                {this.state.todos.map(todo =><Todo 
                    onDelete={()=>this.deleteTodo(todo.id) } 
                    onChange={()=> this.changeTodo(todo.id)} 
                    todo={todo}/>)}
                </ul>
            </div>
        )
    }
}
ReactDOM.render(< App />, document.getElementById('root'));