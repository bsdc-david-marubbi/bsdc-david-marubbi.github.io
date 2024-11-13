console.log("Bob in a Rounded Orange Box is Running");

const bob = document.getElementById("bobinarob");
console.log(bob.innerHTML);

let hidebob = false;

function byebyebob() {
  if (hidebob) {
    bob.innerHTML = `<h1>Yes we can!</h1>
        <img src="bob.png" alt="">`;
  } else {
    bob.innerHTML = `<h1>Can we fix it?</h1>
        <img src="bess.png" alt="">`;
  }
  hidebob = !hidebob;
}
