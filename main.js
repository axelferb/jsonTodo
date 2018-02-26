const input = document.getElementById("input");
const button = document.getElementById("knapp");
const completebutton = document.getElementsByClassName("completebutton");

// GET //
fetch('http://fed17.herokuapp.com/todos')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        for (var newBox of jsonData) {
            boxholder.innerHTML +=
                `
        <div class="box">
        ${newBox.text}
        ${newBox.complete}
        <button class="completebutton">True/False</button>
        </div>
        `;
            // completebutton.addEventListener("click", function () {
            //     body: JSON.stringify({ complete: true })
            // });
        }
        console.log(newBox.complete);
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
    location.reload();
});
