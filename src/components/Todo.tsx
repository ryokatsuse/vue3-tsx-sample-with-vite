import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Todo',
  props: {
    todo: {
      type: Object,
      required: true,
    } as const,
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
          <label>
            <input 
              type="checkBox"
              value={props.todo.isCompleted}
              onClick={handeleIsCompletedChange}
              />
            <span>{props.todo.title}</span>
          </label>
        </div> 
      </div>
    );
  },
});
