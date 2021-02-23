import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'TodoInput',

  props:{
    submitTodo:{
      type: Function,
      required:true
    } as const
  },
  setup(props) {
    const title = ref('');
    const isCompleted = ref(false)
    const submitButtonRef = ref<HTMLButtonElement>();

    const handeleTitleChange = (event: Event) => {
      if (event.target instanceof HTMLInputElement) {
        title.value = event.target.value;
      }
    }

    const handleSubmit = () => {
      props.submitTodo({ title: title.value, isCompleted: isCompleted.value })
      title.value = ''
      isCompleted.value = false
    }

    return () => (
      <div class="todo-input">
        <div class="todo-field">
          <span class="todo-field-name">タスク名</span>
          <div class="todo-field-input">
            <input value={title.value} onChange={handeleTitleChange} />
          </div>
        </div>
        <div class="todo-field-button">
          <button disabled={false} ref={submitButtonRef} onClick={handleSubmit}>登録</button>
        </div>
      </div>
    );
  },
});
