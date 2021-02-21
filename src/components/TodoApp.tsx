import { defineComponent, reactive } from 'vue';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

type TodoDataList = {
  title: string;
  isCompleted: boolean;
}

export default defineComponent({
  name: 'TodoApp',
  setup() {
    const todoDataList = reactive([
      { title: '歯を磨く', isCompleted: false},
      { title: '掃除をする', isCompleted: false},
      { title: '買い物リストを確認する', isCompleted: false},
    ]);

    const handlePushTodo = (data: TodoDataList) => {
      todoDataList.push(data);
      console.table(todoDataList)
    }
    return () => (
      <div class="wrapper">
        <TodoInput submitTodo={handlePushTodo} />
        <TodoList todos={todoDataList} />
      </div>
    );
  },
});
