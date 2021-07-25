let form = document.getElementById("form");
let form2 = document.getElementById("form2")

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let campo1 = document.getElementById("campo1");
    let campo2 = document.getElementById("campo2");
    let campo3 = document.getElementById("campo3");
    let campo4 = document.getElementById("campo4");
    let campo5 = document.getElementById("campo5");

    let dados = JSON.parse(localStorage.getItem("dadosClientes"));

    if(dados == null){
        dados = [];
    }

    let Registro = {
        nome: campo1.value,
        email: campo2.value,
        cpf: campo3.value,
        telefone: campo4.value,
        endereço: campo5.value
    }

    dados.push(Registro);

    localStorage.setItem("dadosClientes", JSON.stringify(dados));
    alert("Cliente cadastrado com sucesso!");

    campo1.value = "";
    campo2.value = "";
    campo3.value = "";
    campo4.value = "";
    campo5.value = "";

});

form2.addEventListener('submit', (e)=>{
    e.preventDefault();
    let campo6 = document.getElementById("campo6");
    let campo7 = document.getElementById("campo7");
    let campo8 = document.getElementById("campo8");
    let campo9 = document.getElementById("campo9");
    let campo10 = document.getElementById("campo10");

    let dados = JSON.parse(localStorage.getItem("dadosProdutos"));

    if(dados == null){
        dados = [];
    }

    let Registro = {
        codigo: campo6.value,
        produto: campo7.value,
        marca: campo8.value,
        quantidade: campo9.value,
        "descrição do produto": campo10.value
    }

    dados.push(Registro);

    localStorage.setItem("dadosProdutos", JSON.stringify(dados));
    alert("Produto cadastrado com sucesso!");

    campo6.value = "";
    campo7.value = "";
    campo8.value = "";
    campo9.value = "";
    campo10.value = "";
})