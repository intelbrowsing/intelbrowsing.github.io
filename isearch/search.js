function searchInYandex() {
    var usrRequest = document.getElementById('searchBar');
     window.open('https://yandex.ru/search/?text=' + usrRequest.value, '_blank');
}
function searchInGoogle() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://google.com/search?q=' + usrRequest.value, '_blank');
}
function searchInYahoo() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://search.yahoo.com/search?p=' + usrRequest.value, '_blank');
}
function searchInAol() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://search.aol.com/aol/search?q=' + usrRequest.value, '_blank');
}
function searchInRambler() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://nova.rambler.ru/search?query=' + usrRequest.value, '_blank');
}
function searchInMailRu() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://go.mail.ru/search?q=' + usrRequest.value, '_blank');
}

