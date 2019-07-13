#pragma strict

var Objeto : GameObject;//Variavel que vai receber o objeto a ser manipulado

var verificador : String;//variavel para verificar o tipo de comportamento
var rotacao : float;//variavel para tratar a velocidade da rotaçao
var AnguloRotacao : float;//variavel para mostrar o angulo da rotaçao
var velocidadeRotacao : float;//variavel para a velocidade de rotaçao do objeto

/******************************* VETORES ***************************************/

var Caudal = Vector3(0,180,0);;//vetor da perspectiva Caudal
var Frontal = Vector3(0,0,0);//vetor da perspectiva Frontal
var Esquerda = Vector3(0,90,0);//vetor da perspectiva Esquerda
var Direita = Vector3(0,(- 90),0);//vetor da perspectiva Direita
var Dorsal = Vector3(3,(-3),270);//vetor da perspectiva Dorsal
var Ventral = Vector3(3,180,270);//vetor da perspectiva Ventral

function Start () {

verificador = null;//inicinado o verificador de comportamento como nulo. Obejto parado
velocidadeRotacao = 0.3;//iniciando a velocidade de rotaçao
rotacao = 360*this.velocidadeRotacao*Time.deltaTime;//tratando a velocidade de rotaçao
AnguloRotacao = 50*Time.deltaTime;//tratando o angulo de rotaçao

}

function Update () {

/******************************* ROTAÇOES ***************************************/

      if((verificador == "Horizontal")){//se o verificador for Horizontal 
         transform.Rotate(0,rotacao,0);//rotaçao Horizontal
      }

      if ((verificador == "Vertical")){//se o verificador for Vertical 
         transform.Rotate(0,0,rotacao);//rotaçao Vertical
      }

/******************************* MOVIMENTAÇOES ***************************************/      
                  
      if ((verificador == "Parar") || (Input.GetKey(KeyCode.P)) || (Input.GetKey(KeyCode.Space))){
         verificador = null;//verificador fica nulo
      }

      if((verificador == "Cima") || (Input.GetKey(KeyCode.UpArrow)) || (Input.GetKey(KeyCode.W))){
         transform.Rotate(0,0,AnguloRotacao);//rotacionado o objeto para cima
      }

      if((verificador == "Baixo") || (Input.GetKey(KeyCode.DownArrow)) || (Input.GetKey(KeyCode.S))){
         transform.Rotate(0,0,(- AnguloRotacao));//rotacionando o objeto para baixo
      }

      if((verificador == "Esquerda") || (Input.GetKey(KeyCode.LeftArrow)) || (Input.GetKey(KeyCode.A))){
         transform.Rotate(0,AnguloRotacao,0);//rotacionando o objeto para esquerda
      }

      if((verificador == "Direita") || (Input.GetKey(KeyCode.RightArrow)) || (Input.GetKey(KeyCode.D))){
         transform.Rotate(0,(- AnguloRotacao),0);//rotacionando o objeto para direita
      }
     
/******************************* PERSPECTIVAS ***************************************/
        
      if((verificador == "Caudal")){
         transform.rotation.eulerAngles = Caudal;//coloca o objeto na perspectiva caudal
         verificador = null;//anulando o verificador
      }
      
      if((verificador == "Frontal")){
         transform.rotation.eulerAngles = Frontal;//coloca o objeto na perspectiva frontal
         verificador = null;//anulando o verificador
      }
      
      if((verificador == "Esquerda")){
         transform.rotation.eulerAngles = Esquerda;//coloca o objeto na perspectiva esquerda
         verificador = null;//anulando o verificador
      }
      
      if((verificador == "Direita")){
         transform.rotation.eulerAngles = Direita;//coloca o objeto na perspectiva direita
         verificador = null;//anulando o verificador
      }
      
      if((verificador == "Dorsal")){
         transform.rotation.eulerAngles = Dorsal;//coloca o objeto na perspectiva dorsal
         verificador = null;//anulando o verificador
      }
      
      if((verificador == "Ventral")){
         transform.rotation.eulerAngles = Ventral;//coloca o objeto na perspectiva ventral
         verificador = null;//anulando o verificador
      }
      
/******************************* CORTES ***************************************/      
      
      if ((verificador == "Sagital")){
          Application.LoadLevel("Visao - Sagital - 01");//carregando a visao sagital
      }
      
      if ((verificador == "Coronal")){
          Application.LoadLevel("Visao - Coronal - 01");//carregando a visao sagital
      }
      
      if ((verificador == "Partes")){
          Application.LoadLevel("Visao - Partes - 01");//carregando a visao sagital
      }
      

/******************************* PARTES ***************************************/

      if ((verificador == "Cérebro")){
          Application.LoadLevel("Visao - Cerebro");//carregando a visao do cerebro
      }
      
      if ((verificador == "Cerebelo")){
          Application.LoadLevel("Visao - Cerebelo");//carregando a visao do cerebelo
      }
      
      if ((verificador == "Tronco")){
          Application.LoadLevel("Visao - Tronco");//carregando a visao do tronco
      }  
                            
      if ((verificador == "Completo")){
          Application.LoadLevel("Visao - Cerebro Completo");//carregando a visao do completo
      }

}
