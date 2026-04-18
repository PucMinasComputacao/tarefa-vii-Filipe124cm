// ===== 1) DADOS INICIAIS =====

// Perguntar nome
let nome = prompt("Digite seu nome:");

// Função para validar número
function pedirNumero(mensagem) {
    let valor;
    while (true) {
        valor = Number(prompt(mensagem));

        if (!isNaN(valor) && valor >= 0) {
            return valor;
        } else {
            alert("Valor inválido! Digite um número válido.");
        }
    }
}

// Perguntar renda mensal
let renda = pedirNumero("Digite sua renda mensal (R$):");

// Perguntar quantidade de despesas
let qtdDespesas = pedirNumero("Quantas despesas deseja informar? (1 a 5)");

// Regra: limite entre 1 e 5
if (qtdDespesas < 1) qtdDespesas = 1;
if (qtdDespesas > 5) qtdDespesas = 5;


// ===== 2) LANÇAMENTO DAS DESPESAS =====

let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let despesa = pedirNumero(`Digite o valor da despesa ${i}: R$`);
    totalDespesas += despesa;
}


// ===== 3) ANÁLISE DO ORÇAMENTO =====

let mensagemClassificacao = "";
let sobra = renda - totalDespesas;

if (totalDespesas > renda) {
    mensagemClassificacao = "⚠️ Atenção: você gastou mais do que ganhou!";
} else {
    let percentualSobra = (sobra / renda) * 100;

    if (percentualSobra >= 30) {
        mensagemClassificacao = "✅ Ótimo: boa margem de sobra!";
    } else {
        mensagemClassificacao = "🙂 Ok: dá para melhorar a sobra.";
    }
}


// ===== 4) RESULTADO FINAL =====

// formatar valores com 2 casas decimais
let rendaFormatada = renda.toFixed(2);
let despesasFormatadas = totalDespesas.toFixed(2);
let sobraFormatada = sobra.toFixed(2);

// Mensagem para ALERT
let resultadoAlert =
`Resumo de ${nome}

Renda: R$ ${rendaFormatada}
Despesas: R$ ${despesasFormatadas}
Sobra: R$ ${sobraFormatada}

${mensagemClassificacao}`;

alert(resultadoAlert);


// ===== 5) RESULTADO NO CONSOLE (BEM ORGANIZADO) =====

console.log("===== SIMULADOR DE ORÇAMENTO =====");
console.log("Nome:", nome);
console.log("Renda Mensal: R$", rendaFormatada);
console.log("Total de Despesas: R$", despesasFormatadas);
console.log("Sobra do Mês: R$", sobraFormatada);
console.log("Classificação:", mensagemClassificacao);
console.log("==================================");