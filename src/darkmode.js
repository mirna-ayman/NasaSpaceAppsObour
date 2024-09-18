// import React, { useState, useEffect } from "react";

// const App2 = () => {
//     // Define your color variables as state variables
//     const [colors, setColors] = useState(["#fff", "#000", "#303030", "#f4f2f2", "#454443", "#1d1d1d"]);
//     const [selectedColor, setSelectedColor] = useState(colors[0]); // Default color

//     useEffect(() => {
//         // Retrieve the selected color from local storage when the component mounts
//         const storedColor = window.localStorage.getItem("color");
//         if (storedColor) {
//             setSelectedColor(storedColor);
//         }
//     }, []);

//     useEffect(() => {
//         // Update local storage when the selected color changes
//         window.localStorage.setItem("color", selectedColor);
//     }, [selectedColor]);

//     const toggleMode = (color) => {
//         setSelectedColor(color);
//     };

//     return (
//         <div className="App2">
//             <div id="color-mode">
//                 <div id="dark" data-color="black" onClick={() => toggleMode(colors[1])}>
//                     <i className="fa-solid fa-moon"></i>
//                 </div>
//                 <div id="light" data-color="white" className="active" onClick={() => toggleMode(colors[0])}>
//                     <i className="fa-solid fa-sun"></i>
//                 </div>
//             </div>
//             <div id="body" style={{ backgroundColor: selectedColor }}>
//                 {/* Other HTML elements here */}
//             </div>
//         </div>
//     );
// };

// export default App2;
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.getElementById("how-to-participate").classList.toggle('dark-mode');
    document.getElementById('how-to-participate').classList.toggle('light-mode');
    document.getElementById('Overview').classList.toggle('light-mode');
    document.getElementById("Overview").classList.toggle('dark-mode');
    document.querySelectorAll('.list-group-item').forEach(fun);
    function fun(item){
        item.classList.toggle('dark-mode');
    }
//     let p=document.getElementById('dark-text').classList.contains('text-white');
//    if(p) {
//     document.getElementById('dark-text').classList.remove('text-white');
//     document.getElementById('dark-text').classList.add('text-primary');
//    }
//    else{
//     document.getElementById('dark-text').classList.remove('text-primary');
//     document.getElementById('dark-text').classList.add('text-white');
//    }
//    let p2=document.getElementById('dark-text2').classList.contains('text-white');
//    if(p2) {
//     document.getElementById('dark-text2').classList.remove('text-white');
//     document.getElementById('dark-text2').classList.add('text-primary');
//    }
//    else{
//     document.getElementById('dark-text2').classList.remove('text-primary');
//     document.getElementById('dark-text2').classList.add('text-white');
//    }
});
