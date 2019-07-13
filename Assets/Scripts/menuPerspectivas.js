#pragma strict

var cerebro : GameObject;//variavel que recebe o objeto
var modeloBox : GUISkin;//variavel para o modelo da box
var movimentacao : comportamentoObjeto;//variavel para o script de comportamento do objeto

var posiX: float;//Variavel para tratamento do valor real do eixo x
var posiY: float;//Variavel para tratamento do valor real do eixo x

var larguraBotao: float;//Variavel para o largura do botão
var alturaBotao: float;//Variavel para o altura do botão

function Start () {

movimentacao = GameObject.Find("Cerebro").GetComponent(comportamentoObjeto);//pegando as funçoes do objeto 
   
larguraBotao = 70;//Variavel para o altura com valor inicial de 30
alturaBotao = 30;//Variavel para o altura com valor inicial de 30

posiX = (Screen.width - Screen.width);//Tratando o eixo x
posiY = (Screen.height - Screen.height);//Tratando o eixo y

}

function Update () {

}

function OnGUI() {

GUI.skin = modeloBox;

GUI.Box(Rect((posiX + 10),(posiY + 180),125,257),"VISÃO");

    if (GUI.Button(Rect((posiX + 37),(posiY + 214),larguraBotao,alturaBotao),"Caudal")){
        movimentacao.verificador = "Caudal";//a variavel verificador recebe o valor caudal
    }

    if (GUI.Button(Rect((posiX + 37),(posiY + 248),larguraBotao,alturaBotao),"Frontal")){
        movimentacao.verificador = "Frontal";//a variavel verificador recebe o valor frontal
    }

    if (GUI.Button(Rect((posiX + 37),(posiY + 282),larguraBotao,alturaBotao),"Esquerda")){
        movimentacao.verificador = "Esquerda";//a variavel verificador recebe o valor esquerda
    }

    if (GUI.Button(Rect((posiX + 37),(posiY + 316),larguraBotao,alturaBotao),"Direita")){
        movimentacao.verificador = "Direita";//a variavel verificador recebe o valor direita
    }

    if (GUI.Button(Rect((posiX + 37),(posiY + 350),larguraBotao,alturaBotao),"Dorsal")){
        movimentacao.verificador = "Dorsal";//a variavel verificador recebe o valor dorsal
    }

    if (GUI.Button(Rect((posiX + 37),(posiY + 384),larguraBotao,alturaBotao),"Ventral")){
        movimentacao.verificador = "Ventral";//a variavel verificador recebe o valor ventral
    }

}