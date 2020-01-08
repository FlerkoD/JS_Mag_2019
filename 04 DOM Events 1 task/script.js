function add() {
    let input = document.querySelector('input[type="text"]').value;
    let list = document.getElementById('list');

    list.append(createItem(input));
}

function createItem(text) {
    let p = document.createElement('p');
    let label = document.createElement('label');
    label.textContent = text;
    let input = document.createElement('input');
    input.type = 'checkbox'

    p.append(label);
    label.prepend(input);

    return p;
}

function removeSelected() {
    /*
    for (let elem of document.querySelectorAll('input[type="checkbox"]:checked')) {
        elem.parentNode.parentNode.remove();
    }*/

    for (let elem of document.getElementById('list').childNodes) {
        if (elem.childNodes[0].childNodes[0].checked) { elem.remove(); }
    }
}

function hideSelected() {
    /*
    for (let elem of document.querySelectorAll('input[type="checkbox"]:checked')) {
        elem.checked = false;
        elem.hidden = true;
        elem.parentNode.hidden = true;
        elem.parentNode.parentNode.hidden = true;
    }*/

    for (let elem of document.getElementById('list').childNodes) {
        if (elem.childNodes[0].childNodes[0].checked) {
            elem.childNodes[0].childNodes[0].checked = false;
            elem.childNodes[0].childNodes[0].hidden = true;
            elem.childNodes[0].hidden = true;
            elem.hidden = true;
        }
    }
}

function showHidden() {
    /*
    for (let elem of document.querySelectorAll('[hidden]')) {
        elem.hidden = false;
    }*/
    for (let elem of document.getElementById('list').childNodes) {
        if (elem.hidden) {
            elem.hidden = false;
            elem.childNodes[0].hidden = false;
            elem.childNodes[0].childNodes[0].hidden = false;
        }
    }
}