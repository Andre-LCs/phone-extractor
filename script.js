function extrairNumerosTelefone() {
    const spansComTelefone = document.querySelectorAll('span[title]');
    const numerosTelefone = [];
    const regexNumeros = /\b55\s\d{2}\s(?:\d{4,5}-?\d{4}|\d{8,9})\b/g;
    spansComTelefone.forEach(span => {
        const titleText = span.getAttribute('title');
        const numerosEncontrados = titleText.match(regexNumeros);
        if (numerosEncontrados) {
            numerosEncontrados.forEach(numero => {
                const numeroLimpo = numero.replace(/\D/g, '');
                numerosTelefone.push(numeroLimpo);
            });
        }
    });
    return numerosTelefone;
}

function downloadNumerosTelefone(numeros) {
    const conteudo = numeros.map(numero => `\t${numero}`).join('\n');
    const blob = new Blob([conteudo], { type: 'text/csv' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'numeros_telefone.csv';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

const numerosTelefone = extrairNumerosTelefone();

if (numerosTelefone && numerosTelefone.length > 0) {
    downloadNumerosTelefone(numerosTelefone);
    console.log(`Foram encontrados ${numerosTelefone.length} números de telefone.`);
} else {
    console.log('Nenhum número de telefone encontrado.');
}
