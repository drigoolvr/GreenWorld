<template>
    <div class = "container">
        <footer>

            <div class = "footer-top">
                <div class = "footer-logo">
                    <h2>APS <span>Sustentabilidade</span></h2>
                    <img src = "../assets/images/planetlogo.svg"/>
                </div>
                
                <div class = "social-media">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-twitter"></i>
                </div>
                <div class = "sign-up">
                    <p>ASSINE A NOSSA NEWSLETTER</p>
                    <i id = "signup-icon" class="far fa-envelope"></i> 
                </div>
            </div>
            <hr style="height:1px;border-width:0;color:#EEE;background-color:#EEE">
            <div class = "footer-bottom">
                <p>Atividades supervisionadas UNIP @2021</p>        
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    components: {
    
    }
}
</script>

<style scoped>
    .container {
        width: 100%;
        background-color: var(--palleteBlack);
        display: flex;
        justify-content: center;
    }

    footer {
        display: flex;
        flex-direction: column;
        max-width: 1500px;
        width: 100%;
        padding: 0px 20px;
    }

    .footer-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
    }

    .footer-logo {
        display: flex;
        align-items: center;
        width: 30%;
    }

    .footer-logo h2 {
        font-size: 40px;        
        color: var(--palleteGreen);
        text-shadow: 1px 1px 0px black;
    }

    .footer-logo h2 span {
        color: var(--palleteBlue);
    }

    .footer-logo img {
        width: 50px;
        height: 50px;
        margin-left: 10px;
    }

    .social-media { 
        display: flex;
        align-items: center;
    }

    .social-media i {
        margin: 10px;
        font-size: 30px;
        cursor: pointer;
        transition: all 0.5s ease;
        color: var(--palleteGreen);
        text-shadow: 1px 1px 0px black;
    }

    .social-media i:hover {
        color: var(--palleteBlue);
    }

    .sign-up {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 30%;
    }

    .sign-up p {
        margin-right: 20px;
        color: var(--palleteWhite);
        font-size: 20px;
    }

    #signup-icon {
        font-size: 30px;
        color: var(--palleteGreen);
        cursor: pointer;
        transition: all 0.5s ease;
        text-shadow: 1px 1px 0px black;
    }

    #signup-icon:hover {
        color: var(--palleteBlue);
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 90px;
    }

    .footer-bottom p {
        color: var(--palleteWhite);
        font-size: 20px;
        text-shadow: 1px 1px 0px black;
    }

    @media (max-width: 800px) {
        .footer-top {
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 150px;
            margin-bottom: 10px;
            padding-top: 10px;
        }

        .footer-logo {
            width: 100%;
            justify-content: center;
        }

        .footer-logo h2 {
            font-size: 30px;
        }

        .sign-up {
            width: 100%;
            justify-content: center;
        }

        .footer-bottom {
            height: 90px;
        }
    }

    @media (min-width: 800px) and (max-width: 1100px) {
        .footer-logo h2 {
            font-size: 30px;
        }
    }
</style>
