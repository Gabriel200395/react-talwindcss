import { Header, ArticlesList, Form } from './components'
import AppContext from './context/GlobalContext'


function App() {
  return (
    <AppContext>
      <Header />
      <Form />
      <ArticlesList />
    </AppContext>
  )
}
export default App
