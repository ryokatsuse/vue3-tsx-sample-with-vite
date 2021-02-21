import { defineComponent } from "vue";
import Todo from "./Todo";

export default defineComponent({
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    return () =>
      <div>{props.todos.map((todo: any, i) => <Todo todo={todo} key={i} />)}</div>
  }
})
