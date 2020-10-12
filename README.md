# Tutorial React Native
Tutorial membuat aplikasi mobile dengan menggunakan React Native Expo

***
## JSX
JSX atau bisa dibilang extended javascript adalah suatu pengembangan javascript dimana kode HTML bisa di ikut sertakan dalam javascript. Beberapa rekomendasi dalam JSX sebagai berikut :
- Kode HTML harus nested. Artinya harus ada 1 tag parent
```html
<!-- Benar -->
<div>
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
```html
<div>
   <h1>{ 1 + 1 }</h1>
   { // End of the line Comment... }
   { /* Multi line comment... */ }
</div>
```
- Penulisan if else
```html
var i = 1;

<div>
   <h1>{ i == 1 ? 'True!' : 'False' }</h1>
</div>
```
- CSS styling
```html
var myStyle = {
   fontSize: 100,
   color: '#FF0000'
}

<div>
   <h1 style={myStyle}>Header</h1>
</div>
```
- Penulisan component react diawali huruf kapital. **TIDAK** disarankan mencoba ini
```html
<Header />
```

***
## Rendering
Rendering sangat berkaitan dengan lifecycle React. Metode render harus mengembalikan komponen Asli Bereaksi (elemen JSX) ke render (atau null, untuk tidak menghasilkan apa pun).
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
