import React from 'react';
import Titulo from './Titulo';
import Sinopse from './Sinopse';
import Abertura from './Abertura';

function App() {
      return (
            <div>
            <Titulo titulo="One Punch Man" />
            <Sinopse/>
                  <Abertura musica="Uncrowned Greatest Hero"/>
            </div>
    );
}
export default App;