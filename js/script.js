function limparCampos() {
    // Seleciona todos os campos de entrada e select no documento
    const inputs = document.querySelectorAll('input');
    const selects = document.querySelectorAll('select');

    // Limpa valores dos inputs
    inputs.forEach((input) => {
        input.value = '';
    });

    // Reseta selects
    selects.forEach((select) => {
        select.selectedIndex = 0;
    });
}
