# Tutorial React Native
Tutorial membuat aplikasi mobile dengan menggunakan React Native Expo

***
## JSX
JSX atau bisa dibilang extended javascript adalah suatu pengembangan javascript dimana kode HTML bisa di ikut sertakan dalam javascript. Beberapa rekomendasi dalam JSX sebagai berikut :
- Kode HTML harus nested. Artinya harus ada 1 tag parent
```html
<!-- Benar -->
<div className=parent>
   <h1>MIS JAGO</h1>
   <h2>Mobile Innovation Studio</h2>
   <p>Pokoknya MIS IMBA!!!</p>
</div>

<!-- Salah -->
<h1>MIS JAGO</h1>
<h2>Mobile Innovation Studio</h2>
<p>Pokoknya MIS IMBA!!!</p>
```
- Penulisan kode Javascript menggunakan {}
```
import React from 'react';

export default class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{ 1 + 1 }</h1>
            { // End of the line Comment... }
            { /* Multi line comment... */ }
         </div>
      );
   }
}
```
- Penulisan if else
```
import React from 'react';

export default class App extends React.Component {
   render() {

      var i = 1;

      return (
         <div>
            <h1>{ i == 1 ? 'True!' : 'False' }</h1>
         </div>
      );
   }
}
```
- CSS styling
```
import React from 'react';

export default class App extends React.Component {
   render() {

      var myStyle = {
         fontSize: 100,
         color: '#FF0000'
      }

      return (
         <div>
            <h1 style={myStyle}>Header</h1>
         </div>
      );
   }
}
```
- Penulisan component react diawali huruf kapital. **TIDAK** disarankan mencoba ini
```
import React from 'react';
import Header from './components/header.jsx';

export default class App extends React.Component {
   render() {
      return (
         <Header />
      );
   }
}
```

***
## Rendering
***
## Components
***
## Props
***
## State
***
## Lifecycle
***
## Handling Event
***

Mobile Innovation Studio - 2020
