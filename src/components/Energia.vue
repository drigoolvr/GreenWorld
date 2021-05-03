<template>
    <div id = "id-energia" class = "energia">
        <div class = "energia-left">
            <h2>Energia Sustentável</h2>
            <br>
            <p>Energia sustentável é toda a energia gerada através de fontes renováveis que se reciclam naturalmente dentro de uma escala de tempo humana, sem grandes impactos ao meio ambiente.</p>
            <br>
            <p>Existem muitas fontes de energia sustentável utilizadas hoje no mundo. Além disso, há também muita controvérsia se determinadas fontes de energia são ou não sustentáveis, como é o caso da energia nuclear. Podemos listar 6 principais tipos de energias limpas que mais crescem atualmente:
            </p>
            <br><br>
            <div class = "energy-list">
                <figure class = "energy-type" v-for = "(energia, index) in energia" v-bind:key = "index" @click = "openEnergy(index)">
                    <img v-bind:src = "getImgUrl(index)" v-bind:alt = "energia.name" />         
                    <figcaption>{{energia.name}}</figcaption>                                                  
                </figure>
            </div>
        </div>

        <div class = "energia-right">
             <img src = "../assets/images/home/energiaimg.svg" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Energia',
    components: {
    
    },
    data() {
        return {
            energia: [
                { name: 'Biomassa', image: 'biomassa.jpg', route: 'biomassa' },
                { name: 'Eólica', image: 'eolica.jpg', route: 'eolica' },
                { name: 'Geotérmica', image: 'geo.jpg', route: 'geotermica' },
                { name: 'Hídrica', image: 'hidrica.png', route: 'hidrica' },
                { name: 'Ocêanica', image: 'oceanica.jpg', route: 'oceanica' },
                { name: 'Solar', image: 'sol.jpg', route: 'solar' }
            ]            
        }
    },
    methods: {
        getImgUrl: function(index) {
            let picture = this.energia[index].image;
            return require("../assets/images/energia/menu-icon/" + picture);
        },
        openEnergy: function(index) {
            this.$router.replace({path:'/' + this.energia[index].route});
        }
    }
}
</script>

<style scoped>
    .energia {
        width: 100%;
        padding: 40px 20px;
        display: flex;
    }

    .energia-left {
        width: 60%;
    }

    .energia-right img {
        width: 90%;
        height: 400px;
    }

    .energia-right {    
        display: flex;
        justify-content: flex-end;
        align-items: center;    
        width: 40%;
    }

    .energia-left h2 {
        color: var(--palleteGreen);
        font-size: 40px;
        text-shadow: 2px 2px 0px var(--palleteBlack);
        text-align: center;
    }

    .energia-left p {
        color: var(--palleteBlack);
		font-family: "Montserrat";
		font-size: 15px;
		line-height: 25px;
    }

    .energy-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

    .energy-type {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
        height: 200px;
        margin-bottom: 30px;
        border: 1px solid var(--palleteText);
        border-radius: 10px;
        box-shadow: 0px 0px 10px var(--palleteBlack);
        cursor: pointer;
        overflow: hidden;
        transition: all .2s ease; 
        padding: 5px;       
    }

    .energy-type:hover {
        background-color: var(--palleteGreen);
        color: var(--palleteWhite);
    }

    .energy-type img {
        width: 100%;
        height: 80%;
        margin-bottom: 10px;
    }

    .energy-type figcaption {
        text-align: center;
    }
</style>
