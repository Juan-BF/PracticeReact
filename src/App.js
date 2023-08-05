import './App.css';
import Message from './componentes/wlcome-message/message.js'
import Button from './componentes/button/button.js'

function App() {
  return (
   <>
   <div>
   <Message title='Welcome message' usuario='welcome Juan'/>
   <Button title='Mensaje de alerta 1'/>
   </div>
   
   <br></br>
   <div>
   <Message title='Welcome message' usuario='welcome Juan'/>
   <Button title='Mensaje de alerta 2'/>
   </div>
   <br></br>
   <div>
   <Message title='Welcome message' usuario='welcome Juan'/>
   <Button title='Mensaje de alerta 3'/>
   </div>


   </>
  );
}

export default App;
