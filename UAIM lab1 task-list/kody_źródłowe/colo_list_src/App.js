import logo from './logo.svg';
import './App.css';
import ColorList from './components/ColorList';
import {useState} from 'react';
import colorData from './color-data.json';
import AddColorForm from "./components/AddColorForm";
import {v4} from "uuid";


function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <>
    < AddColorForm 
      onNewColor = {(title, color) => {
        const newColors = [
          ...colors,
          {
            id: v4(),
            rating: 0,
            title,
            color
          }
        ];
        setColors(newColors);
      }}
    
    />
    <ColorList 
      colors = {colors}
      onRateColor={(id, rating) => {
        console.log("id, rating", id, rating);
        console.log("colors=",colors);
        const newColors = colors.map(color => 
          color.id === id ? {...color, rating} : color);
        console.log("newColors=", newColors);
        setColors(newColors);
      }}
      onRemoveColor={id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
      }}
    />
    </>
  );
}

export default App;
