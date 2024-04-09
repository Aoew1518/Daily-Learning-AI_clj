import List from "./components/List";
import Page from "./components/Page";
import Lift from "./components/Lift";
import TodoList from "./todoList/TodoList.jsx";

const App = props => {
    const colors = [
        { id: 1, name: 'red' },
        { id: 2, name: 'green' },
        { id: 3, name: 'blue' }
    ];

    return (
        <div>
            <h2>hello react</h2>
            {/* <List colors={colors} fn={() => alert('clicked')} obj={{name: 'john'}}/> */}
            {/* <Page/> */}
            {/* <Lift /> */}
            <TodoList />
        </div>
    );
};

export default App;
