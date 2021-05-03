<template>
    <div class = "container">
        <h2>Energia Hídrica</h2>
        <br><br>
        <p>Energia hidrelétrica é o aproveitamento da energia cinética contida no fluxo de massas de água. A energia cinética promove a rotação das pás das turbinas que compõem o sistema da usina hidrelétrica para, posteriormente, ser transformada em energia elétrica pelo gerador do sistema. A forma na qual ela se manifesta na natureza é nos fluxos de água, como rios e lagos e pode ser aproveitada por meio de um desnível ou queda d'água. Pode ser convertida na forma de energia mecânica (rotação de um eixo) através de turbinas hidráulicas ou moinhos de água. As turbinas por sua vez podem ser usadas como acionamento de um equipamento industrial, como um compressor, ou de um gerador elétrico, com a finalidade de prover energia elétrica para uma rede de energia.</p>
        <br>
        <p>As represas hidroelétricas são a expressão quintessencial do controle humano sobre a natureza. Além da energia, criam reservatórios de água limpa, que, para alguns, constituem tanto um prazer para os olhos como um local de recreação pacífica.</p>
        <br><br>
        <img src = "../../assets/images/energia/hidrica/hidrica.png" />
        <br><br>
        <h3>Vantagens</h3>
        <br>
        <ul>
            <li>A sua viabilidade e a resposta às variações de procura são elevadas.</li>
            <li>É uma energia renovável, isto é, que não se esgota.</li>
            <li>Não polui o ambiente.</li>
            <li>Proporciona desenvolvimento local (estabelecimento de vias fluviais, construção de vias de comunicação, fomento de atividades de lazer e de turismo, etc).</li>
            <li>O seu custo de produção é baixo.</li>
            <li>Permite uma forma de abastecimento local para regadios, etc.</li>
        </ul>
        <br><br>
        <h3>Desvantagens</h3>
        <br>
        <ul>
            <li>Pode provocar o deslocamento de populações ribeirinhas e o alargamento de terra (dependendo, claro, do tipo de relevo e da região onde se localiza o empreendimento).</li>
            <li>Provoca a erosão de solos, os quais consequentemente afetam a vegetação local.</li>
            <li>A sua construção exige a formação de grandes reservatórios de água que acabam por provocar profundas alterações nos ecossistemas.</li>
            <li>Elevados custos de instalação e de desativação.</li>
        </ul>
        <br><br>

        <button class = "backButton" @click = "HomeReturn('#id-energia')">Voltar</button>
    </div>    
</template>

<script>
export default {
    name: 'Hidrica',
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
</style>
