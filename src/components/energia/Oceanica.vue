<template>
    <div class = "container">
        <h2>Energia Oceânica</h2>
        <br><br>
        <p>Também chamada energia das ondas, a energia oceânica é aquela que é obtida graças ao movimento gerado pelas marés. É uma energia renovável, com uma grande projeção do futuro, porque 70% do planeta é formado por água e, destes, 97% vem de mares e oceanos.</p>
        <br>
        <p>A energia das ondas e marés é uma fonte inesgotável de energia que provém do movimento da onda em direção à costa repetidas vezes. A energia das ondas e marés é uma das melhores formas de produzir energia a partir de fontes renováveis, e foi das primeiras a ser colocada em prática.</p>
        <br><br>
        <h3>Tipos de energia oceânica</h3>
        <br>
        <p><strong>Energia Olamotora:</strong><br>Também chamada energia das ondas, é aquela energia que vem da energia mecânica gerada pelo movimento das ondas. Estima-se que cerca de 70% da eletricidade gerada nos EUA em 2017 seja proveniente de energia das ondas. Esses dados apresentam um futuro bastante otimista para o setor e espera-se que seja uma das grandes revoluções energéticas nos próximos anos.</p>
        <br>
        <p>Dependendo da profundidade dos dispositivos, temos 3 tipos:</p>
        <br><br>
        <img class = "tipos-de-dispositivos" src = "../../assets/images/energia/oceanica/tipos.png" alt = "Tipos de Dispositivos" />
        <br><br>
        <p>(1) Dispositivos terrestres integrados em quebra-mares ou no fundo de águas rasas.</p>
        <p>(2 e 3) Dispositivos próximos à costa que são suportados (2) ou flutuam (3) em águas rasas (10-40m).</p>
        <p>(4 e 5) Dispositivos localizados fora da costa e podem ser encontrados na superfície (5) ou submersos (4) até 100m de profundidade.</p>
        <br>
        <p><strong>Energia Atual Marinha:</strong><br>A energia das correntes marinhas é um tipo de energia que é obtida aproveitando a energia cinética das correntes marinhas, como o nome indica. Embora não seja um tipo de energia muito explorado, tem a vantagem de ser mais previsível que o vento e a luz solar.</p>
        <br><br>
        <img class = "energia-atual-marinha" src = "../../assets/images/energia/oceanica/energiaatualmarinha.png" alt = "Energia Atual Marinha" />
        <br><br>
        <p>As correntes marinhas são basicamente geradas pelo aumento e queda das marés, que estão relacionadas às interações gravitacionais entre a terra, a lua e o sol. Levando isso em conta, a energia cinética obtida pelas marés é transformada em eletricidade da mesma forma que a energia eólica é obtida através do vento: graças às turbinas.</p>
        <br>
        <p><strong>Energia Térmica Oceânica:</strong><br>Também chamada de energia das marés, é produzida pelas diferenças entre as águas oceânicas profundas (mais frias) e superficiais (mais quentes), que têm a capacidade de mover uma máquina térmica e produzir um trabalho útil na forma de eletricidade. Como cada oceano tem sua própria temperatura, as áreas geográficas mais interessantes para explorar essa energia são as encontradas na zona tropical equatorial, uma vez que é a área onde as diferenças de temperatura são maiores.</p>
        <br>
        <p><strong>Energia Osmótica:</strong><br>A energia osmótica, ou energia azul, é obtida pela diferença na concentração de sal entre a água do mar e a água dos rios e possui grande potencial nas regiões que possuem grandes rios, como os Países Baixo.</p>
        <br>
        <p>Atualmente, esse processo pode ser realizado através de dois processos:</p>
        <br>
        <ul>
            <li>Eletrodiálise reversa (RED) que envolve a criação de baterias de sal onde os íons que irão gerar energia são transportados.</li>
            <li>Osmose com retardo de pressão (PRO) que envolve bombear água doce para uma câmara cheia de água do mar, gerando um aumento na pressão que gira a turbina.</li>
        </ul>
        <br>
        <p>Esse é provavelmente o método de gerar energia com menos informações disponíveis e será necessário esperar alguns anos para poder analisar corretamente os dados que as investigações emitem.</p>
        <br><br>
        <h3>Vantagens</h3>
        <br>
        <ul>
            <li>Fonte de energia renovável e inesgotável.</li>
            <li>Várias formas de recolher energia das ondas.</li>
            <li>Fáceis de prever.</li>
            <li>Baixos custos de manutenção e funcionamento.</li>
            <li>Sem danos a superfície da Terra.</li>
        </ul>
        <br><br>
        <h3>Desvantagens</h3>
        <br>
        <ul>
            <li>Adequadas apenas em certos locais.</li>
            <li>Afeta o ecossistema marítimo.</li>
            <li>Podem prejudica as rotas de návios privados e comerciais.</li>
            <li>Tempestades reduzem o desempenho.</li>
            <li>Mais cara em relação a outros tipos de energia sustentável.</li>
        </ul>
        <br><br>
        <button class = "backButton" @click = "HomeReturn('#id-energia')">Voltar</button>
        <br><br>
    </div>    
</template>

<script>
export default {
    name: 'Oceanica',
    components: {
    
    },
    created: function() {
        window.scrollTo(0, 0);
    },
    methods: {
        HomeReturn: function(id) {
            this.$emit('btnReturn', id);
        }
    }
}
</script>

<style scoped>
    .container {
        width: 70%;
        padding: 20px 50px;
        display: flex;
        flex-direction: column;
        margin: auto;
    }

    h2 {
        color: var(--palleteGreen);
        font-size: 40px;
        text-shadow: 2px 2px 0px var(--palleteBlack);
        text-align: center;
    }

    h3 {
        color: var(--palleteGreen);
        font-size: 30px;
        text-shadow: 2px 2px 0px var(--palleteBlack);
        text-align: center;
    }

    p, li, dd, strong {
        font-family: "Montserrat";
        color: var(--palleteBlack);
        font-size: 15px;
		line-height: 25px;
    }

    strong {
        color: var(--palleteBlue);
    }

    ul {
        width: 100%;
        margin-left: 20px;
    }

    img {
        width: 50%;
        height: 300px;
        margin: auto;
        border: 1px solid var(--palleteBlack);
        box-shadow: 0px 0px 10px var(--palleteText);
    }

    .tipos-de-dispositivos,
    .energia-atual-marinha {
        width: 60%;
        height: 200px;
    }

    .backButton {
        width: 120px;
        padding: 5px 10px;
        border: none;
        color: var(--palleteGreen);
        border: 2px solid var(--palleteGreen);        
        background: transparent;
        border-radius: 50px;
        cursor: pointer;
        font-size: 22px;
        margin: auto;
        transition: all .2s ease;
        outline: none;
    }

    .backButton:hover {
        background-color: var(--palleteGreen);
        color: var(--palleteWhite);
        text-shadow: 1px 1px 0px var(--palleteBlack);
    }  

    @media (max-width: 450px) {
        .container {
            width:100%;
            padding: 10px;
        }

        img {
            width: 90%;
        }

        ul {
            width: 90%;
        }
    }  
</style>
