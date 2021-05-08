<template>
    <div class = "container">
        <h2>Energia Geotérmica</h2>
        <br><br>
        
        <p>Energia geotérmica, como o próprio nome indica: prefixo 'geo' que significa terra e sufixo 'térmica' calor, é a energia obtida a partir do calor proveniente do interior do nosso planeta Terra. A energia geotérmica é considerada uma das energias mais limpas e confiáveis das energias renováveis utilizáveis.</p>
        <br><br>
        <img src = "../../assets/images/energia/geotermica/nucleo.jpg" alt = "Nucleo" />
        <br><br>
        <p>O processo de aproveitamento da energia geotérmica é feito por meio de grandes perfurações no solo, visto que o calor do nosso planeta existe nas camadas inferiores da superfície da Terra. Porém em algumas partes do globo está mais perto da superfície do que em outras, nesses locais a utilização da energia geotérmica se torna mais viável.</p>
        <br>
        <p>Esse tipo de recurso energético é obtido por meio das rochas quentes, (secas e úmidas) e o vapor quente provenientes do interior da Terra. A energia geotérmica começou a ser explorada no início do século XX, embora já fosse utilizada pelos povos antigos para banhos e cozinhar alimentos nas chamadas fontes termais. Atualmente ela é produzida nas centrais geotérmicas, local em que ela é transformada em energia elétrica.</p>
        <br>
        <p>O calor é trazido para perto da superfície, devido a movimentos da crosta terrestre, por intrusão de magma fundido e pela circulação de águas subterrâneas formando reservatórios de água quente sob grande pressão.</p>
        <br><br>
        <h3>Utilização da Energia Geotérmica</h3>
        <br>
        <p>Devido a necessidade de adquirir energia elétrica de uma forma mais limpa e em quantidades cada vez maiores, foram desenvolvidos modos de usufruir desse calor para a geração de eletricidade. No entanto esta energia sob a forma de calor pode também ser utilizada de forma direta. Há três formas de utilizar a energia geotérmica:</p>
        <br>
        <p><strong>Utilização Direta:</strong><br>Reservatórios geotérmicos de temperaturas baixas moderadas (20ºC – 150ºC) podem ser aproveitados diretamente para fornecer calor para a indústria, aquecimento ambiente, termas e outros aproveitamentos comerciais.</p>
        <br><br>
        <img src = "../../assets/images/energia/geotermica/termas.jpg" alt = "Águas Termais" />
        <br><br>
        <p><strong>Centrais Geotérmicas:</strong><br>Aproveitamento direto de fluidos geotérmicos em centrais a altas temperaturas (> 150 ºC), para movimentar uma turbina e produzir energia elétrica.</p>
        <br>
        <p>A utilização da energia geotérmica é conseguida através da perfuração de poços de modo a alcançar os reservatórios, trazendo para a superfície o vapor da água quente de alta pressão, dirigindo o vapor e água quente a unidades distintas nas turbinas das centrais geotérmicas.</p>
        <br>
        <p>A energia térmica é, assim, convertida em energia elétrica. O fluido geotérmico arrefecido é injetado de volta ao reservatório onde é reaquecido, preservando o equilíbrio e a sustentabilidade do recurso. </p>
        <br><br>
        <img class = "central-geotermica" src = "../../assets/images/energia/geotermica/centralgeotermica.jpg" alt = "Central Geotérmica" />
        <br><br>
        <p><strong>Bombas de Calor Geotérmicas (BCG):</strong><br>Os sistemas geotérmicos de aquecimento e arrefecimento funcionam pelo bombeamento da água através de um tubo inserido no solo, que através da diferença de temperatura do subsolo aquecem ou arrefecem água e, em seguida, o ar dentro dos edifícios.</p>
        <br>
        <p>Além de utilizar as energias renováveis em vez de um combustível fóssil para aquecer os edifícios, um sistema de energia geotérmica usa 70% menos energia para executar o mesmo que um sistema convencional de aquecimento e refrigeração e 30% a 50% menos energia do que um novo sistema de aquecimento e refrigeração.</p>
        <br><br>
        <img class = "bomba-de-calor" src = "../../assets/images/energia/geotermica/bombadecalor.jpg" alt = "Bomba de Calor" />
        <br><br>
        <h3>Vantagens</h3>
        <br>
        <ul>
            <li>Menos poluição, proporcionando um ambiente energético alternativo, que evite a queima de combustíveis fósseis.</li>
            <li>Pequena quantidade de solo necessário para construir centrais geotérmicas.</li>
            <li>Contra outros tipos de fontes de energia renováveis, como energia eólica ou da energia solar, a energia geotérmica pode ser utilizada para a produção de eletricidade 24h/dia.</li>
            <li>Baixos preços de eletricidade, uma vez que as centrais de energia geotérmica têm baixos custos de administração.</li>
            <li>A energia geotérmica é praticamente inesgotável.</li>
            <li>Como todos os outros tipos de fontes renováveis, a energia geotérmica fornece a segurança do abastecimento de energia necessária para reduzir as importações de combustíveis convencionais.</li>
        </ul>
        <br><br>
        <h3>Desvantagens</h3>
        <br>
        <ul>
            <li>Em alguns depósitos, o sulfeto de hidrogénio, prejudicial à saúde e até mesmo causa de morte (em grandes quantidades), é permitido.</li>
            <li>Poluição dos depósitos de aquíferos.</li>
            <li>Deterioração da paisagem devido à poluição térmica.</li>
            <li>Não permite ser transportado.</li>
            <li>Elevado impacto ambiental.</li>
            <li>Projetos geotérmicos são caros.</li>
        </ul>
        <br><br>
        <button class = "backButton" @click = "HomeReturn('#id-energia')">Voltar</button>
        <br><br>
    </div>    
</template>

<script>
export default {
    name: 'Geotermica',
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
        max-width: 1000px;
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

    .central-geotermica,
    .bomba-de-calor {
        width: 90%;
        height: 400px;
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

        .central-geotermica,
        .bomba-de-calor {
            height: 300px;
        }
    }

    @media (min-width: 450px) and (max-width: 800px) {
        .container {
            width: 90%;
            padding: 10px;
        }
    }
</style>
