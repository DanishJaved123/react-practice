import React from 'react';
import './App.css';
import './responsive.css';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sdata from './components/Sdata';

function ncard(){

}

function App() {
  return (
    <>
    {/* {} */}
    <Card
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    text={Sdata[0].text}
    link={Sdata[0].links}
    />
      <Card
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    text={Sdata[1].text}
    link={Sdata[1].links}
    />



    </>
  );
};


export default App;
