const bob = document.getElementById("bobinarob");

let toggleBob = true;

function byebyebob() {
  if (toggleBob) {
    bob.innerHTML = `<h1>Can we fix it? maybe</h1>
        <img src="bess.png" alt="">`;
  } else {
    bob.innerHTML = `<h1>Yes we can!</h1>
        <img src="bob.png" alt="">`;
  }
  toggleBob = !toggleBob;
}
