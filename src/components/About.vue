<template>
	<div class = "container">
		<div id = "id-about" class = "about">
			<div class = "about-left">
				<h2><span>Conscientização</span> para um planeta ecologicamente <span>sustentável</span></h2>
				<br><br>
				<p><i class="fas fa-quote-left green-quote-left"></i>Estou dizendo para vocês que há esperança, eu tenho visto isso. Mas ela não vem dos governos e corporações, ela vem das pessoas.<i class="fas fa-quote-right green-quote-right"></i><br><span>Greta Thunberg</span></p>				
			</div>
			<aside class = "about-right">
				<img src = "../assets/images/home/aboutimg.svg"/>			
			</aside>        
		</div>
	</div>    
</template>

<script>

export default {
    name: 'About',
    components: {

    }
}
</script>

<style scoped>
	.container {
		width: 100%;
		display: flex;
		justify-content: center;
	}

    .about {
		display: flex;
		justify-content: space-between;
		padding: 0px 20px;
		max-width: 1500px;
	}

	.about-left {
		width: 60%;
		display: flex;
		flex-direction: column;
		margin-top: 50px
	}	

	.about-left h2 {
		color: var(--palleteBlack);
		font-size: 60px;	
		letter-spacing: 1px;
	}

	.about-left h2 span {
		color: var(--palleteGreen);
		text-shadow: 1px 1px 0px var(--palleteBlack);
	}

	.about-left p {
		font-style: italic;
		font-size: 18px;
		line-height: 30px;
		width: 100%;
		color: var(--palleteBlack);
		font-family: "Montserrat";
	}

	.about-left p span {
		color: var(--palleteGreen);
		font-weight: bold;
		font-size: 25px;
		line-height: 50px;
		font-style: initial;
		text-shadow: 1px 1px 0px var(--palleteBlack);
		font-family: "Montserrat";
	}

	.green-quote-left {
        font-size: 20px;
        color: var(--palleteGreen);
        margin-right: 5px;
    }

    .green-quote-right {
        font-size: 20px;
        color: var(--palleteGreen);
        align-self: flex-end;
        margin-left: 5px;
    }

	.about-right {
		width: 40%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.about-right img {
		width: 450px;
		height: 450px;		
	}

	@media (max-width: 800px) {
		.about-left {
			width: 100%;
		}

		.about-right {
			display: none;
		}	

		.about-left h2 {
			font-size: 45px;
		}
	}

	@media (min-width: 800px) and (max-width: 1100px) {
		.about-left h2 {
			font-size: 50px;
		}

		.about-right img {
			width: 350px;
			height: 350px;
		}
	}

	
</style>
