let d = new Date();
let time = d.toLocaleDateString();
const myInterval = window.setInterval(myCallback, 1000)
function myCallback() {
    console.log(time)
}