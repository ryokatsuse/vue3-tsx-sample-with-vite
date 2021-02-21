import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Todo',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {

    const handeleIsCompletedChange = () => {
      if (props.todo.isCompleted === false) {
        props.todo.isCompleted = true
      } else {
        props.todo.isCompleted = false
      }
    }
    return () => (
      <div class="todo">
        <div class="todo-user">
          <input 
            type="checkBox"
            value={props.todo.isCompleted}
            onClick={handeleIsCompletedChange}
            />
          <span>{props.todo.title}</span>
        </div> 
      </div>
    );
  },
});
