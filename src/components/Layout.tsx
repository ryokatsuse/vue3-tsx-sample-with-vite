import { defineComponent } from 'vue'
import TodoApp from './TodoApp';

export const Layout = defineComponent({
  setup() {
    return () => (
      <>
        <div>
          <TodoApp/>
        </div>
      </>
    )
  }
})
