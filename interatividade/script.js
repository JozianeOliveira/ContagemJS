function contar() {
    // Obtendo os elementos de input e o elemento para mostrar o resultado
    let ini = document.getElementById('txti'); // Campo de input para o valor inicial
    let fin = document.getElementById('txtf'); // Campo de input para o valor final
    let passo = document.getElementById('txtp'); // Campo de input para o valor do passo
    let res = document.getElementById('res'); // Div onde será exibido o resultado da contagem

    // Verificação se algum dos campos está vazio
    if (ini.value.length == 0 || fin.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!'); // Mostra um alerta de erro se faltar algum dado
    } else {
        res.innerHTML = 'Contando: <br>'; // Inicia a contagem exibindo o texto "Contando:"
        let i = Number(ini.value); // Converte o valor inicial para número
        let f = Number(fin.value); // Converte o valor final para número
        let p = Number(passo.value); // Converte o valor do passo para número
        
        // Verifica se o passo é menor ou igual a zero
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1'); // Mostra alerta de passo inválido
            p = 1; // Define o passo como 1 se o valor fornecido for inválido
        }

        // Verifica se a contagem é crescente ou regressiva
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`; // Adiciona cada número à div 'res' seguido de um emoji de seta
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`; // Adiciona cada número à div 'res' seguido de um emoji de seta
            }
        }
        res.innerHTML += `\u{1F3C1}`; // Adiciona um emoji de bandeira ao final da contagem
    }
}
