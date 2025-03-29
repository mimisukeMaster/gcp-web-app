let dom = document.querySelector("#root")

let element = React.createElement(
    "div", {}, [
        React.createElement(
            "h2", {}, "Hello!"
        ),
        React.createElement(
            "h4", {className: "alert-primary"}, "React sample page."
        ),
        React.createElement(
            "ul", {className: "list-group"}, [
                React.createElement(
                    "li", {className: "list-group-item"}, "first item."
                ), 
                React.createElement(
                    "li", {className: "list-group-item"}, "second item."
                ), 
                React.createElement(
                    "li", {className: "list-group-item"}, "third item."
                ), 
            ]
        ),
    ])
ReactDOM.render(element, dom)
