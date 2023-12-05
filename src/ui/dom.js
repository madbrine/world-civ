
function div({ className: className, text: text, style: style }, child) {
    const el = document.createElement('div');
    typeof className === "string"
        ? el.classList.add(className)
        : console.error(`[Error Type] ${className} is not a string`);

    typeof text === "string" || typeof text === "number"
        ? el.appendChild(document.createTextNode(text))
        : console.error(`[Error Type] ${text} is not a string`);

    el.style.backgroundColor =
        typeof style.backgroundColor === "string"
        && style.backgroundColor

    el.style.height =
        typeof style.height === "string"
        && style.height

    el.style.width =
        typeof style.width === "string"
        && style.width

    el.style.borderColor =
        typeof style.borderColor === "string"
        && style.borderColor

    el.style.borderWidth =
        typeof style.borderWidth === "string"
        && style.borderWidth

        el.style.
            child && child.map((chil) => el.appendChild(chil));

    return el;
}

export default div;