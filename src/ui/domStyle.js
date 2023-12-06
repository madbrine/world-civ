import dom from './dom';

function domStyle(el, style) {
    typeof style.backgroundColor === "string"
        ? el.style.backgroundColor = style.backgroundColor
        : console.error(`[Error Type] style.backgoundColor: ${style.background} is not a string`);

    typeof style.border === "string"
    ? el.style.border = style.border
    : console.error(`[Error Type] style.border: ${style.border} is not a string`);

    typeof style.height === "string"
    ? el.style.height = style.height
    : console.error(`[Error Type] style.height: ${style.height} is not a string`);

    typeof style.width === "string"
    ? el.style.width = style.width
    : console.error(`[Error Type] style.width: ${style.width} is not a string`);
}

export default domStyle;