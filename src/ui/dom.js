import domStyle from "./domStyle";

function div({ className: className, text: text, style: style }, childs) {
    const el = document.createElement('div');

    if (className !== undefined) {
            typeof className === "string"
            ? el.classList.add(className)
            : console.error(`[Error Type] className: ${className} is not a string`);
    }

    if (text !== undefined) {
        typeof text === "string" || "number"
            ? el.appendChild(document.createTextNode(text))
            : console.error(`[Error Type] text with class "${className}": ${text} is not a string`);
    }

    style &&
        domStyle(el, style);

    childs &&
        childs.map((child) => el.appendChild(child));

    return el;
}

export default div;