<template>
    <div class = "container">
        <h2>Energia de Biomassa</h2>
        <br><br>
        <p>Biomassa é toda matéria orgânica, de origem vegetal ou animal, como restos de alimentos, cascas de frutas, madeira, entre outros, utilizada na produção de energia. Quando falamos de geração de energia, a biomassa se trata dos derivados recentes de organismos orgânicos utilizados como combustíveis para sua produção de energia, pode ser convertida em calor ou em outras formas de energia, e pode ser direta ou indireta.</p>
        <br>
        <p><strong>Direta:</strong><br>Sendo essa a mais utilizada, obtida pela combustão da biomassa na fase sólida.</p>
        <br>
        <p><strong>Indireta:</strong><br>Quando são produzidos gases e/ou líquidos combustíveis através da pirólise.</p>
        <br>
        <p><strong>Pirólise:</strong><br>Transformação de aquecimento na mistura de um componente orgânico com qualquer outra substancia.</p>
        <br>
        <p><strong>Combustão:</strong><br>Consiste na reação química entre dois ou mais reagentes, a queima direta da biomassa em caldeiras é realizada a altas temperaturas na presença abundante de oxigênio, produzindo vapor a alta pressão que é usado para mover turbinas de geradores elétricos.</p>
        <br>
        <p><strong>Gaseificação:</strong><br>É uma decomposição térmica completa das partículas de biomassa em um gás combustível, voláteis e cinzas em um reator fechado (gaseificador) na presença de qualquer agente oxidante fornecido externamente.</p>
        <br><br>
        <img src = "../../assets/images/energia/biomassa/ciclobiomassa.jpg" alt = "Ciclo Energético da Biomassa"/>
        <br><br>
        <h3>Vantagens</h3>
        <br>
        <ul>
            <li>Baixo custo de sua aquisição.</li>
            <li>A biomassa sólida é extremamente barata, sendo as suas cinzas menos agressivas para o ambiente.</li>
            <li>Menor risco ambiental.</li>
            <li>A não emissão de dióxido de enxofre, tão poluente ao meio ambiente.</li>
        </ul>
        <br><br>
        <h3>Desvantagens</h3>
        <br>
        <ul>
            <li>Dificuldade na estocagem e no armazenamento dos resíduos.</li>
            <li>Os biocombustíveis líquidos contribuem para a formação de chuvas ácidas</li>
            <li>Dificuldades no transporte e no armazenamento de biomassa sólida.</li>
            <li>Dificuldades no transporte e no armazenamento de biomassa sólida.</li>
        </ul>       
        <br><br>      
        <button class = "backButton" @click = "HomeReturn('#id-energia')">Voltar</button>
        <br><br>
    </div>    
</template>

<script>
export default {
    name: 'Biomassa',
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
