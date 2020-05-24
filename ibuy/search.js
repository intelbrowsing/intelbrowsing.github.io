function searchInYandexMarket() {
    var usrRequest = document.getElementById('searchBar');
     window.open('https://market.yandex.ru/search/?text=' + usrRequest.value, '_blank');
}
function searchInOZON() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://www.ozon.ru/search/?text=' + usrRequest.value, '_blank');
}
function searchInWildBerries() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://www.wildberries.ru/catalog/0/search.aspx?search=' + usrRequest.value + '&sort=popular', '_blank');
}
function searchInAliExpress() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://aliexpress.ru/af/s.html?d=y&origin=n&SearchText=' + usrRequest.value, '_blank');
}
function searchInEBay() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313.TR10.TRC1.A0.H0.Xsdsa.TRS0&_nkw=' + usrRequest.value, '_blank');
}
function searchInAmazon() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://www.amazon.com/s?k=' + usrRequest.value, '_blank');
}
function searchInAvito() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://avito.ru/rossiya?q=' + usrRequest.value, '_blank');
}
function searchInYoola() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://youla.ru/moskva?q=' + usrRequest.value, '_blank'); 
}
function searchInOlX() {
    var usrRequest = document.getElementById('searchBar');
    window.open('https://www.olx.ua/list/q-' + usrRequest.value, '_blank'); 
}