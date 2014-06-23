if (localStorage.getItem("upvote") === null && localStorage.getItem("downvote") === null) {
    resetVotes();
}

if (localStorage.getItem("upvote") === null) {
    var u = 0;
    document.getElementById('u').value = u;
    localStorage.setItem("upvote", u);
}

if (localStorage.getItem("downvote") === null) {
    var u = 0;
    document.getElementById('u').value = u;
    localStorage.setItem("downvote", u);
}
var u = parseInt(localStorage.getItem("upvote"));
var d = parseInt(localStorage.getItem("downvote"));

function addVote1() {
    document.getElementById('u').value = u;
    u = u + 1;
    localStorage.setItem("upvote", u);
}

function addVote2() {
    document.getElementById('d').value = d;
    d = d + 1;
    localStorage.setItem("downvote", d);
}

function resetVotes() {
    var u = 0;
    document.getElementById('u').value = u;
    localStorage.setItem("upvote", u);
    var d = 0;
    document.getElementById('d').value = d;
    localStorage.setItem("downvote", d);
}