const dom = {
    div: function ({ className: className, text: text }, child) {
        const el = document.createElement('div');
        typeof className === "string"
            ? el.classList.add(className)
            : console.error(`[Error Type] ${className} is not a string`);

        typeof text === "string" || typeof text === "number"
            ? el.appendChild(document.createTextNode(text))
            : console.error(`[Error Type] ${text} is not a string`);
        
        child && child.map((chil) => el.appendChild(chil));
        
        return el;
    }
}
export default dom;