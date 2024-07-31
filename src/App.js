import './App.css';
 import {QRCodeSVG} from 'qrcode.react';
 import {QRCodeCanvas} from 'qrcode.react';


 function App() {
 return (
        <div className="App">
        <h2>SVG QRcode</h2>
        <QRCodeSVG value="https://reactjs.org/" />
        <h2>CanvasQRcode</h2>
        <QRCodeCanvas value="https://reactjs.org/" />
        </div>
  );
}

export default App;