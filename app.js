const readlineSync = require('readline-sync');

let op = -1;
let opp = -1
var flag = true;

const lista = [ ]

do {
    console.log("\n-----Academia Softex-----\n");
    console.log("1 - Cadastrar Aluno");
    console.log("2 - Editar Aluno");
    console.log("3 - Excluir Aluno");
    console.log("4 - Listar Alunos");
    console.log("5 - Alterar treino");
    console.log("0 - Sair");

    opp = readlineSync.question("\n\nOpcao: ");

    switch (opp) {
                    
        case '1':
            cadastrarAluno(-1);
            break;
                    
        case '2':
            EditarAluno();
            break;

        case '3':
            excluirAluno();
            break;

        case '4':
            listarAluno();
            break;

        case '5':
            alterarTreino();
            break;

        case '0':
            break;

        default:
            console.log("Opcao invalida.\n\n");

    }
            
} while(opp != '0');

function cadastrarAluno (indice) {
    let nomeAluno = readlineSync.question("\nNome: ");
    
    while (true) {
        var idadeAluno = parseInt(readlineSync.question("\nIdade: "));
        if (isNaN(idadeAluno)) {
            console.log("Idade invalida. Por favor, digite um numero inteiro.\n");
            
        }
        else {
            break;
        }
    }

    if (indice == -1) {
        lista.push({
            nome: nomeAluno,
            idade: idadeAluno,
            treino: 'Vazio'
        });
        console.log("Aluno Cadastrado com sucesso!");
    }
    else {
        lista[indice].nome = nomeAluno
        lista[indice].idade = idadeAluno
    }

    flag = true
}

function listarAluno () {
    console.log("\n");
    for (i = 0 ; i < lista.length ; i++ ) {
        console.log(`${i+1} - ${lista[i].nome} , ${lista[i].idade} anos, Treino: ${lista[i].treino};`);
    }
}

function EditarAluno () {
    console.log("\n");
    listarAluno();
    console.log("\n0 - Sair;")
    let opp = parseInt(readlineSync.question("\n\nUsuario a ser editado: "));

    while (true) {
        
        if (opp == "0") {
            break;
        }
        else if (opp <= lista.length && opp > 0) {
            console.log(`${lista[opp-1].nome}, ${lista[opp-1].idade} anos, ${lista[opp-1].treino}`);
            cadastrarAluno(opp-1);
            console.log("Aluno editado com sucesso!")
            break;
        }
        else {
            opp = parseInt(readlineSync.question("\n\nOpcao invalida. Digite novamente: "))
        }
    }
}

function excluirAluno () {
    
    listarAluno();
    console.log("\n0 - Cancelar;");
    let opp = parseInt(readlineSync.question("\n\nUsuario a ser excluido: "));
    
    while (true) {
        
        if (opp == "0") {
            break;
        }
        else if (opp <= lista.length && opp > 0) {
            lista.splice(opp-1, 1);
            console.log("Aluno excluido com sucesso!")
            break;
        }
        else {
            opp = parseInt(readlineSync.question("\n\nOpcao invalida. Digite novamente: "))
        }
    }
}

function alterarTreino () {
    console.log("\n");
    listarAluno();
    console.log("\n0 - Sair;")
    let opp = parseInt(readlineSync.question("\n\nUsuario a ser editado: "));
    
    while (true) {
        
        if (opp == "0") {
            break;
        }
        else if (opp <= lista.length && opp > 0) {
            console.log(`${lista[opp-1].nome}, ${lista[opp-1].idade} anos, ${lista[opp-1].treino}`);
            console.log(`\nTreino atual: ${lista[opp-1].treino}`);
            let treino = readlineSync.question("\nNovo treino: ");
            lista[opp-1].treino = treino;
            break;
        }

        else {
            opp = parseInt(readlineSync.question("\n\nOpcao invalida. Digite novamente: "))
        }
    }

}