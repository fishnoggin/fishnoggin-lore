editor = document.getElementById('editor');

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


function addSection(input){
    var div = null;
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
    editor.appendChild(div);
}