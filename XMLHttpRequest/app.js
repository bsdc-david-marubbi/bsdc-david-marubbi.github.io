const myReq = new XMLHttpRequest();

const dadJokeContainer = document.getElementById('dadJokeContainer');

myReq.onload = function () {
    console.log(this.responseText)
    const data = JSON.parse(this.responseText);
    console.log(data)
    dadJokeContainer.innerText = data.joke;
    console.log(data.joke);
};

myReq.onerror = function (err) {
    console.log("Error!", err);
};

const getJoke = function () {
    myReq.open('get', 'https://icanhazdadjoke.com/', true);
    myReq.setRequestHeader('Accept', 'application/json');
    myReq.send();
}
