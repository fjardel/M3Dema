#pragma strict

var click : AudioClip;//variavel para o som do botao

var ModeloBotao : GUISkin;//variavel para o modelo do botao
var Monitor : Screen;//variavel para capturar o tamanho da tela 

var posiX : float;//variavel para a posiçao X
var posiY : float;//variavel para a posiçao Y

var larguraBotao : float;//variavel para a largura do botao
var alturaBotao : float;//variavel para a altura do botao

function Start () {

larguraBotao = 120;//definindo a largura do botao
alturaBotao = 30;//definindo a altura do botao

posiX = (Screen.width - Screen.width);//Tratando o eixo X em relaçao ao do monitor
posiY = (Screen.height - Screen.height);//Tratando o eixo Y em relaçao ao do monitor

}

function Update () {

}

function OnGUI () {

GUI.skin = ModeloBotao;//pegando o modelo do botao

    if (GUI.Button(Rect((posiX + 10),(posiY + 10),larguraBotao,alturaBotao),"Voltar ao menu")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Menu - Principal");//carregando o menu principal
    }
        
}