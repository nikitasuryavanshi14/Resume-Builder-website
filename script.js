function addNewWEField() {
    //nsole.log("adding new field");//
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute('placeholder', ' please Enter here');


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewEQField() {

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute('placeholder', ' please Enter here');


    let eqOb = document.getElementById("eq");
    let eqAddButtonOb = document.getElementById("eqAddButton");

    eqOb.insertBefore(newNode, eqAddButtonOb);


}

function addNewLGField() {

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('lgField');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute('placeholder', ' Enter here');


    let lgOb = document.getElementById("lg");
    let lgAddButtonOb = document.getElementById("lgAddButton");

    lgOb.insertBefore(newNode, lgAddButtonOb);


}

function addNewSLField() {

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('slField');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 5);
    newNode.setAttribute('placeholder', ' Enter here');


    let slOb = document.getElementById("sl");
    let slAddButtonOb = document.getElementById("slAddButton");

    slOb.insertBefore(newNode, slAddButtonOb);


}
// generating cv
function generateCV() {
    console.log("generating cv");
    //let nameField = document.getElementById('nameFielf').value;

    //let nameT = document.getElementById('nameT');
    // nameT.innerHTML = nameField;

    //direct
    // document.getElementById("nameT").innerHTML = nameField;

}