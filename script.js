// Recupéré + afficher valeur NOM
document.querySelector('.Jouer').addEventListener('mouseover', function() {
  const Joueur = document.querySelector('.Nom').value;
  const RempJoueur = document.querySelector('.Joueur');  
  RempJoueur.innerHTML = Joueur ;   
});

//Récupérer le choix de peau + Emoji
/*document.querySelector('.Jouer').addEventListener('mouseover', function() {
  var CouleurPeau = document.querySelector('.Peau').value;
  const EmojiPeau = document.querySelector('.Joueur');  
  for ( i < CouleurPeau.length; i++) {
  if (CouleurPeau[i].checked) console.log(CouleurPeau[i].value);
});*/
   
//Animation-Jouer
   document.querySelector('.Jouer').addEventListener('mouseover', function() {
       gsap.timeline()
        .to('.Formulaire', { y: '100vh'})
        .to('.EcranJeu', { opacity: '1'},"<")
});

//Animation-Rejouer
  document.querySelector('.EcranJeu').addEventListener('mouseover', function() {
       gsap.timeline()
        .to('.Formulaire', { y: '0vh'})
        .to('.EcranJeu', { opacity: '0'},)
});