<template>
    <div class = "container">
        <h2>Energia Eólica</h2>
        <br><br>
        <p>A energia eólica é aquela obtida a partir da força do vento, esse processo acontece por meio do aerogerador, equipamento que ao entrar em contato com o vento faz movimentos de rotação e abastece a rede elétrica. Ela parte do mesmo princípio da utilização de aerogeradores para produzir eletricidade, moinhos de vento para produzir energia mecânica ou velas para impulsionar veleiros. Ao longo do tempo, o homem começou a utilizar a força dos ventos não só para gerar energia mecânica, mas também elétrica.</p>
        <br><br>
        <img src = "../../assets/images/energia/eolica/moinho.png" alt = "Moinho de Vento" />
        <br><br>        
        <p>A geração de energia eólica pode acontecer por meio de 3 sistemas distintos. Confira quais são:</p>
        <br>
        <p><strong>Sistemas isolados:</strong><br>São de pequeno porte e costumam ser utilizados para abastecer regiões onde não é viável fazer uma extensão da rede elétrica. São aplicados com facilidade em residências.</p>
        <br>
        <p><strong>Sistemas híbridos:</strong><br>Utilizam mais de uma fonte para a geração de energia, por exemplo, painéis fotovoltaicos. São usados para gerar energia eólica para uma maior quantidade de usuários.</p>
        <br>
        <p><strong>Sistemas integrados à rede:</strong><br>É o sistema presente nos parques eólicos, que fazem uso de um grande número de aerogeradores. Toda a energia produzida é entregue diretamente à rede elétrica.</p>
        <br><br>
        <img src = "../../assets/images/energia/eolica/funcionamento.png" alt = "Funcionamento de uma turbina eólica"/>
        <br><br>
        <h3>Vantagens</h3>
        <br>
        <ul>
            <li>Como é um tipo de energia alternativa, com baixo custo, há benefícios financeiros para os usuários.</li>
            <li>Os aerogeradores não necessitam de outros combustíveis para o seu funcionamento.</li>
            <li>Fácil instalação e desinstalação.</li>
            <li>Baixo risco de acidentes.</li>
            <li>Autonomia energética.</li>
        </ul>
        <br><br>
        <h3>Desvantagens</h3>
        <br>
        <ul>
            <li>Dificuldade de armazenamento.</li>
            <li>Limitação na intensidade do vento.</li>
            <li>Poluição sonora.</li>
            <li>Acidentes com pássaros.</li>
        </ul>
        <br><br>
        <img src = "../../assets/images/energia/eolica/turbinas.jpg" alt = "Turbinas"/>
        <br><br>

        <button class = "backButton" @click = "HomeReturn('#id-energia')">Voltar</button>
    </div>    
</template>

<script>
export default {
    name: 'Eolica',
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
