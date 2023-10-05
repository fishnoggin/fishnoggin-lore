editor = document.getElementById('editor');

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