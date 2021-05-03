<template>
    <header> 
        <div class = "header-left">
            <h1>APS <span>Sustentabilidade</span></h1>
            <img src = "../assets/images/planetlogo.svg"/>
        </div>

        <div class = "header-right">
            <nav>
                <ul class = "menu">
                    <li @click = "scrolling('#id-home')"><p>HOME</p></li>
                    <li @click = "scrolling('#id-sustentabilidade')"><p>SUSTENTABILIDADE</p></li>
                    <li>
                        <p @click = "scrolling('#id-energia')">ENERGIA <i class="fas fa-caret-down"></i></p>
                        <ul class = "sub-menu">                
                            <li @click = "openPage('biomassa')">Biomassa</li>
                            <li @click = "openPage('eolica')">Eólica</li>
                            <li @click = "openPage('geotermica')">Geotérmica</li>
                            <li @click = "openPage('hidrica')">Hídrica</li>
                            <li @click = "openPage('oceanica')">Oceânica</li>
                            <li @click = "openPage('solar')">Solar</li>                            
                        </ul>
                    </li>
                    <li @click = "scrolling('#id-contato')"><p>CONTATO</p></li>
                </ul>
            </nav>

            <div class = "menu-toggle">
                <i class="fas fa-bars" id = "menu-toggle-button" @click = "openMenu()"></i>
            </div>

            <div class = "menu-mobile">
                <ul>
                    <li><i class="fas fa-times" id = "menu-toggle-button-close" @click = "closeMenu()"></i></li>
                    <br>
                    <li @click = "scrolling('#id-home')">Home</li>
                    <li @click = "scrolling('#id-sustentabilidade')">Sustentabilidade</li>
                    <li @click = "scrolling('#id-energia')">Energia</li>
                    <li>
                        <ul class = "menu-energia-mobile">                
                            <li @click = "openPage('biomassa')">Biomassa</li>
                            <li @click = "openPage('eolica')">Eólica</li>
                            <li @click = "openPage('geotermica')">Geotérmica</li>
                            <li @click = "openPage('hidrica')">Hídrica</li>
                            <li @click = "openPage('oceanica')">Oceânica</li>
                            <li @click = "openPage('solar')">Solar</li>                            
                        </ul>
                    </li>                    
                    <li @click = "scrolling('#id-contato')">Contato</li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    components: {
    
    },
    methods: {
        openMenu: function() {            
            document.querySelector(".menu-mobile").style.left = "40%";            
        },
        closeMenu: function() {
            document.querySelector(".menu-mobile").style.left = "100%";
        },
        openPage: function(page) { 
            if(page != this.$route.name) {
                document.querySelector(".menu-mobile").style.left = "100%";
                this.$router.replace({path:'/' + page});
            }
        },
        scrolling: function(id) {    
            document.querySelector(".menu-mobile").style.left = "100%";                                
            if(this.$route.name == 'home') {  
                if(id != '#id-home') {                  
                    let el = document.querySelector(id);
                    let coord = el.getBoundingClientRect();
                    coord = coord.top + window.scrollY;
                    document.querySelector('html').scroll({
                        top: coord,
                        left: 0,
                        behavior: 'smooth'
                    });    
                }                    
            } else {
                this.$emit('btnReturn', id);
            }                       
                         
        }     
    }
}
</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-family: 'Bebas Neue';
        padding: 20px;
    }

    .header-left {
        display: flex;
        align-items: center;
    }

    .header-left img {
        width: 50px;
        height: 50px;
        margin-left: 10px;
    }

    .header-left h1 {
        color: var(--palleteGreen);
        font-size: 40px;
        text-shadow: 2px 2px 0px var(--palleteBlack);
    }

    .header-left span {
        color: var(--palleteBlue);
    }

    .header-right {
        position: relative;
        width: fit-content;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .menu {
        display: flex;    
        position: relative;
        z-index: 200;
    }

    .menu > li {
        position: relative;
        width: fit-content;
        list-style-type: none;
        cursor: pointer;
        margin-left: 27px;
        text-align: center;
    }

    .menu > li > p {
        transition: all 0.5s ease;
        color: var(--palleteGreen);
        font-size: 25px;
        font-family:"Bebas Neue";
        text-shadow: 1px 1px 0px var(--palleteBlack);
    }

    .menu > li > p:hover {
        color: var(--palleteBlue);
    }

    .menu > li:hover > .sub-menu {
        height: 180px;             
    }

    .sub-menu {
        position: absolute;
        top: 100%;
        left: 0%;
        height: 0px;
        overflow: hidden;
        border-radius: 5px;
        list-style-type: none;
        background-color: var(--palleteGreen);
        padding: 0px 10px;        
        border-radius: 5px;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .sub-menu > li {
        color: var(--palleteWhite);
        transition: color 0.5s ease;
        text-shadow: 2px 2px 0px var(--palleteBlack);
        font-size: 22px;
        text-align: left;
    }

    .sub-menu > li:hover {
        color: var(--palleteBlue);
    }

    .menu-toggle {
        display: none;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
    }

    #menu-toggle-button {
        font-size: 40px;
        cursor: pointer;
        outline: none;
        border: none;
        color: var(--palleteGreen);
        transition: all 0.5s ease;
    }

    #menu-toggle-button-close {
        font-size: 40px;
        cursor: pointer;
        outline: none;
        border: none;
        color: var(--palleteWhite);
        transition: all 0.5s ease;
    }

    #menu-toggle-button:hover {
        color: var(--palleteBlue);
    }

    .menu-mobile {
        position:fixed;
        left: 100%;
        top: 0px;
        width: 60%;
        height: 100%;
        transition: all 0.5s ease;
        display: flex;
        justify-content: center;  
        background-color: var(--palleteGreen);  
        padding: 20px 0px; 
        border-left: 1px solid var(--palleteBlack);   
        z-index: 150;    
    }

    .menu-mobile > ul {
        list-style-type: none;
        width: 100%;
        padding: 10px 0px;                
    }

    .menu-mobile > ul > li {
        text-align: center;
        color: var(--palleteWhite);
        font-size: 25px;
        list-style-type: none;
        margin-bottom: 15px;
        transition: all 0.5s ease;
        cursor: pointer;
        text-shadow: 0px 0px 10px var(--palleteBlack);
    }

    .menu-mobile > ul > li:hover {
        color: var(--palleteBlue);
    }

    .menu-energia-mobile {
        border-top: 1px solid var(--palleteWhite);
        border-bottom: 1px solid var(--palleteWhite);        
        padding: 10px 0px;
    }

    .menu-energia-mobile li {
        font-size: 22px;
        color: var(--palleteWhite);
        line-height: 30px;
        list-style-type: none;
    }

    @media (max-width:450px) {
        .header-left h1 {            
            font-size: 30px;
        }

        .header-left img {
            width: 30px;
            height: 30px;
            margin-left: 10px;
        }
        
        nav {
            display: none;
        }

        .menu-toggle {
            display: flex;
        }

        #menu-toggle-button:hover {
            color: var(--palleteBlue);
        }
    }
</style>
