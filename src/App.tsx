import './App.css';
import {useEffect} from 'react';
// const myEditor = cloudinary.mediaEditor();
// myEditor.update({
//   publicIds: ["sample"],
//   cloudName: "demo"
// });
// myEditor.show();
// myEditor.on("export",function(data){
//   console.log(data);
// })
function App() {
  useEffect(() =>{
    const myEditor = (window as any).cloudinary.mediaEditor();
    myEditor.update({
    publicIds: ["sample"],
    cloudName: "atul-silori",
    image: {
      steps: [     
        "resizeAndCrop",
        "imageOverlay",
        "textOverlays",
        "export"
      ]
    }
    });
    myEditor.show();
    myEditor.on("export",(data:any)=>{
    console.log(data);
    })
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
