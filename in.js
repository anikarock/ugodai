window.onload = init;
function init() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = show;
    }

}
function show(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = 'img/' + name + '.jpg';
    image.src = name;
}