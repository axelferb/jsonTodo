const input = document.getElementById("input");
const button = document.getElementById("knapp");
const completebutton = document.getElementsByClassName("completebutton");

// FUNCTION TO WRITE TODOS //
function writeTodos(jsonData) {
    for (var todo of jsonData) {
        boxholder.innerHTML +=
            `
    <div class="box">
    ${todo.text}
    ${todo.complete}
    <button class="completebutton">True/False</button>
    </div>
    `;
    }
};
//

// GET //
fetch('http://fed17.herokuapp.com/todos')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        writeTodos(jsonData);
    });
//

// POST //
button.addEventListener("click", function () {
    const postOptions = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ text: input.value, complete: false })
    };
    fetch('http://fed17.herokuapp.com/todos', postOptions);
    location.reload();
});
