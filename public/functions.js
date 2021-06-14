function clicked() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.countapi.xyz/hit/test_site.com/1ccb732e-b55a-4404-ad3f-0f99c02fe44e");
    xhr.responseType = "json";
    xhr.onload = function() {
        alert(`This button has been clicked ${this.response.value} times!`);
    }
    xhr.send();
}
