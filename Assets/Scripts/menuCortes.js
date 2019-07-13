#pragma strict

var cerebro : GameObject;//variavel para o objeto a ser manipulado
var modeloBox : GUISkin;//variavel para modelo da box
var movimentacao : comportamentoObjeto;//variavel para o script de movimentaçao

var posiX: float;//Variavel para tratamento do valor real do eixo x
var posiY: float;//Variavel para tratamento do valor real do eixo x

var larguraBotao: float;//Variavel para o largura do botão
var alturaBotao: float;//Variavel para o altura do botão

function Start () {

movimentacao = GameObject.Find("Cerebro").GetComponent(comportamentoObjeto);//pegando as funçoes do objeto a ser manupulado 
   
larguraBotao = 70;//Variavel para o altura com valor inicial de 30
alturaBotao = 30;//Variavel para o altura com valor inicial de 30

posiX = (Screen.width - (larguraBotao + (larguraBotao - 3)));//Tratando o eixo x
posiY = (Screen.height - Screen.height);//Tratando o eixo y

}

function Update () {

}

function OnGUI() {//função para os botoes

GUI.skin = modeloBox;//pegando o modelo de Skin

GUI.Box(Rect((posiX),(posiY + 215),125,150),"CORTE");//Box de corte

    if (GUI.Button(Rect((posiX + 30),(posiY + 250),larguraBotao,alturaBotao),"Coronal")){
        movimentacao.verificador = "Coronal";//Mudando o valor do verificador para Coronal
    }
    
    if (GUI.Button(Rect((posiX + 30),(posiY + 285),larguraBotao,alturaBotao),"Sagital")){
        movimentacao.verificador = "Sagital";//Mudando o valor do verificador para Sagital
    }
    
    if (GUI.Button(Rect((posiX + 30),(posiY + 320),larguraBotao,alturaBotao),"Partes")){
        movimentacao.verificador = "Partes";//Mudando o valor do verificador para Sagital
    }

}