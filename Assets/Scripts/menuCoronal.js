#pragma strict

var click : AudioClip;//variavel para o som do botao

var ModeloBotao : GUISkin;//variavel para o modelo do botao
var Monitor : Screen;//variavel para capturar o tamanho da tela 

var posiX : float;//variavel para a posiçao X
var posiY : float;//variavel para a posiçao Y

var larguraBotao : float;//variavel para a largura do botao
var alturaBotao : float;//variavel para a altura do botao

function Start () {

larguraBotao = 90;//definindo a largura do botao
alturaBotao = 30;//definindo a altura do botao

posiX = (Screen.width - Screen.width);//Tratando o eixo X em relaçao ao do monitor
posiY = (Screen.height - Screen.height);//Tratando o eixo Y em relaçao ao do monitor

}

function Update () {

}

function OnGUI () {

GUI.skin = ModeloBotao;//pegando o modelo do botao

    if (GUI.Button(Rect((posiX + 10),(posiY + 10),larguraBotao,alturaBotao),"Voltar")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Cerebro Completo");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 45),larguraBotao,alturaBotao),"Coronal 01")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 01");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 80),larguraBotao,alturaBotao),"Coronal 02")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 02");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 115),larguraBotao,alturaBotao),"Coronal 03")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 03");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 150),larguraBotao,alturaBotao),"Coronal 04")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 04");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 185),larguraBotao,alturaBotao),"Coronal 05")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 05");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 220),larguraBotao,alturaBotao),"Coronal 06")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 06");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 255),larguraBotao,alturaBotao),"Coronal 07")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 07");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 290),larguraBotao,alturaBotao),"Coronal 08")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 08");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 325),larguraBotao,alturaBotao),"Coronal 09")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 09");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 360),larguraBotao,alturaBotao),"Coronal 10")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 10");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 395),larguraBotao,alturaBotao),"Coronal 11")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 11");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 430),larguraBotao,alturaBotao),"Coronal 12")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 12");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 465),larguraBotao,alturaBotao),"Coronal 13")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 13");//carregando o menu principal
    }
    
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 500),larguraBotao,alturaBotao),"Coronal 14")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 14");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 535),larguraBotao,alturaBotao),"Coronal 15")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 15");//carregando o menu principal
    }
    
    if (GUI.Button(Rect((posiX + 10),(posiY + 570),larguraBotao,alturaBotao),"Coronal 16")){
    
    if(!GetComponent.<AudioSource>().isPlaying){
        GetComponent.<AudioSource>().clip = click;
        GetComponent.<AudioSource>().Play();//tocando a musica
    }
        
    else{
        GetComponent.<AudioSource>().Stop();//parando a musica
    }
        Application.LoadLevel("Visao - Coronal - 16");//carregando o menu principal
    }
        
}