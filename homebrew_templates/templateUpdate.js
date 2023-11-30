editor = document.getElementById('editor');

var active = null;

window.onload = function(){
    var editorContent = localStorage.getItem("content");
    if(editorContent){
        editor.innerHTML = editorContent;
    }else{
        editor.innerHTML = '<h2>Sample Header</h2><p>Type content here...</p>';
    }
}

function saveContent(){
    localStorage.setItem("content", editor.innerHTML);
}

var div = null;
function addSection(input){
    
    switch (input) {
        case 'h1':
            div = document.createElement('h1');
            div.innerHTML = 'Header 1'
            break;

        case 'h2':
            div = document.createElement('h2');
            div.innerHTML = 'Header 2'
            break;

        case 'h3':
            div = document.createElement('h3');
            div.innerHTML = 'Header 3'
            break;

        case 'h4':
            div = document.createElement('h4');
            div.innerHTML = 'Header 4'
            break;

        case 'h5':
            div = document.createElement('h5');
            div.innerHTML = 'Header 5'
            break;

        case 'p':
            div = document.createElement('p');
            div.innerHTML = 'Paragraph'
            break;

        default:
            break;
    }
    div.contentEditable = "true";
    addSection(div);
}

function addSection(newSection){
    var active = window.getSelection().anchorNode;
    
    if (active.nextSibling) {
        active.parentNode.insertBefore(newSection, active.nextSibling);
      }
      else {
        active.parentNode.appendChild(newSection);
      }
}

// deleting and keeping in short memory for undo

var deleted = [];

function sectionDelete(){
    
}

function clearAll(){
    while(editor.firstChild){
        editor.removeChild(editor.lastChild);
    }
}