// une fois dans le JS d'abord declare tous les varaibles/ constantes  dont on a besion pour toute sorte de modification 



const menuSlider = document.querySelector('.menuSlider');
const btn = document.querySelector('.btn');
const itemListe = document.querySelectorAll('.menuItem');
const imgChange = document.getElementById('imgChange');
let toggle = 0;
let imgDejaMiseEnPlace = 0;

btn.addEventListener('click', () => {

    if(toggle === 0) {
        toggle++;
        TweenMax.to(menuSlider,1.75,{transform: 'translate(0px)', ease: Expo.easeOut})
    } else {
        toggle--;
        TweenMax.to(menuSlider,1.75,{transform: 'translate(1800px)'})

    }

})
/*
Ce bout de code ajoute un écouteur d'événement de clic sur un bouton (représenté par la variable `btn`). Lorsque le bouton est cliqué, le code vérifie la valeur de la variable `toggle`. Si `toggle` est égal à 0, cela signifie que le menu est actuellement fermé, donc le code incrémente la valeur de `toggle` à 1 et utilise la bibliothèque TweenMax pour animer le menu en le faisant glisser vers la gauche (en utilisant la propriété CSS `transform: translate(0px)`). Si `toggle` n'est pas égal à 0, cela signifie que le menu est actuellement ouvert, donc le code décrémente la valeur de `toggle` à 0 et utilise TweenMax pour animer le menu en le faisant glisser vers la droite (en utilisant la propriété CSS `transform: translate(1800px)`).
*/

itemListe.forEach(item => item.addEventListener('mouseenter', () => {


    if(item.getAttribute('data-id') === imgDejaMiseEnPlace) {
        return;
    } else {
        
            imgChange.src = "ressources/pic" + item.getAttribute('data-id') + ".jpg";
            TweenMax.to(imgChange,0.1,{opacity: 0.4})
            TweenMax.to(imgChange,0.2,{delay:0.1, opacity:1})
            imgDejaMiseEnPlace = item.getAttribute('data-id');
    }   
    

}))
/*
Le code fourni ajoute des écouteurs d'événements à une liste d'éléments. Lorsqu'un élément est survolé par la souris, le code vérifie si l'attribut 'data-id' de l'élément est égal à la variable 'imgDejaMiseEnPlace'. Si c'est le cas, la fonction se termine immédiatement grâce au mot-clé 'return'. Sinon, le code modifie l'attribut 'src' d'une image nommée 'imgChange' pour afficher une nouvelle image correspondant à l'élément survolé. De plus, deux animations sont déclenchées pour faire apparaître progressivement la nouvelle image. Enfin, la variable 'imgDejaMiseEnPlace' est mise à jour avec la valeur de l'attribut 'data-id' de l'élément survolé pour éviter que la même image ne soit chargée plusieurs fois.

Plus précisément, la méthode forEach() est utilisée pour parcourir tous les éléments de la liste 'itemListe'. Pour chaque élément, un écouteur d'événements est ajouté pour détecter l'événement 'mouseenter', c'est-à-dire lorsque la souris survole l'élément. La fonction fléchée () => {} est utilisée pour définir l'action à effectuer lors de cet événement. La méthode getAttribute() est utilisée pour récupérer la valeur de l'attribut 'data-id' de l'élément. Si cette valeur est égale à la variable 'imgDejaMiseEnPlace', la fonction se termine immédiatement grâce au mot-clé 'return'. Sinon, la méthode to() de la bibliothèque TweenMax est utilisée pour animer l'opacité de l'image 'imgChange'. La propriété 'delay' est utilisée pour décaler l'apparition de la seconde animation par rapport à la première.

En résumé, ce code permet de charger des images différentes en fonction des éléments survolés par la souris et d'animer leur apparition.
*/

itemListe.forEach(item => item.addEventListener('click', () => {

    toggle--;
    TweenMax.to(menuSlider,1.75,{transform: 'translate(1800px)'})

}))
/*
Le code fourni ajoute des écouteurs d'événements à une liste d'éléments. Lorsqu'un élément est cliqué, le code décrémente la variable 'toggle' de 1 et déclenche une animation pour faire glisser un menu vers la gauche.

Plus précisément, la méthode forEach() est utilisée pour parcourir tous les éléments de la liste 'itemListe'. Pour chaque élément, un écouteur d'événements est ajouté pour détecter l'événement 'click', c'est-à-dire lorsque l'élément est cliqué. La fonction fléchée () => {} est utilisée pour définir l'action à effectuer lors de cet événement. La variable 'toggle' est décrémentée de 1 pour indiquer que le menu doit être masqué. La méthode to() de la bibliothèque TweenMax est utilisée pour animer le menu en faisant glisser le menu vers la gauche.

En résumé, ce code permet de masquer un menu en utilisant un bouton et une animation.
*/
