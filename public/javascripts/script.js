/*global fetch
global Vue*/
    
document.getElementById("myButton").addEventListener("click", function(event) {
    event.preventDefault();
    
    const url = "cat";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            let results = "";
            results += "<img src=\"" + json[0].url + "\" id=\"catImage\"></img>";
            console.log(json[0].url);
            document.getElementById("catFact").innerHTML = results;
        });
});

