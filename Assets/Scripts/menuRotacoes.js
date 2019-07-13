#pragma strict

var cerebro : GameObject;//Variavel para a modelagem do cerebro
var modeloBox : GUISkin;//variavel para a modificaçao do formato da box
var movimentacao : comportamentoObjeto;//Variavel que vai receber a funçoes da classe comportamentoCerebro

var posiX: float;//Variavel para tratamento do valor real do eixo x
var posiY: float;//Variavel para tratamento do valor real do eixo x

var larguraBotao: float;//Variavel para o largura do botão
var alturaBotao: float;//Variavel para o altura do botão

function Start () {//inicio da função

movimentacao = GameObject.Find("Cerebro").GetComponent(comportamentoObjeto);//pegando as funçoes do GameObject
   
larguraBotao = 70;//Variavel para o altura com valor inicial de 30
alturaBotao = 30;//Variavel para o altura com valor inicial de 30

posiX = (Screen.width - Screen.width);//Tratando o eixo x
posiY = (Screen.height - Screen.height);//Tratando o eixo y

}

function Update () {//função Update

}

function OnGUI() {//função OnGUI

GUI.skin = modeloBox;//trocando o modelo da box

GUI.Box(Rect((posiX + 10),(posiY + 10),125,150),"ROTAÇÃO");//titulo

    if ((GUI.Button(Rect((posiX + 37),(posiY + 45),larguraBotao,alturaBotao),"Horizontal")) || (Input.GetKey(KeyCode.H))){
        movimentacao.verificador = "Horizontal";//a variavel "verificador" receber o valor "Horizontal"
    }

    if ((GUI.Button(Rect((posiX + 37),(posiY + 80),larguraBotao,alturaBotao),"Vertical")) || (Input.GetKey(KeyCode.V))){
        movimentacao.verificador = "Vertical";//a variavel "verificador" receber o valor "Vertical"
    }

    if ((GUI.Button(Rect((posiX + 37),(posiY + 115),larguraBotao,alturaBotao),"Parar"))){
        movimentacao.verificador = "Parar";//a variavel "verificador" receber o valor "Parar"
    }

}