<template>
    <div id = "id-sustentabilidade" class = "sustentabilidade">
        <div class = "sustentabilidade-left">
            <img src = "../assets/images/home/sustentabilidadeimg.svg" />
        </div>

        <div class = "sustentabilidade-right">
            <h2>O que é Sustentabilidade?</h2>
            <br>
            <p>Sustentabilidade é um termo usado para definir ações e atividades humanas que visam suprir as necessidades atuais dos seres humanos, sem comprometer o futuro das próximas gerações, ou seja, a sustentabilidade está diretamente relacionada ao desenvolvimento econômico e material sem agredir o meio ambiente, usando os recursos naturais de forma inteligente para que eles se mantenham no futuro.
            </p>
            <br>
            <p>Seguindo estes parâmetros, a humanidade  pode garantir o desenvolvimento sustentável:</p>
            <br>
            <ul>
                <li>Exploração dos recursos vegetais de florestas e matas de forma controlada, garantindo o replantio sempre que necessário.</li>
                <li>Preservação total de áreas verdes não destinadas a exploração econômica.</li>
                <li>Ações que visem o incentivo à produção e consumo de alimentos orgânicos, pois estes não agridem 
                a natureza, além de serem benéficos à saúde dos seres humanos.</li>
                <li>Exploração dos recursos minerais (petróleo, carvão, minérios) de forma controlada, racionalizada e com  planejamento.</li>                
                <li>Criação de atitudes pessoais e empresarias voltadas para a reciclagem de resíduos sólidos, de gerar renda e diminuir a quantidade de lixo no solo.
                <li>Atitudes voltadas para  o consumo controlado de água, evitando ao máximo o desperdício. Adoção de medidas que visem a não poluição dos recursos hídricos, assim como a despoluição dos rios que se encontram poluídos ou contaminados.</li>
                <li>Uso de fontes de energia limpas e renováveis (eólica, geotérmica, hídrica e etc) para diminuir o consumo de combustíveis fósseis, além  de preservar as reservas de recursos minerais.</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sustentabilidade',
    components: {
    
    }
}
</script>

<style scoped>
    .sustentabilidade {
        width: 100%;
        padding: 40px 20px;
        background-color: rgba(0, 0, 0, 0.1);
        display: flex;
    }

    .sustentabilidade-left {
        width: 40%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .sustentabilidade-left img {
        width: 450px;
        height: 450px;
    }

    .sustentabilidade-right {        
        width: 60%;
    }

    .sustentabilidade-right h2 {
        color: var(--palleteGreen);
        font-size: 40px;
        text-shadow: 2px 2px 0px var(--palleteBlack);
        text-align: center;
    }

    .sustentabilidade-right p,
    .sustentabilidade-right ul li {
        color: var(--palleteBlack);
		font-family: "Montserrat";
		font-size: 15px;
		line-height: 25px;
    }

    .sustentabilidade-right ul li {
        margin-bottom: 10px;
    }

    .sustentabilidade-right ul {
        margin-left: 20px;
    }
</style>
