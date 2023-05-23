function updatePrice2() {
    // Get the selected option
    let option = document.getElementById("BTS").value;

    let prix = document.getElementById("BTSP");
    if (option == 'XS') {
        prix.value = '7.99';
    }
    if (option == 'S') {
        prix.value = '9.99';
    }
    if (option == 'M') {
        prix.value = '11.99';
    }
    if (option == 'L') {
        prix.value = '13.99';
    }
    if (option == 'XL') {
        prix.value = '15.99';
    }
    if (option == 'XXL') {
        prix.value = '17.99';
    }
}
function updatePrice5() {
    // Get the selected option
    let option = document.getElementById("NE").value;

    let prix = document.getElementById("NEP");
    if (option == '100') {
        prix.value = '109.99';
    }
    if (option == '250') {
        prix.value = '199.99';
    }
    if (option == '500') {
        prix.value = '249.99';
    }

}