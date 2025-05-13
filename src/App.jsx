import React, { useRef } from 'react'
import './App.css'
import screenshot from 'html2canvas';

function App() {

  const contentRef = useRef(null);  

  const textColor = (colorName) => {
    contentRef.current.style.color = colorName;  
  }

  const bgColor = (colorName) => {
    contentRef.current.style.backgroundColor = colorName;
  }

  const fontFamily = (font) => {
    contentRef.current.style.fontFamily = font;
  }
 
  const downloadImage = () =>{
   screenshot(contentRef.current).then(canvas => {

    const imageData = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href=imageData;
    link.download = "font-expro-generated-image.png"
    link.click()
   })
  }
const setBackgroundImage = () => {
  contentRef.current.style.backgroundImage = 'url(https://www.dreamstime.com/royalty-free-stock-photo-lake-scenery-image4883935)';
  contentRef.current.style.backgroundSize = 'cover';
  contentRef.current.style.backgroundPosition = 'center';
}
const reset = () => {
  if (contentRef.current) {
    contentRef.current.style.color = 'black';
    contentRef.current.style.backgroundColor = 'white';
    contentRef.current.style.backgroundImage = '';
    contentRef.current.style.fontFamily = 'initial';
    contentRef.current.innerText = 'enter the content';

    // Optional: Remove selected class from color buttons
    document.querySelectorAll('button.color-selected').forEach(btn => {
      btn.classList.remove('color-selected');
    });
  }
}


  return (

    <><div className = 'heading'>
    <h1 id = "heading">Font expro</h1>
    <br></br>

</div>
<div id = 'parent'>
  
  <div className = "child1">
    <h1 contentEditable = "True" id = 'content'ref={contentRef}>enter the content</h1>
    <div id = 'but'><button id="down" onClick={() => downloadImage()}>download</button>
   <button id="down" onClick={reset}>Reset</button></div>
   

  </div>
 <div id = 'child2'>
  <div id = 'text-color'>
   <h2 id = 'subheading'> choose your text color</h2>
   <div id = 'coll'
   >
   <button id= 'red'onClick={()=>{textColor('red')}}></button>
   <button id='green'onClick={()=>{textColor('green')}}></button>
   <button id='blue' onClick={()=>{textColor('blue')}}></button>
   <button id ='yellow'onClick={()=>{textColor('yellow')}}></button>
   <button id ='purple' onClick={()=>{textColor('purple')}}></button>
   <input type='color' onChange={(e) => {textColor(e.target.value)}} />

   </div>
  
  </div>
  <div id='bg-color'>
    <h2 id = 'subheading'>choose your back-ground color</h2>
    <div id = 'bcoll'>
    <button id= 'red'onClick={()=>{bgColor('red')}}></button>
   <button id='green'onClick={()=>{bgColor('green')}}></button>
   <button id='blue' onClick={()=>{bgColor('blue')}}></button>
   <button id ='yellow'onClick={()=>{bgColor('yellow')}}></button>
   <button id ='purple' onClick={()=>{bgColor('purple')}}></button>
   <input type='color' onChange={(e) => {bgColor(e.target.value)}} />
    
    </div>
  
  </div>
  <div id='fonts'>
    <h2 id='subheading'>Choose your font style</h2>
    <div id='fcoll'>
        <button onClick={() => fontFamily('Arial')}>Arial</button>
        <button onClick={() => fontFamily('Georgia')}>Georgia</button>
        <button onClick={() => fontFamily('Times New Roman')}>Times New Roman</button>
        <button onClick={() => fontFamily('Courier New')}>Courier New</button>
        <button onClick={() => fontFamily('Verdana')}>Verdana</button>
        <select onChange={(e) => fontFamily(e.target.value)}>
            <option value="">Select Font</option>
            <option value="Arial">Arial</option>
            <option value="Georgia">Georgia</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
        </select>
    </div>
</div>

    

  </div>
    </div>



</>
 
  )
}

export default App