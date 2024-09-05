import React, { useState } from 'react';
import AutoFocusInput, {UsePrevious} from './hooks/useRef';

function App() {
  const [value, setValue] = useState(4);
  setTimeout( ()=> {
    setValue(5);
  },1000)
  return (
    <div className="App">
      <AutoFocusInput />
      <UsePrevious value={value}/>
    </div>
  );
}

export default App;
