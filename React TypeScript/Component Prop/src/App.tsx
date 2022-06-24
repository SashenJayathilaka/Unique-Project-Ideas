import './App.css';
import { Login } from './components/auth/Login';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';



function App() {
  return (
    <div className='"App'>
      <Private isLoggedIn ={true} component={Profile} />
      <Login />
    </div>
  )
}


export default App