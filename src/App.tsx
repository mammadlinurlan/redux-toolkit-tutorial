import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';
import List from './Components/List';
import { Add } from './Components/Add';
import { useEffect } from 'react';
function App() {
   
  return (

    <Provider store={store}>
      <Add/>
      <List/>
    </Provider>

  );
}

export default App;
