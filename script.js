const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { //primeiro objeto da lista de perguntas
        enunciado: "qual a melhor maneira de se combater o desmatamento?", 
        alternativas: ["reflorestamento de áreas degradadas",
                        "implementação de leis mais rigorosas para a proteção das florestas"]
    },

    { // segundo objeto da lista de pergunta
        enunciado: "como podemos combater a desigualdade social de forma mais eficaz e sustentável?", 
        alternativas: ["implementar programas de educação e formação profissional acessíveis a todos",
                       "politícas de redistribuição de renda e oportunidades"]
    }
                ];
    let atual = 0;
    let perguntaAtual;
    
  function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPergunta.textcontent =
    
  }
