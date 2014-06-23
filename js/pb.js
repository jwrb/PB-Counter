if (localStorage.getItem("upvote") === null && localStorage.getItem("downvote") === null) {
    resetVotes();
}

function pageLoad() {
    $('#u').html(u);
    $('#d').html(d);
}

function resetVotes() {
    u = 0;
    localStorage.setItem("upvote", u);
    $('#u').html(u);
    d = 0;
    localStorage.setItem("downvote", d);
    $('#d').html(d);
    
}

if (localStorage.getItem("upvote") === null) {
    var u = 0;
    document.getElementById('u').value = u;
    localStorage.setItem("upvote", u);
}

if (localStorage.getItem("downvote") === null) {
    var d = 0;
    document.getElementById('d').value = d;
    localStorage.setItem("downvote", d);
}
var u = parseInt(localStorage.getItem("upvote"));
var d = parseInt(localStorage.getItem("downvote"));

function upvote() {
    u = u + 1;
    $('#u').html(u);
    localStorage.setItem("upvote", u);
}

function downvote() {
    d = d + 1;
    $('#d').html(d);
    localStorage.setItem("downvote", d);
}

function emailData() {
    $('#emailData').attr('href', 'mailto:voting@data.pillorybarn.co.uk?subject=Voting%20Data&body=We%20had%20' + u + '%20votes%20for%20yes%20and%20' + d + '%20votes%20for%20no.')
}
