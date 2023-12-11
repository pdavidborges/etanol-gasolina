//alert("JS carregado!");

//No javascript não se declara o tipo da variável

/*
var nome = 'Maria'; //String
var idade = 30; //int
var peso = 49.900 //float

console.log('Olá Javascript');
console.log('Nome: ' + nome);
console.log('Idade: '+ idade + ' anos');
console.log('Peso: '+ peso);
*/

function calcular(){
    //console.log('Função acionada!');
    
    //seleção de DOM
    var etanol = document.querySelector('#etanol');
    var gasolina = document.querySelector('#gasolina');

    //console.log(etanol.value);
    //console.log(gasolina.value);

    //Verificar se os valores são diferentes de vazio    
    if(etanol.value != '' && gasolina.value != ''){

        var resultado = parseFloat(etanol.value) / parseFloat(gasolina.value);    
        //console.log(resultado);
        
        //Mostrar a caixa com o resultado
        var result = document.querySelector('#result');    
        result.style.display='block';
        
        if(resultado > 0.7){
            //alert('Abasteça com Gasolina!');
            //Escrevendo um conteúdo dentro da
            result.innerHTML = 'Abasteça com <br> Gasolina';
        }

        else{
            //alert('Abasteça com Etanol');
            result.innerHTML = 'Abasteça com <br> Etanol';
        }
    }

    else{
        alert('Preencha todos os campos!');
    }
    
}

//calcular();