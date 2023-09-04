import { Card } from '@mui/material';
import './App.css'
import Prolife from './components/Prolife';
import UserList from './components/UserList';
//COntext
import UserState from './context/user/UserState'

function App() {
  return (
    <>
      <div className='App'>
        <UserState>
          <div style={{ display: "flex", justifyContent: "left", justifyItems: "left", alignContent: "left", alignItems: "left" }}>
            <Card style={{ display: "left", justifyContent: "left", justifyItems: "left", alignContent: "left", alignItems: "left", border: "1px solid black" }}>
              <UserList />
            </Card>
            <Prolife />
          </div>
        </UserState>
      </div>
    </>
  );
}

export default App;
