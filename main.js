const input = document.getElementById("input");
const button = document.getElementById("knapp");

// GET //
fetch('http://fed17.herokuapp.com/todos')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        console.log(jsonData);
        console.log(Object(jsonData));
        for (var newBox of jsonData) {
            boxholder.innerHTML +=
                `
        <div class="box">
        ${newBox.text}
        ${newBox.complete}
        </div>
        `;
        }
    });
//

//POST
button.addEventListener("click", function () {
    const postOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text: input.value, complete: false })
    };
    fetch('http://fed17.herokuapp.com/todos', postOptions);
});
//