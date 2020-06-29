document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);
// Local TXT
function getText() {
    fetch('test.txt')
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            document.getElementById('output').innerHTML = data
        })
        .catch(function (err) {
            console.log(err);
        })
}
// Local JSON
function getJson() {
    fetch('posts.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let output = '';
            data.forEach(function (post) {
                output += `<li>${post.title}</li>
               <ul> <li>${post.body}</li></ul>`
            })
            document.getElementById('output').innerHTML = output
        })
        .catch(function (err) {
            console.log(err);
        })
}
// External API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let output = '';
            data.forEach(function (user) {
                output += `<li>${user.login}</li>`
            })
            document.getElementById('output').innerHTML = output
        })
        .catch(function (err) {
            console.log(err);
        })
}