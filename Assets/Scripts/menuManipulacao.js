#pragma strict

var click : AudioClip;//variavel para o som do botao

var ModeloBotao : GUISkin;//variavel para o modelo do botao
var Monitor : Screen;//variavel para capturar o tanho real da tela

var posiX : float;//valor da posicao X
var posiY : float;//valor da posicao Y

var larguraBotao : float;//variavel para a largura do botao
var alturaBotao : float;//variavel para a altura do botao

function Start () {

larguraBotao = 120;//largura predefinida do botao
alturaBotao = 30;//altura predefinida do botao

posiX = (Screen.width - Screen.width);//Tratando o eixo x
posiY = (Screen.height - Screen.height);//Tratando o eixo y

}

function Update () {

}

function OnGUI () {

GUI.skin = ModeloBotao;
    
    if (GUI.Button(Rect((posiX + 13),(posiY + 455),larguraBotao,alturaBotao),"Voltar ao menu")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Menu - Principal");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 13),(posiY + 489),larguraBotao,alturaBotao),"Sair")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.Quit();//fechando a aplicaçao
    }
    
}