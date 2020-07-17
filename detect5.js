document.addEventListener("DOMContentLoaded", init);




function init(){
  //On commence par récupérer chacune des parties sur lesquelles on va travailler
  var head = document.getElementById("header");
  var sen = document.getElementById("sensors");
  var cam = document.getElementById("cameras");

  //header
  var paraTitre = document.createElement("p");

  var attTitre = document.createAttribute("id");
  attTitre.value = "titre";
  paraTitre.setAttributeNode(attTitre);
  var t = document.createTextNode("Cameras and sensors");
  paraTitre.appendChild(t);

  head.appendChild(paraTitre);

  //sensors
  var sen1 = document.createElement("button");          //création des 3 boutons
  var sen2 = document.createElement("button");
  var sen3 = document.createElement("button");

  //1er sensor (s1)
  var ats1 = document.createAttribute("id");            //on attribue un id au sensor
  ats1.value = "s1";
  sen1.setAttributeNode(ats1);
  var curs1 = document.createAttribute("style");        //puis le curseur
  curs1.value="cursor:pointer";
  sen1.setAttributeNode(curs1);
  var ts1 = document.createTextNode("s1");              //on créée un texte à insérer dans le bouton
  var font1 = document.createElement("font");           //on spécifie une variable font (utile pour les fonctions plus tard)
  var color1 = document.createAttribute("color");
  color1.value = "#4CAF50";
  font1.setAttributeNode(color1);
  font1.appendChild(ts1);
  sen1.appendChild(font1);                               //le sensor a 2 attributs (id,cursor) et un enfant (font)
  sen.appendChild(sen1);                                 //Le font a lui même un attribut (color) et un enfant (le texte)


  var ats2 = document.createAttribute("id");             //On refait pareil pour les deux autres sensors et les caméras
  ats2.value = "s2";
  sen2.setAttributeNode(ats2);
  var curs2 = document.createAttribute("style");
  curs2.value="cursor:pointer";
  sen2.setAttributeNode(curs2);
  var ts2 = document.createTextNode("s2");
  var font2 = document.createElement("font");
  var color2 = document.createAttribute("color");
  color2.value = "#4CAF50";
  font2.setAttributeNode(color2);
  font2.appendChild(ts2);
  sen2.appendChild(font2);
  sen.appendChild(sen2);

  var ats3 = document.createAttribute("id");
  ats3.value = "s3";
  sen3.setAttributeNode(ats3);
  var curs3 = document.createAttribute("style");
  curs3.value="cursor:pointer";
  sen3.setAttributeNode(curs3);
  var ts3 = document.createTextNode("s3");
  var font3 = document.createElement("font");
  var color3 = document.createAttribute("color");
  color3.value = "#4CAF50";
  font3.setAttributeNode(color3);
  font3.appendChild(ts3);
  sen3.appendChild(font3);
  sen.appendChild(sen3);



  //cameras
  var cam1 = document.createElement("button");
  var cam2 = document.createElement("button");
  var cam3 = document.createElement("button");

  var atc1 = document.createAttribute("id");                        //chaque caméra a une structure semblable à celle des sensors
  atc1.value = "c1";                                                //ils ont juste une couleur de fond définie, et pas de curseur spécial
  cam1.setAttributeNode(atc1);
  var bgc1 = document.createAttribute("style");
  bgc1.value = "background-color:rgba(195,195,195,0.9)";
  cam1.setAttributeNode(bgc1);
  var tc1 = document.createTextNode("c1");
  var fontc1 = document.createElement("font");
  var colorc1 = document.createAttribute("color");
  colorc1.value = "black";
  fontc1.setAttributeNode(colorc1);
  fontc1.appendChild(tc1);
  cam1.appendChild(fontc1);
  cam.appendChild(cam1);

  var atc2 = document.createAttribute("id");
  atc2.value = "c2";
  cam2.setAttributeNode(atc2);
  var bgc2 = document.createAttribute("style");
  bgc2.value = "background-color:rgba(195,195,195,0.9)";
  cam2.setAttributeNode(bgc2);
  var tc2 = document.createTextNode("c2");
  var fontc2 = document.createElement("font");
  var colorc2 = document.createAttribute("color");
  colorc2.value = "black";
  fontc2.setAttributeNode(colorc2);
  fontc2.appendChild(tc2);
  cam2.appendChild(fontc2);
  cam.appendChild(cam2);

  var atc3 = document.createAttribute("id");
  atc3.value = "c3";
  cam3.setAttributeNode(atc3);
  var bgc3 = document.createAttribute("style");
  bgc3.value = "background-color:rgba(195,195,195,0.9)";
  cam3.setAttributeNode(bgc3);
  var tc3 = document.createTextNode("c3");
  var fontc3 = document.createElement("font");
  var colorc3 = document.createAttribute("color");
  colorc3.value = "black";
  fontc3.setAttributeNode(colorc3);
  fontc3.appendChild(tc3);
  cam3.appendChild(fontc3);
  cam.appendChild(cam3);


  //Construction du réseau
  var reseau_s1=[1];
  var reseau_s2=[2];
  var reseau_s3=[3];

  var res1Child = document.createElement("div");
  var idres1 = document.createAttribute("id");
  idres1.value = "r1";
  res1Child.setAttributeNode(idres1);
  var textr1 = document.createTextNode(reseau_s1.toString());
  var disp1 = document.createAttribute("class");
  disp1.value = "hidden";
  res1Child.setAttributeNode(disp1);
  res1Child.appendChild(textr1);
  s1.appendChild(res1Child);

  connect(reseau_s1,"c1");
  connect(reseau_s2,"c1");
  connect(reseau_s3,"c2");
  connect(reseau_s3,"c3");


  //Implémentation de l'interface
  document.getElementById('s1').addEventListener("click",function(){
    var bouton = document.getElementById('s1');
    var font = bouton.firstChild;
    font.setAttribute("color","red");
    bouton.setAttribute("style","cursor:not-allowed");
    bouton.disabled = true;
    setTimeout(function(){
  	   font.setAttribute("color","4CAF50");
       bouton.setAttribute("style","cursor:pointer");
       bouton.disabled = false;
     	},2000);
    });
  document.getElementById('s2').addEventListener("click",function(){
    var bouton = document.getElementById('s2');
    var font = bouton.firstChild;
    font.setAttribute("color","red");
    bouton.setAttribute("style","cursor:not-allowed");
    bouton.disabled = true;
    setTimeout(function(){
  	   font.setAttribute("color","4CAF50");
       bouton.setAttribute("style","cursor:pointer");
       bouton.disabled = false;
     	},2000);
      });
  document.getElementById('s3').addEventListener("click",function(){
    var bouton = document.getElementById('s3');
    var font = bouton.firstChild;
    font.setAttribute("color","red");
    bouton.setAttribute("style","cursor:not-allowed");
    bouton.disabled = true;
    setTimeout(function(){
  	   font.setAttribute("color","4CAF50");
       bouton.setAttribute("style","cursor:pointer");
       bouton.disabled = false;
     	},2000);
    });


    document.getElementById('s1').addEventListener("click",function(){
      var cameras_ar = reseau_s1.slice(1);
      var caml = cameras_ar.length;
      setTimeout(function(){
        for(var i=0; i<caml; i++){
        var bouton = document.getElementById(cameras_ar[i]);
        var font = bouton.firstChild;
        console.log(font);
        font.setAttribute("color","white");
        }
      },1000);
      console.log(document.getElementById(cameras_ar[0]));
      setTimeout(function(){
        for(var i=0; i<caml; i++){
        var bouton = document.getElementById(cameras_ar[i]);
        var font = bouton.firstChild;
        console.log(font);
        font.setAttribute("color","black");
        }
      },2000);
    })
    document.getElementById('s2').addEventListener("click",function(){
      var cameras_ar = reseau_s2.slice(1);
      var caml = cameras_ar.length;
      setTimeout(function(){
        for(var i=0; i<caml; i++){
        var bouton = document.getElementById(cameras_ar[i]);
        var font = bouton.firstChild;
        console.log(font);
        font.setAttribute("color","white");
        }
      },1000);
      console.log(document.getElementById(cameras_ar[0]));
      setTimeout(function(){
        for(var i=0; i<caml; i++){
        var bouton = document.getElementById(cameras_ar[i]);
        var font = bouton.firstChild;
        console.log(font);
        font.setAttribute("color","black");
        }
      },2000);
    })
    document.getElementById('s3').addEventListener("click",function(){
      var cameras_ar = reseau_s3.slice(1);
      var caml = cameras_ar.length;
      setTimeout(function(){
        for(var i=0; i<caml; i++){
        var bouton = document.getElementById(cameras_ar[i]);
        var font = bouton.firstChild;
        console.log(font);
        font.setAttribute("color","white");
        }
      },1000);
      console.log(document.getElementById(cameras_ar[0]));
      setTimeout(function(){
        for(var i=0; i<caml; i++){
        var bouton = document.getElementById(cameras_ar[i]);
        var font = bouton.firstChild;
        console.log(font);
        font.setAttribute("color","black");
        }
      },2000);
    })

}

function connect(sen,cam){
  sen.push(cam);
}
