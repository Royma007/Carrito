

function guardar(){
    var mov = document.getElementById("movil").value;
  var moviles = movil.options[mov-1].text;
  
  var ca = document.getElementById("cap").value;
  var capa = cap.options[ca-1].text;
  
                           
      var parrafo = document.createElement("p");  
      
    if (capa === "Samsung Galaxy Note9"){  
      imagenmov.setAttribute("src","note9512.png");

    } else if(capa === "Samsung Galaxy 9+"){
      imagenmov.setAttribute("src","s9pu.png");
  
    }else{
      imagenmov.setAttribute("src","tabne.png");
      
    }
  
        parrafo.innerHTML="Un " + moviles+" "+capa;
       
    document.getElementsByTagName("p")[0].appendChild(parrafo); 
    
  }
  function comprar(){
    alert("Articulo Comprado. !Gracias!");
  }
