const url = "http://localhost:3071/funcionarios";
const resultado = document.getElementById("resultado");

const nome = document.getElementById("nome");
const cpf = document.getElementById("cpf");
const funcao = document.getElementById("funcao");
const form = document.getElementById("cadastro");

// LISTAR FUNCIONÁRIOS
async function exibirFuncionarios() {
    resultado.innerHTML = "";

    const response = await fetch(url);
    const data = await response.json();

    data.forEach((funcionario) => {
        const div = document.createElement("div");

        div.innerHTML = `
            <p><strong>Nome:</strong> ${funcionario.nome}</p>
            <p><strong>CPF:</strong> ${funcionario.cpf}</p>
            <p><strong>Função:</strong> ${funcionario.funcao}</p>
            <hr>
        `;

        resultado.appendChild(div);
    });
}

// CADASTRAR FUNCIONÁRIO
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        nome: nome.value,
        cpf: cpf.value,
        funcao: funcao.value
    };

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    alert("Funcionário cadastrado com sucesso!");

    nome.value = "";
    cpf.value = "";
    funcao.value = "";

    exibirFuncionarios();
});

// carregar ao abrir
exibirFuncionarios();