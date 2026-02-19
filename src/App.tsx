import './App.css'
import { Brand } from './features/login/components/Brand'
import { LoginForm } from './features/login/components/LoginForm'
import MainLayout from './layouts/MainLaout'

function App() {

  return (
    <MainLayout>
        <Brand />
        <LoginForm />
    </MainLayout>
  )
}

export default App
