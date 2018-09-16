// import react agar bisa dipakai saat extends
import React, {Component} from 'react'

// membuat class App yang extends dari React Component
class App extends Component {
  // membuat fungsi render, menghasilkan tampilan
  render(){
    // mengembalikan tampilan
    return(
      <div>
      {/* Latihan Awal
      <Header /> */}
      
      {/* Latihan Props
      <Header wow="Hai" />
      <Header wow="Hai1" />
      <Header wow="Hai2" />
      */}
      
      <Counter />
      </div>
    )
  }
}

// mengexport App agar bisa ditampilkan di index.js
export default App;

// class Header extends Component {
//   render(){
//     return(
//       <div>
//         <h1>{this.props.wow}</h1>
//         <h2>Sub Judul</h2>
//       </div>
//     )
//   }
// }

class Counter extends Component {
  
  state = {
    angka:0
  }

  naik = () => {
    this.setState({
      angka: this.state.angka + 1
    })
  }

  turun = () => {
    this.setState({
      angka: this.state.angka - 1
    })
  }
  
  render(){
    return(
      <div>
        <h1>{this.state.angka}</h1>
        <button onClick={this.naik}>Naik</button>
        <button onClick={this.turun}>Turun</button>
      </div>
    )
  }
}