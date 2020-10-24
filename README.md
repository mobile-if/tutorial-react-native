# Tutorial React Native
Tutorial membuat aplikasi mobile dengan menggunakan React Native Expo

## Modul 3 - JSX, Rendering, Component, Props, State, Styling, Lifecycle, dan Handling Event

***
### JSX
JSX atau bisa dibilang JavaScript XML adalah suatu pengembangan javascript dimana kode HTML bisa diikutsertakan dalam javascript. Beberapa rekomendasi dalam JSX sebagai berikut :
- Kode HTML harus nested. Artinya harus ada 1 tag parent  
    <img width="450px" alt="" src="docs-img/jsx-1.png" />  
- Penulisan kode Javascript menggunakan {}  
    <img width="450px" alt="" src="docs-img/jsx-2.png" />  
- Penulisan if else  
    <img width="450px" alt="" src="docs-img/jsx-3.png" />  
- CSS styling  
    <img width="450px" alt="" src="docs-img/jsx-4.png" />  
- Penulisan component react diawali huruf kapital. **TIDAK** disarankan mencoba ini
    ```html
    <Header />
    ```


***
### Rendering
Rendering sangat berkaitan dengan `lifecycle React`. Metode render harus mengembalikan komponen Asli Bereaksi (elemen JSX) ke render (atau null, untuk tidak menghasilkan apa pun).


***
### Components
Komponen adalah bagian-bagian yang menyusun aplikasi. Diharuskan membuat komponen untuk memberitahu React tentang apa saja yang akan ditampilkan (render) ke Real DOM (HTML). [Apa itu DOM?](https://www.w3schools.com/js/js_htmldom.asp). Komponen di React sendiri bersifat `reuseable`, artinya bisa digunakan kembali.

#### Jenis Komponen
Terdapat dua jenis komponen, yaitu :
1.  Function Components  
    Komponen yang dibuat dengan fungsi disebut juga dengan `function components` dan yang menggunakan class disebut `class components`. Nama komponen harus dimulai dengan huruf kapital. Fungsi harus mengembalikan JSX elemen.  

    <img width="450px" alt="Functional Component" src="docs-img/component-1.png" />  

2.  Class Components
    Sedangkan untuk class component, cara membuatnya harus melakukan extends dari class React.Component. Nama komponen harus dimulai dengan huruf kapital. Method render harus mengembalikan JSX elemen.  

    <img width="450px" alt="Class Component" src="docs-img/component-2.png" />  

Kedua komponen di atas sebenarnya sama, bedanya hanya terletak di cara pembuatannya saja. Komponen pertama dibuat menggunakan fungsi dan komponen kedua menggunakan class.  

Pada class component, terdapat method khusus yang akan dijalankan saat class tersebut dibuat. Method tersebut adalah method `constructor`. Konstruktor biasanya digunakan untuk melakukan inisialisasi komponen. Konstruktor dibuat dengan fungsi `constructor()`. Di dalam konstruktor, kita bisa mendefinisikan nilai awal untuk variabel maupun state. Pemanggilan fungsi `super()` di dalam konstruktor akan mengeksekusi konstruktor dari induk class, yakni `React.Component`. Tujuannya agar kita bisa mengakses semua method yang ada di class induk.

<img width="450px" alt="Constructor Class Component" src="docs-img/component-3.png" />  


***
### Props
React Native memiliki dua tipe data yang dapat mengkontrol sebuah `component`. `props` ditetapkan oleh `parent` dari suatu `component` tersebut dan tidak dapat diperbaiki / diganti (bersifat *fixed* atau *immutable*) selama masa pakai komponen. Bisa dibilang `props` adalah parameter default dari suatu `component`.  

Berikut contohnya:   
-   Pertama kita buat reuseable `component` dengan default props `name`.  
    <img width="700px" alt="GreetingCard Function Component" src="docs-img/propsComponent.png" />  

-   Lalu akan kita gunakan seperti ini:   
    <img width="450px" alt="GreetingCard Function Component" src="docs-img/propsComponent1.png" />  
    Parameter `name` pada component `<GreetingCard />` adalah sebuah `props`.


***
### State
Jika `props` bersifat *fixed* atau tidak dapat dirubah *value*nya. `state` adalah data control di dalam component yang dapat diubah.  

Deklarasi `state` dalam sebuah Functional Component seperti ini :  
<img width="700px" alt="state Class Component" src="docs-img/stateComponent1.png" />  

Deklarasi `state` dalam sebuah Class Component seperti ini :  
<img width="700px" alt="state Class Component" src="docs-img/stateComponent2.png" />  

Dalam program tersebut sebuah tombol akan memerintah fungsi mengganti isi dari sebuah state.  


***
### Styling
Di dalam React, styling sangat mudah diimplementasikan. Jenis - jenis style pada React sendiri mirip seperti HTML, hanya saja penamaannya menggunakan gaya penulisan *camel case*. Styling di React Native terdapat dua cara.   
-   Pertama, dengan cara langsung dituliskan dalam props component.  
    <img width="700px" alt="style Component" src="docs-img/styleComponent1.png" />  
    Component utama (core) dari React Native pasti memiliki props `style`.  

-   Kedua, menggunakan `StyleSheet` component. Untuk caranya sebagai berikut.  
    Buat `styles` seperti gambar di bawah  
    <img width="450px" alt="style Component" src="docs-img/styleComponent2.png" />  

    Untuk pemakaiannya seperti gambar di bawah  
    <img width="700px" alt="style Component" src="docs-img/styleComponent3.png" />  

    Dua kode di atas diletakkan dalam satu file, jika ingin menjadikannya sebuah file `styles.js` sendiri maka tambahkan `export` ke konstanta `styles` :     
    ```js
    export const styles = StyleSheet.create({
        ...
    });
    ```


***
### Lifecycle


***
### Handling Event


***
### Pustaka
- [React JSX - w3schools.com](https://www.w3schools.com/react/react_jsx.asp)
- [Introducing JSX - React](https://reactjs.org/docs/introducing-jsx.html)

***
Mobile Innovation Studio - 2020
