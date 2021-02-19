import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export const App = defineComponent({
  setup() {
    const msg = 'hello vue3 tsx'
    return () => (
      <>
        <HelloWorld msg={msg} />
      </>
    )
  }
  // render() {
  //   return (
  //     <>
  //       <img alt="Vue logo" src="./assets/logo.png" />
  //       <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  //     </>
  //   )
  // }
})
