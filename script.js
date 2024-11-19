console.log("ann");

let a = 10;
let b = 20;

console.log (a+b);

let x = 5;
let y = "5";
console.log (x == y);


let f = 5;
let d = "5";
console.log (f === d);


let p = 5;
let q = "5";
console.log (p + q);


// document.getElementById("title");

function editColorText(){
    if(document.getElementById("title").classList.contains("hide")){
      document.getElementById("title").classList.remove("hide");
    }else{
    document.getElementById("title").classList.add("hide");}


}

document.getElementById("hideBTN").addEventListener("click",editColorText);



// function addElement() {
//     // สร้าง Element ใหม่ (p)
//     let newElement = document.createElement("p");
//     newElement.innerHTML = "New Element";

//     // เพิ่ม Element ใหม่นี้เข้าไปใน div ที่มี id="results"
//     document.getElementById("results").appendChild(newElement);
// }

// // เพิ่ม Event Listener ให้ปุ่ม addElement
// document.getElementById("addElement").addEventListener("click", addElement);

function addElement() {
    // ดึงค่าจาก input
    const inputValue = document.getElementById("todo").value;

    // ตรวจสอบว่ามีข้อมูลใน input หรือไม่
    if (inputValue.trim() !== "") {
        // สร้าง Element ใหม่ (p)
        let newElement = document.createElement("p");
        newElement.innerHTML = inputValue; // ใช้ค่าจาก input

        // เพิ่ม Element ใหม่นี้เข้าไปใน div ที่มี id="results"
        document.getElementById("results").appendChild(newElement);

        // ล้างค่าที่กรอกใน input หลังจากเพิ่ม
        document.getElementById("todo").value = "";
    } else {
        alert("Please enter something in the input field.");
    }
}

// เพิ่ม Event Listener ให้ปุ่ม addElement
document.getElementById("addElement").addEventListener("click", addElement);

function toggleProfile() {
    const profileInfo = document.getElementById("profileInfo");
    const greeting = document.getElementById("greeting");
    const button = document.getElementById("toggleButton");
    
    if (profileInfo.style.display === "none") {
        profileInfo.style.display = "block";
        greeting.style.display = "none";
        button.innerText = "Hide Profile";
    } else {
        profileInfo.style.display = "none";
        greeting.style.display = "block";
        button.innerText = "Show Profile";
    }
}



   // เพิ่ม Event Listener ให้กับปุ่ม
   document.getElementById("clearBtn").addEventListener("click", function() {
    // ล้างค่าของ input
    document.getElementById("todo").value = "";
   });


function clearResults() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // ล้างข้อความทั้งหมดใน div
}

// เพิ่ม Event Listener ให้กับปุ่ม
document.getElementById("addElement").addEventListener("click", addElement);
document.getElementById("clearResults").addEventListener("click", clearResults);