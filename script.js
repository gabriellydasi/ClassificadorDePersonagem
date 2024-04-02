const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
    let nome_heroi, xp_heroi, classificacao, continuar;
    
    do {
        console.clear(); // Limpa o console

        console.log("-----------------------------");
        console.log("|      Heroes' Odyssey      |");
        console.log("-----------------------------\n");

        rl.question("Nome do heroi: ", (nome) => {
            nome_heroi = nome;
            rl.question("Quantidade de xp: ", (xp) => {
                xp_heroi = parseInt(xp);

                // Define a classificação do heroi de acordo com sua quantidade de xp
                if (xp_heroi <= 1000){
                    classificacao = "Ferro";
                } else if (xp_heroi >= 1001 && xp_heroi <= 2000){
                    classificacao = "Bronze";
                } else if (xp_heroi >= 2001 && xp_heroi <= 5000){
                    classificacao = "Prata";
                } else if (xp_heroi >= 5001 && xp_heroi <= 7000){
                    classificacao = "Ouro";
                } else if (xp_heroi >= 7001 && xp_heroi <= 8000){
                    classificacao = "Platina";
                } else if (xp_heroi >= 8001 && xp_heroi <= 9000){
                    classificacao = "Ascendente";
                } else if (xp_heroi >= 9001 && xp_heroi <= 10000){
                    classificacao = "Imortal";
                } else {
                    classificacao = "Radiante";
                }

                // Exibe o nome, quantidade de xp e classificação do personagem 
                console.clear();
                console.log("\n---------------------------------");
                console.log("Nome: " + nome_heroi);
                console.log("Experiencia: " + xp_heroi + " XP");
                console.log("Classificacao: " + classificacao);
                console.log("---------------------------------\n");

                rl.question("Deseja continuar? (S/N)\n", (resp) => {
                    continuar = resp.toUpperCase();
                    if (continuar === 'S') {
                        main(); // Chama a função principal novamente
                    } else {
                        rl.close();
                    }
                });
            });
        });
    } while (continuar === 'S');
}

main();