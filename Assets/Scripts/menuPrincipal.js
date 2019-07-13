#pragma strict

var modeloBotao : GUISkin;//variavel para o modelo de botao
var click : AudioClip;//variavel para o som do botao

var posiX: float;//Variavel para tratamento do valor real do eixo x
var posiY: float;//Variavel para tratamento do valor real do eixo x

var larguraBotao: float;//Variavel para o largura do botão
var alturaBotao: float;//Variavel para o altura do botão

function Start () {

larguraBotao = 125;//Variavel para o altura com valor inicial de 30
alturaBotao = 40;//Variavel para o altura com valor inicial de 30

posiX = ((Screen.width/2) - (larguraBotao/2));//Tratando o eixo x
posiY = ((Screen.height/2) - (alturaBotao/2));//Tratando o eixo y

}

function Update () {

}

function OnGUI(){

GUI.skin = modeloBotao;//Mudando o modelo do botao

    if (GUI.Button(Rect(posiX,(posiY - 50),larguraBotao,alturaBotao),"Iniciar")){//botao iniciar
    
        if(!GetComponent.<AudioSource>().isPlaying){
           GetComponent.<AudioSource>().clip = click;
           GetComponent.<AudioSource>().Play();//tocando a musica
        }
        
        else{
           GetComponent.<AudioSource>().Stop();//parando a musica
        }
        
        Application.LoadLevel("Visao - Cerebro Completo");//carregando o visao do cerebro completo
    
    }

    if (GUI.Button(Rect(posiX, posiY,larguraBotao,alturaBotao),"Projeto")){//botao projeto
    
        if(!GetComponent.<AudioSource>().isPlaying){
           GetComponent.<AudioSource>().clip = click;
           GetComponent.<AudioSource>().Play();//tocando a musica
        }
        
        else{
           GetComponent.<AudioSource>().Stop();//parando a musica
        }
        
        Application.LoadLevel("Visao - Projeto");//carregando informaçoes do projeto
    
    }

    if (GUI.Button(Rect(posiX, (posiY + 50),larguraBotao,alturaBotao),"Desenvolvedores")){//botao desenvolvedores

        if(!GetComponent.<AudioSource>().isPlaying){
           GetComponent.<AudioSource>().clip = click;
           GetComponent.<AudioSource>().Play();//tocando a musica  
        }
        
        else{
           GetComponent.<AudioSource>().Stop();//parando a musica
        }
        
        Application.LoadLevel("Visao - Desenvolvedores");//carregando as informaçoes dos desenvolvedores

    }
    
    if (GUI.Button(Rect(posiX, (posiY + 100),larguraBotao,alturaBotao),"Sair")){//botao desenvolvedores

        if(!GetComponent.<AudioSource>().isPlaying){
           GetComponent.<AudioSource>().clip = click;
           GetComponent.<AudioSource>().Play();//tocando a musica  
        }
        
        else{
           GetComponent.<AudioSource>().Stop();//parando a musica
        }
        
        Application.Quit();//fechando o aplicativo

    }

}