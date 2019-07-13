using UnityEngine;
using System.Collections;

public class Imagem : MonoBehaviour{
	
	public Texture2D imagem;//carregando a imagem
			
	void OnGUI (){

		GUI.DrawTexture (new Rect (0.0f, 0.0f, Screen.width, (Screen.height)), imagem);
		
	}
}