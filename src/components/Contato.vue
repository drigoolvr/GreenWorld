<template>
    <div id = "id-contato" class = "contato">
        <img src = "../assets/images/home/contactimg.svg" />
        <div class = "form-area">
            <h2>CONTATO</h2>
            <br>
            <p>Resta alguma dúvida? Entre em contato através do formulário abaixo.</p>
            <br><br>
            <div class = "formulario">
                <div class = "form-area-1">
                    <input type = "text" placeholder = "Nome Completo" name = "nome" maxlength="50" />
                    <input type = "email" placeholder = "Email" name = "email" maxlength="50"/>
                </div>
                <br>
                <div class = "form-area-2">
                    <input type = "tel" placeholder = "Telefone" name = "phone" maxlength="20" />
                    <input type = "text" placeholder = "Assunto" name = "assunto" maxlength="50" />
                </div>
                <br>
                <textarea name = "message" rows = "5" placeholder = "Mensagem" maxlength="500"></textarea>
                <br>
                <input class = "submit-button" type = "submit" @click = "SendMessage()"/>      
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'Contato',
    components: {
    
    },
    methods: {
        SendMessage: function() {
            alert("Formulário funcionando!");
        }
    }
}
</script>

<style scoped>
    .contato {
        width: 100%;
        padding: 40px 20px;
        background-color: rgba(0, 0, 0, 0.1);  
        display: flex;  
        justify-content: space-between;    
    }

    .contato img {
        width: 500px;
        height: 500px;
        margin: auto;       
    }

    .form-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60%;
    }

    .form-area h2 {
        color: var(--palleteGreen);
        font-size: 40px;
        text-shadow: 2px 2px 0px var(--palleteBlack);
        text-align: center;
    }

    .form-area p {
        color: var(--palleteText);
        font-family: "Montserrat";
    }

    .formulario {
        display: flex;
        flex-direction: column;
        width: 80%;
        font-family: "Montserrat";
    }

    .form-area-1,
    .form-area-2 {
        display: flex;
        justify-content: space-between;
    }

    .form-area-1 input,
    .form-area-2 input {
        font-family: "Montserrat";
        width: 48%;
        outline: none;
        padding: 5px
    }

    textarea {
        height: 200px;
        width: 100%;
        resize: none;
        font-family: "Montserrat";
        outline: none;
        padding: 5px;
    }

    .submit-button {
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

    .submit-button:hover {
        background-color: var(--palleteGreen);
        color: var(--palleteWhite);
        text-shadow: 1px 1px 0px var(--palleteBlack);
    }

    @media (max-width: 450px) {
		.contato img {
			display: none;
		}

        .form-area {
            width: 100%;
        }

        .formulario {
            width: 100%;
        }

        .form-area-1,
        .form-area-2 {
            flex-direction: column;
        }

        .form-area-1 input,
        .form-area-2 input {
            width: 100%;
        }

        .form-area-1 input:first-child,
        .form-area-2 input:first-child {
            margin-bottom: 18px;
        }

        .form-area p {
            text-align: center;
        }
	}
</style>
