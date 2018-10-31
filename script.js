console.log("Ticking Clock");

const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

const render = () => {
    jsContainer.innerHTML = `
    <div id="javascript">
        <h1>Challenge 1: Vanilla JavaScript</h1>
        <h3>The time is: ${new Date().toLocaleTimeString('en-US')}</h3>
    </div>
    `;

    ReactDOM.render(
        React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Challenge 2: React"
            ),
            React.createElement(
                "h3",
                null,
                "The time is: " + new Date().toLocaleTimeString('en-US')
            )
        ),
        reactContainer
    )
}

setInterval(render, 1000);