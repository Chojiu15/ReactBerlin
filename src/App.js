import './App.css';
import Avatar from './components/Avatar'
import MyButton from './components/Button'

const App = () => {

  const myArray = [{
    id : 1,
    name : 'Donald',
    age : 24,
    food : 'pizza'
  },
  {
    id : 2,
    name : 'John',
    age : 26,
    food : 'lasagna'
  }
]

const handleClick = () => {
   alert('Hello world')
}
  
  return (
    
    <div className='App'>
       {myArray.map(e => {
         return <Avatar key={e.id} {...e} />
       })}

      <MyButton click={handleClick}  />
    </div>
  )
}

export default App





