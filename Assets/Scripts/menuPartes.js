#pragma strict

var cerebro : GameObject;//Variavel para o objeto  
var modeloBox : GUISkin;//variavel para o formato da box
var movimentacao : comportamentoObjeto;//Variavel para as funçoes da manipulaçao do objeto

var posiX: float;//Variavel para o tratamento do valor real do eixo x
var posiY: float;//Variavel para o tratamento do valor real do eixo x

var larguraBotao: float;//Variavel para o largura do botão
var alturaBotao: float;//Variavel para o altura do botão

function Start () {

movimentacao = GameObject.Find("Cerebro").GetComponent(comportamentoObjeto);//pegando as funçoes do objeto
   
larguraBotao = 70;//Variavel para o altura com valor inicial de 30
alturaBotao = 30;//Variavel para o altura com valor inicial de 30

posiX = (Screen.width - (larguraBotao + (larguraBotao - 3)));//Tratando o eixo x
posiY = (Screen.height - Screen.height);//Tratando o eixo y

}

function Update () {

}

function OnGUI() {

GUI.skin = modeloBox;

GUI.Box(Rect((posiX),(posiY + 10),125,185),"PARTE");

    if ((GUI.Button(Rect((posiX + 30),(posiY + 45),larguraBotao,alturaBotao),"Cérebro")) || (Input.GetKey(KeyCode.H))){
        movimentacao.verificador = "Cérebro";//o valor do "verificado" recebe "Horizontal"
    }
    
    if ((GUI.Button(Rect((posiX + 30),(posiY + 80),larguraBotao,alturaBotao),"Cerebelo")) || (Input.GetKey(KeyCode.H))){
        movimentacao.verificador = "Cerebelo";//o valor do "verificado" recebe "Cerebelo"
    }
    
    if ((GUI.Button(Rect((posiX + 30),(posiY + 115),larguraBotao,alturaBotao),"Tronco")) || (Input.GetKey(KeyCode.H))){
        movimentacao.verificador = "Tronco";//o valor do "verificado" recebe "Tronco"
    }

    if ((GUI.Button(Rect((posiX + 30),(posiY + 150),larguraBotao,alturaBotao),"Completo"))){
        movimentacao.verificador = "Completo";//o valor do "verificado" recebe "Completo"
    }

}