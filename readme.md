<!-------- Question 1 Solve  -------->
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?


let title = document.getElementById("heading");
console.log(title);

let items = document.getElementsByClassName("list-item");
console.log(items[0]);

let firstItem = document.querySelector(".list-item");
console.log(firstItem);

let allItems = document.querySelectorAll(".list-item");
allItems.forEach(item => console.log(item));

<!-------- Question 2 Solve  -------->
2. How do you **create and insert a new element into the DOM**?

let newDiv = document.createElement("div");

newDiv.textContent = "Hello, I am new her";
newDiv.className = "new-box";

<!-------- Question 3 Solve  -------->
3. What is **Event Bubbling** and how does it work?
<div id="parent" style="padding:20px; background:lightblue;">
  Parent
  <button id="child">Click Me</button>
</div>

document.getElementById("child").addEventListener("click", function() {
  console.log("Child Button Clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent Div Clicked");
});

document.body.addEventListener("click", function() {
  console.log("Body Clicked");
});

<!-------- Question 4 Solve  -------->
4. What is **Event Delegation** in JavaScript? Why is it useful?
<ul id="menu">
  <li class="item">Home</li>
  <li class="item">About</li>
  <li class="item">Contact</li>
</ul>

document.getElementById("menu").addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("item")) {
    console.log("You clicked:", e.target.textContent);
  }
});

<!-------- Question 5 Solve  -------->
5. What is the difference between **preventDefault() and stopPropagation()** methods?
<a href="https://google.com" id="link">Go to Google</a>
document.getElementById("link").addEventListener("click", function(e) {
  e.preventDefault(); 
  console.log("Default action prevented!");
});

<div id="parent" style="padding:20px; background:red;">
  Parent
  <button id="child">Click Me</button>
</div>

document.getElementById("child").addEventListener("click", function(e) {
  e.stopPropagation();
  console.log("Child button clicked!");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked!");
});




