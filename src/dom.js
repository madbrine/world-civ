const dom = {
    div: function ({ className: className, id: id }, child) {
        const el = document.createElement('div');
        typeof className === "string"
            ? el.classList.add(className)
            : console.error(`[Error Type] ${className} is not a string`);

        typeof id === "string" || typeof id === "number"
            ? el.setAttribute("id", id)
            : console.error(`[Error Type] ${id} is not a string`);
        
        el.innerHTML = child ? child : '';

        return el;
    }
}
export default dom;