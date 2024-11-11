let readline = require(`readline-sync`);

let saques=1, saque = 0, depo =0,depos=0, esco = "", ex1 = "";
let ex2 = "";


console.log(`\n---------------------------------------\n`);
console.log("Bem-vindo ao sistema bancario da Caixa!");
console.log("\n---------------------------------------\n");



while(esco != `q`){////////Utilizando o while para trazer o menu de escolha enquanto a variavel esco for diferente de "q"
    console.log(`Opcoes do que voce pode fazer: \n`);

    console.log(`[d] Depositar\n[s] Sacar\n[e] Extrato\n[q] Sair\n`);

    esco = readline.question("Para voce escolher uma opcao basta digitar a letra que esta do lado da palavra desejada: ") 
    console.clear();////tentando deixar o console mais limpo
    if(esco == "e"){///Um "if" caso a variavel seja igual o "e", com isso o programa vai trazer o ex1 e o ex2 que tem a informação de quanto foi depositado e quanto foi sacado
        
        console.log("\n-----------------------------\n");
        console.log("depositado: \n",ex1);
        console.log("\n-----------------------------\n");
        console.log("Voce sacou: \n",ex2);
        console.log("\n-----------------------------\n");
        console.log("\nVoce tem R$",depos)
        console.log("\n-----------------------------\n");
    }
    

    else if(esco == "d"){///Caso a a variavel esco seja igual a "d", ai o console vai trazer a opção do deposito
        console.clear();

        depo = parseFloat(readline.question("Digite o valor que voce deseja depositar: "));
        if(depo < 0){///Se o usuário tentar depositar um valor negativo
            console.log("\n------------------------------------\n");
            console.log("Nao pode colocar um valor negativo!");
            console.log("\n------------------------------------\n");
        }
        else if(isNaN(depo)){
            console.log("\n------------------------------------\n");
            console.log("Digite um valor valido!");
            console.log("\n------------------------------------\n");
        }
        else{///Se ele não for um valor negativo, então ele irá fazer a soma no "depos"
            console.clear()
            depos += depo
            ex1 += "+" + "R$" + depo + "\n"
            console.log(ex1);
            console.log("\n---------------------------------\n");
            console.log("Voce tem R$", depos, " na sua conta");
            console.log("\n---------------------------------\n");
        }
    
    }
    else if(esco == "s"){///Se a variavel "esco" for igual a "s" e a outra variavel saques for menor ou igual a 3
        console.clear()

        if(saques > 3){///Se a variavel "saques" for maior que 3 o sistema ira avisar que ja alcançou o limite de saque
            console.log("\n------------------------------------\n");
            console.log("Voce ja sacou 3 vezes!");
            console.log("\n------------------------------------\n");
            saque = 0
        }
        else{
            saque = parseFloat(readline.question("Digite o valor que voce deseja sacar(voce so pode sacar 3 vezes por dia e em cada saque voce so podera sacar 500 reias): "));
        }
        if(saque > 500){///Caso o Usuário tente sacar um valor acima de  500 o sistema o relembrará sobre o limite
            console.log("\n------------------------------------\n");
            console.log("Voce so pode tirar R$500,00 por saque");
            console.log("\n------------------------------------\n");
        }
        else if(saque < 0){
            console.log("\n------------------------------------\n");
            console.log("Voce nao pode sacar um valor negativo!")
            console.log("\n------------------------------------\n");
        }

        else{///Se a variavel "saque" for menor que 500

            if(depos == 0 || depos < saque){///"if" caso o deposito não tenha saldo suficiente para fazer o saque
                console.log("\n------------------------------\n");
                console.log("Saldo Insuficiente");
                console.log("\n------------------------------\n");
            }
            else if (saque <= depos && saque > 0 && saques <= 3){
                depos -= saque 
                ex2 += "-" + "R$" + saque + "\n"
                console.log("--------------------------\n", ex2);
                console.log("Voce sacou R$",saque,"\nAgora voce tem R$", depos, "na sua conta\n--------------------------\n");
                saques++
            }
            else if(isNaN(saque)){
                console.log("\n--------------------------\n");
                console.log("Digite um valor valido!");
                console.log("\n--------------------------\n");
            }
            

        }
    }
   
}
