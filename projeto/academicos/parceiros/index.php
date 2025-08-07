
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
	<title>Acadêmicos | Parceiros</title>	
	<script src="assets/jquery171.min.js"></script>
	<link rel="stylesheet" type="text/css" href="assets/estilo.css">	
	<script>
		$(document).ready(function(){
			var last = "inicio";
			$('.btn').hover(
				function(){var src = $(this).attr("src"); $(this).attr("src", src.replace('.png', '2.png'))}, 
				function(){var src = $(this).attr("src"); $(this).attr("src", src.replace('2.png', '.png'))}
			);
			$('.btn').click(function(){
				var last_tela = $("#tela-" + last);				
				var atual = $(this).attr("id");				
				var tela = $("#tela-" + atual);
				last = atual;
				last_tela.fadeOut(200, function(){
					tela.fadeIn(800);	
				});
			});

			$('#evento-btn1').click(function(){
				if ($(this).next().css('display')=='block'){return;}
				$('#evento-btn2').next().hide();
				$('#evento-btn3').next().hide();
				$(this).next().slideToggle();
				$('#evento-btn2').animate({top: "325"});
				$('#evento-btn3').animate({top: "350"});
			});
			$('#evento-btn2').click(function(){
				if ($(this).next().css('display')=='block'){return;}
				$('#evento-btn1').next().hide();
				$('#evento-btn3').next().hide();
				$(this).next().slideToggle();
				$('#evento-btn2').animate({top: "25"});
				$('#evento-btn3').animate({top: "350"});
			});
			$('#evento-btn3').click(function(){
				if ($(this).next().css('display')=='block'){return;}
				$('#evento-btn1').next().hide();
				$('#evento-btn2').next().hide();
				$(this).next().slideToggle();				
				$('#evento-btn1').animate({top: "0"});
				$('#evento-btn2').animate({top: "25"});
				$('#evento-btn3').animate({top: "50"});

			});

		});
	</script>
</head>

<body>

<div id="container">
	<img src="assets/images/logo.png" id="logo">

	<div id="menu">
		<img id="inicio" src='assets/images/bt_inicio.png' class='btn'/>
		<img id="quemsomos" src='assets/images/bt_quemsomos.png' class='btn'/>
		<img id="plataforma" src='assets/images/bt_plataforma.png' class='btn'/>	
		<img id="eventos" src='assets/images/bt_eventos.png' class='btn'/>
		<img id="patrocinio" src='assets/images/bt_patrocinio.png' class='btn'/>
		<img id="downloads" src='assets/images/bt_downloads.png' class='btn'/>
		<img id="contatos" src='assets/images/bt_contatos.png' class='btn'/>	
	</div>

	<div id="tela">
		<div id="tela-inicio">
			<div id="papel">
				<div id="over">
					<p style="margin-left: 20px; margin-right: 6px;">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia libero nunc, pulvinar ultrices tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.<br/><br/> Duis et dui non justo tempor bibendum sed ac arcu. Ut sed sagittis nibh. Pellentesque sit amet arcu neque. Curabitur varius nisl quis elit imperdiet accumsan. Fusce elit magna, porttitor id interdum sit amet, lobortis id purus. Maecenas leo felis, facilisis nec molestie in, posuere sed dui. In cursus diam nec mi suscipit quis convallis nulla consequat. Nunc faucibus pellentesque purus at porttitor. Morbi elit lectus, lobortis vel vehicula nec, volutpat ut est. Maecenas sodales eleifend risus, ac pretium felis rutrum non. In fermentum euismod vestibulum. Aliquam nec sem enim.
					<br/><br/>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium dui sed augue hendrerit aliquet. Integer placerat aliquam accumsan. Morbi sit amet orci enim, ac iaculis ipsum. Aenean sit amet risus eget velit dapibus iaculis. Quisque rhoncus consequat mollis. Curabitur et condimentum purus. Quisque scelerisque rhoncus erat, eu porta justo accumsan quis. Morbi pellentesque egestas orci at facilisis.
					</p>
				</div>
			</div>
			<div id="moldura">
				<iframe id="video" src="http://player.vimeo.com/video/41995227?title=0&amp;byline=0&amp;portrait=0" width="400" height="225" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
			</div>
		</div>

		<div id="tela-quemsomos" class="subtela">
			<img src="assets/images/quem_clips1.png" id="clips1"/>
			<img src="assets/images/quem_clips2.png" id="clips2"/>
			<img src="assets/images/quem_clips3.png" id="clips3"/>
			<img src="assets/images/quem_fichario.png" id="fichario"/>
		</div>		

		<div id="tela-plataforma" class="subtela">
			<div id="ipad">
				<p class="ipad-over">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium dui sed augue hendrerit aliquet. Integer placerat aliquam accumsan. Morbi sit amet orci enim, ac iaculis ipsum. Aenean sit amet risus eget velit dapibus iaculis. Quisque rhoncus consequat mollis. Curabitur et condimentum purus. Quisque scelerisque rhoncus erat, eu porta justo accumsan quis. Morbi pellentesque egestas orci at facilisis.
					<br/><br/>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium dui sed augue hendrerit aliquet. Integer placerat aliquam accumsan. Morbi sit amet orci enim, ac iaculis ipsum. Aenean sit amet risus eget velit dapibus iaculis. Quisque rhoncus consequat mollis. Curabitur et condimentum purus. Quisque scelerisque rhoncus erat, eu porta justo accumsan quis. Morbi pellentesque egestas orci at facilisis.					
				</p>
			</div>
			<img src="assets/images/plataforma_fone.png" id="fone"/>
			<div id="moldura-deck">
				<iframe class="deck" frameborder="0" src="//speakerdeck.com/embed/4e81c62f7f075e006301089e?" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
			</div>
			<img src="assets/images/plataforma_teclado.png" id="teclado"/>
			<img src="assets/images/plataforma_cel.png" id="cel"/>
		</div>

		<div id="tela-eventos" class="subtela">
			<div id="acordeon">
				<img src="assets/images/eventos_bt1.png" style="top:0px; " class="acordeon-btn" id="evento-btn1" />
				<div class="acordeon-text" style="margin-top:20px; border: 7px solid #892A34;">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium dui sed augue hendrerit aliquet. Integer placerat aliquam accumsan. Morbi sit amet orci enim, ac iaculis ipsum. Aenean sit amet risus eget velit dapibus iaculis. Quisque rhoncus consequat mollis. Curabitur et condimentum purus. Quisque scelerisque rhoncus erat, eu porta justo accumsan quis. Morbi pellentesque egestas orci at facilisis.
						<br/><br/>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium dui sed augue hendrerit aliquet. Integer placerat aliquam accumsan. Morbi sit amet orci enim, ac iaculis ipsum. Aenean sit amet risus eget velit dapibus iaculis. Quisque rhoncus consequat mollis. Curabitur et condimentum purus. Quisque scelerisque rhoncus erat, eu porta justo accumsan quis. Morbi pellentesque egestas orci at facilisis.					
					</p>
				</div>
				<img src="assets/images/eventos_bt2.png" style="top:25px;" class="acordeon-btn" id="evento-btn2" />
				<div class="acordeon-text" style="margin-top:40px; border: 7px solid #DA842E;">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium dui sed augue hendrerit aliquet. Integer placerat aliquam accumsan. Morbi sit amet orci enim, ac iaculis ipsum. Aenean sit amet risus eget velit dapibus iaculis. Quisque rhoncus consequat mollis. Curabitur et condimentum purus. Quisque scelerisque rhoncus erat, eu porta justo accumsan quis. Morbi pellentesque egestas orci at facilisis.
						<br/><br/>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium dui sed augue hendrerit aliquet. Integer placerat aliquam accumsan. Morbi sit amet orci enim, ac iaculis ipsum. Aenean sit amet risus eget velit dapibus iaculis. Quisque rhoncus consequat mollis. Curabitur et condimentum purus. Quisque scelerisque rhoncus erat, eu porta justo accumsan quis. Morbi pellentesque egestas orci at facilisis.					
					</p>
				</div>			
				<img src="assets/images/eventos_bt3.png" style="top:50px;" class="acordeon-btn" id="evento-btn3" />
				<div class="acordeon-text" style="margin-top:70px; border: 7px solid #41AABF;">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium dui sed augue hendrerit aliquet. Integer placerat aliquam accumsan. Morbi sit amet orci enim, ac iaculis ipsum. Aenean sit amet risus eget velit dapibus iaculis. Quisque rhoncus consequat mollis. Curabitur et condimentum purus. Quisque scelerisque rhoncus erat, eu porta justo accumsan quis. Morbi pellentesque egestas orci at facilisis.
						<br/><br/>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium dui sed augue hendrerit aliquet. Integer placerat aliquam accumsan. Morbi sit amet orci enim, ac iaculis ipsum. Aenean sit amet risus eget velit dapibus iaculis. Quisque rhoncus consequat mollis. Curabitur et condimentum purus. Quisque scelerisque rhoncus erat, eu porta justo accumsan quis. Morbi pellentesque egestas orci at facilisis.					
					</p>
				</div>
			</div>
			<img src="assets/images/eventos_tenda.png" id="fundo_tenda"/>
			<img src="assets/images/eventos_jovens.png" id="jovens"/>
			<div id="moldura-deck">
				<iframe class="deck" frameborder="0" src="//speakerdeck.com/embed/4e81c62f7f075e006301089e?" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
			</div>
			<img src="assets/images/eventos_fts1.png" id="fts1"/>
		</div>

		<div id="tela-patrocinio" class="subtela">
			<img src="assets/images/patrocinio_calculadora.png" id="calc"/>
			<div id="moldura-deck">
				<iframe class="deck" frameborder="0" src="//speakerdeck.com/embed/4e81c62f7f075e006301089e?" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
			</div>
			<img src="assets/images/patrocinio_fts2.png" id="fts2"/>
		</div>
		<div id="tela-downloads" class="subtela">
			<img src="assets/images/downloads_objetos.png" id="objetos"/>
			<img src="assets/images/downloads_papel.png" id="downloads-papel"/>
			<div id="links-downloads">
				<a href="#">Vinheta de Apresentação do Acadêmicos</a><br/><br/>
				<a href="#">Arquivo de Retorno ao Patrocinador da Plataforma</a><br/><br/>
				<a href="#">Arquivo de Retorno ao Patrocinador do Palco Acadêmicos</a><br/><br/>
				<a href="#">Arquivo de Retorno ao Patrocinador da Mostra Artes Cênicas Acadêmicos</a><br/><br/>
				<a href="#">Arquivo de Retorno ao Patrocinador do Cine Acadêmicos</a><br/><br/>
			</div>
		</div>
		<div id="tela-contatos" class="subtela">
			<img src="assets/images/contato_note.png" id="contato-notebook"/>
			<div id='note-text'>
				<p>parceiros@academicos.art.br</p>
				<p>21 7730 2197</p>
				<p>id 643*9892</p>
			</div>
			<img src="assets/images/contato_formulario.png" id="contato-form"/>
			<div id="form-contato">
				<div style="float:left; width: 120px; color: white;">
					<p>NOME:</p>
					<p>EMAIL:</p>
					<p>TELEFONE:</p>
					<p>MENSAGEM:</p>
				</div>
				<div style="float:left; width: 245px; margin-top: 13px;">
					<input type="text" name="nome"><br/>
					<input type="text" name="email"><br/>
					<input type="text" name="telefone"><br/><br/>
					<textarea rows="14" cols="33" style="padding: 0px;"></textarea>
					<input type='submit' value='Enviar'/>
				</div>
			</div>
			<img src="assets/images/contato_cafe.png" id="contato-cafe"/>
		</div>

	</div>

</div>	

<?php

?>

</body>

</html>
