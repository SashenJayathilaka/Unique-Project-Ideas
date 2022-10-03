import './App.css';
import { List } from './components/genetics/List';




function App() {
  return (
    <div className='"App'>
      {/*
      <List 
      items={["Batman" , "Superman" , "Wonder Women"]}
      onclick={(item) => console.log(item)}
      />
      <List items={[1 , 2 , 3]} onclick={(item) => console.log(item)} />
  */}
      <List 
      items={[
        {
          id: 1,
          first: "Sashen",
          last: "Hasindu",
        },
        {
          id: 2,
          first: "Oscar",
          last: "Nia",
        },
        {
          id: 3,
          first: "Kane",
          last: "Tom",
        },
      ]}
      onclick={(item) => console.log(item)}
      />
    </div>
  )
}


export default App