import { Redirect } from 'expo-router'

const App = () => {
    // return <Redirect href="/tabs/(stack)/home"></Redirect>
  return <Redirect href="/drawer/(tabs)/(stack)/products"/>
//   return <Redirect href="/(stack)/home"></Redirect>
}

export default App
