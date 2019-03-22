// mainContainer = document.getElementById("main-area");

// function generatekocka() {
//     var kocka = document.createElement("div");
//     kocka.classList.add('kocka');
//     mainContainer.appendChild(kocka);
//     kocka.addEventListener('click', function(event) {
//     for (var index = 0; index < 2; index++) {
//         generatekocka()
//     }
// })
// }
// generatekocka()



// mainContainer = document.getElementById("main-area");

// function generatekocka() {
//     var kocka = document.createElement("div");
//     kocka.classList.add('kocka');
//     mainContainer.appendChild(kocka);
//     kocka.addEventListener('mouseover', function(event) {
//         kocka.classList.remove('kocka');
//         kocka.classList.add('kocka2');

//         kocka.addEventListener('mouseleave',  function(event) {
//             kocka.classList.remove('kocka2');
//             kocka.classList.add('kocka');
        
           
//         } 
// }

// ) 

// )
// }
// generatekocka()

// mainContainer = document.getElementById("main-area");



// function generatekocka() {

//     var kocka = document.createElement("div");
//     mainContainer.appendChild(kocka);
//     window.addEventListener('resize', function(event) {
//         var w = window.innerWidth;
//         var h = window.innerHeight;
//         document.getElementsByClassName("kocka").innerHTML = "Width: " + w + "<br>Height: " + h;
//         console.log('width =' + w + ' height =' + h)
//     });
    
// }

// generatekocka()


// var mnozenje = function(broj1, broj2) {
//     return broj1 * broj2;
// }

// var sobiranje = function(broj1, broj2) {
//     return broj1 + broj2;
// }

// var odzemanje = function(broj1, broj2) {
//     return broj1 - broj2;
// }

// // var delenje = function(broj1, broj2) {
// //     return broj1 / broj2;
// // }

// function reportThenMultiply(num1, num2, callback) {
//     console.log("we are about to multiply " + num1 + " and " + num2 + " today");
//     return callback(num1, num2);
// }

// var rezultat1 = reportThenMultiply(34, 56, mnozenje);
// var rezultat2 = reportThenMultiply(32344, 56576, sobiranje);
// var rezultat3 = reportThenMultiply(32344, 56786, function(broj1, broj2) {
//     console.log("haha im not doing anything with these numbers")
// });

// function mouseoverFunc(event) {
//     for (var index = 0; index < 2; index++) {
//         generateSquare();
//     }
//     event.target.removeEventListener("mouseover", mouseoverFunc, false);
// }

// function generateSquare() {
//     var el = document.createElement("div");

//     el.style.height = "100px";
//     el.style.width = "100px";
//     el.style.marginBottom = "10px";
//     el.style.marginRight = "10px";
//     el.style.backgroundColor = "maroon";
//     document.body.appendChild(el);
//     el.addEventListener("mouseover", mouseoverFunc);

//     el.addEventListener("click", function(event) {
//         event.target.parentNode.removeChild(event.target);
//     });

// }
// document.body.style.display = "flex";
// generateSquare();



// window.addEventListener("load", function(event) {
    
//     alert("ne ti davam beee");
// })

// function makeParagraph(){
//     var para = document.createElement("p");
//     para.innerHTML = "This is a sample text";
//     para.id = "hai";
//     document.body.appendChild(para);

//     var baton = document.createElement("button");
//     baton.innerHTML = "Click me plox";
//     document.body.appendChild(baton);

//     baton.addEventListener("click", function(event) {
//         var paragraph = document.getElementById("hai");
//         paragraph.style.fontSize = "48px";
//         paragraph.style.color = "orange";
//     })
// }
// makeParagraph();

// function resize() {
//     window.addEventListener("resize", function(event) {
//         document.body.innerHTML = "";
//         var text = "The width is " + event.target.innerWidth + 
//         " and the height is " + event.target.innerHeight + " of the window";
//         var p = document.createElement("p");
//         p.innerHTML = text;
//         document.body.appendChild(p);
//     })
// }

// resize();






mainContainer = document.getElementById("main-area");


var forma = document.createElement("form");
mainContainer.appendChild(forma);

var inputFirstName = document.createElement('input');
    inputFirstName.type = 'text';
    inputFirstName.id = 'FirstName1';
    inputFirstName.placeholder = 'First Name';
    forma.appendChild(inputFirstName);

var inputLastName = document.createElement('input');
    inputLastName.type = 'text';
    inputLastName.id = 'LastName1'
    inputLastName.placeholder = 'Last Name'
    forma.appendChild(inputLastName);  
    
var inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.id = 'email1'
    inputEmail.placeholder = 'Yor E-mail'
    forma.appendChild(inputEmail);
    
var inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.id = 'password1'
    inputPassword.placeholder = 'Your password'
    forma.appendChild(inputPassword);



var submitButton = document.createElement('button');    
    submitButton.innerText = 'Sing Up'
    mainContainer.appendChild(submitButton);
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        var firstname11 = document.getElementById('FirstName1').value;
        var lastName1 = document.getElementById('LastName1').value;
        var email1 = document.getElementById('email1').value;
        var password1 = document.getElementById('password1').value;

        var result = 'First Name: ' + firstname11 + ' ' + 'Last Name: ' +  lastName1 + ' ' + 'E-mail: ' +  email1 + ' ' + 'Password: ' +  password1;

        console.log(result);
        
    })



    