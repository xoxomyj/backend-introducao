/*******************************************************
* Objetivo: Aprender a trabalhar com estrutura de dados array e JSON
* data: 29/09/2023.
* autor: mariana!!!!!!!
* versão: 1.0
******************************************************/

// [ ] -> representa a estrutura array.
// { } -> representa a esturtura JSON.

const introducaoArray = function(){
    let listaDeNomes = ['José', 'Ana', 'Maria', 'Luiz', 'Carlos', 'Eduardo'];

    console.log(listaDeNomes);
    console.table(listaDeNomes);
    console.log(listaDeNomes.length);

    listaDeNomes.unshift('Ricardo')
    listaDeNomes.push('Roberto');
    listaDeNomes.pop();
    listaDeNomes.shift();

    listaDeNomes.splice(2,3);
    console.table(listaDeNomes);

    listaDeNomes.push('André da Cunha' , 'Ricardo Borges' , 'Joâo Vitor Cardoso Costa' , 10, true);
    

    console.log(typeof(listaDeNomes[7]));

    console.log(listaDeNomes[2]);

    
    
}

const percorrendoArray = function(){
    const listaDeProdutos = [ 'Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mousepad', 'Gabinete', 'Processador', 'HD'];

    // let cont = 0;
    // while(cont < listaDeProdutos.length){
    //     console.log('Nome do produto: ' + listaDeProdutos[cont])
    //     cont +=1;

    // }

    // for(let cont=0; cont < listaDeProdutos.length; cont++){
    //     console.log('Nome do produto: ' + listaDeProdutos[cont]);
    // }

    //foreach
    // listaDeProdutos.forEach(function(produto, indice){
    //     console.log(indice + 'Nome do Produto: ' + produto)



    // })

    cnsoole.log(listaDeProdutos.indexOf('Impressoras'));
    console.log(listaDeProdutos[3]);

    cnsoole.log(listaDeProdutos.includes('Notebook'));


    


}

const filtraProduto = function(){
    const listaDeProdutos = [ 'Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mousepad', 'Gabinete', 'Processador', 'HD'];
    
}
filtraProduto();




