function updatePrice1() {
    // Get the selected option
    let option = document.getElementById("SC").value;

    let prix = document.getElementById("SCP");
    if (option == 'XS') {
        prix.value = '29.99'
    };
    if (option == 'S') {
        prix.value = '34.99'
    };
    if (option == 'M') {
        prix.value = '39.99'
    };
    if (option == 'L') {
        prix.value = '44.99'
    };
    if (option == 'XL') {
        prix.value = '49.99'
    };
    if (option == 'XXL') {
        prix.value = '54.99'
    };
}
function updatePrice6() {
    // Get the selected option
    let option = document.getElementById("WS").value;

    let prix = document.getElementById("WSP");
    if (option == 'M') {
        prix.value = '39.99';
    }
    if (option == 'L') {
        prix.value = '54.99';
    }
    if (option == 'XL') {
        prix.value = '69.99';
    }

}