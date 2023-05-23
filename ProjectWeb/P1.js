function updatePrice3() {
    // Get the selected option
    let option = document.getElementById("BSS").value;

    let prix = document.getElementById("BSSP");
    if (option == '39') {
        prix.value = '49.99';
    }
    if (option == '40') {
        prix.value = '54.99';
    }
    if (option == '41') {
        prix.value = '59.99';
    }
    if (option == '42') {
        prix.value = '64.99';
    }
    if (option == '43') {
        prix.value = '69.99';
    }
    if (option == '44') {
        prix.value = '74.99';
    }
}
function updatePrice4() {
    // Get the selected option
    let option = document.getElementById("WB").value;

    let prix = document.getElementById("WBP");
    if (option == 'M') {
        prix.value = '49.99';
    }
    if (option == 'L') {
        prix.value = '59.99';
    }
    if (option == 'XL') {
        prix.value = '69.99';
    }

}