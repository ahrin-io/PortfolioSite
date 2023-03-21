const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click on class
    for(const element of sectBtn){
        element.addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
    })
  }
  //Sections Active Class
  allSections.addEventListener('click', (e) =>{
    console.log(e.target);
  })
}

PageTransitions();