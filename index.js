import express from "express";
import {dirname} from "path"; 
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { Script } from "vm";


const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();


// mes teableaux 

var nom2 = [];

function tableau(){
    
    var nom1 = nom.filter(Boolean);
    
    var sujet1=sujet.filter(Boolean);
    
    var auteur1= auteur.filter(Boolean);
    
    var articles1=articles.filter(Boolean); 
}
var nom = []; 
var nom1 = nom.filter(Boolean);
var sujet=[];
var sujet1=sujet.filter(Boolean);
var auteur=[];
var auteur1= auteur.filter(Boolean);
var articles =[];
var articles1=articles.filter(Boolean);


// boby praser 

app.use(bodyParser.urlencoded ({extended : true})); 

// get premiere page 
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

// page pour afficher l'articles supprimer et modifier 
app.get("/page" ,(req,res)=>{

    res.render("page.ejs",{nom: nom[1],articles});
});

//page home affiche le nom de l'article etc 
app.post("/home", (req,res)=>{

      // nom utilisateur 
    
       if(nom2.length===0){
        nom2.push(req.body["nom1"]);
       
        
       }else{
        nom2.splice(0,1,req.body["nom1"])
       }
  
       if(req.body["supp"]){
        var x = req.body["articles"];
        var index = x-1;
        console.log(index); 
        nom.splice(index,1);
        nom1.splice(index,1);
        sujet1.splice(index,1);
        sujet.splice(index,1);
        auteur.splice(index,1);
        articles.splice(index,1);

       }

   // creation articles 
   function Articles(nom, sujet, articles, auteur){
    this.nom = req.body["nom"];
    this.sujet=req.body["subjet"];
    this.articles =req.body["corps-article"];
    this.auteur = req.body["auteur"];  
}

var x = new Articles ();

nom.push(x.nom);
sujet1.push(x.sujet);
articles1.push(x.articles);
auteur1.push(x.auteur);


    // ajout de texte 



    console.log(nom,  nom,  articles1.length,  auteur1.length, nom2)

    res.render("home1.ejs", {nom1, nom ,  sujet1,  articles1,  auteur1, nom2});
});


// page pour creer un articles 
app.post("/articles", (req,res)=>{

    

    res.render("articles.ejs"); 
});




// serveur 

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  
