function Generate() {
    let zipName = document.getElementById('zip-content').value + ".zip" ?? "example.zip"; // TODO change value after ?? so it appends _new to the original archive name 
    
    let blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, name);
}
//! ZIP Handler
// TODO: Sort files inside zip by their extension
// TODO: Perform set manipulations depending on settings the user selected

//!Helper functions 

const removeCommentsHTML = (htmlContent) => {
    return htmlContent.replace(/<!--(.*?)-->/gs, '');
};

const removeCommentsCSS = (cssContent) => {
    return cssContent.replace(/\/\*(.*?)\*\//gs, '');
};

const removeCommentsJS = (jsContent) => {
    return jsContent.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');
};

const minifyHTML = (htmlContent) => {
    // Remove leading and trailing whitespace
    htmlContent = htmlContent.trim();
    
    // Remove whitespace between HTML tags
    htmlContent = htmlContent.replace(/\s+</g, '<');
    
    // Remove whitespace within HTML tags
    htmlContent = htmlContent.replace(/>\s+/g, '>');
    
    // Remove comments
    htmlContent = removeCommentsHTML(htmlContent);
    
    // Return the minified HTML content
    return htmlContent;
};

const minifyCSS = (cssContent) => {
    // Remove leading and trailing whitespace
    cssContent = cssContent.trim();
    
    // Remove whitespace between CSS selectors
    cssContent = cssContent.replace(/\s*({|}|;)\s*/g, '$1');
    
    // Remove comments
    cssContent = removeCommentsCSS(cssContent);
    
    // Return the minified CSS content
    return cssContent;
};

const minifyJS = (jsContent) => {
    // Remove leading and trailing whitespace
    jsContent = jsContent.trim();
    
    // Remove whitespace between JavaScript statements
    jsContent = jsContent.replace(/;\s*/g, ';');
    
    // Remove comments
    jsContent = removeCommentsJS(jsContent);
    
    // Return the minified JS content
    return jsContent;
};


//!Event listeners

/* */