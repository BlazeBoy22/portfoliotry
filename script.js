const projects = document.querySelectorAll('.project-card');
const clockdial = document.getElementById('clock-dial');

projects.forEach((project) => {
    let currproject = document.getElementById(project.id);
    const child1 = currproject.childNodes[1];
    const child2 = currproject.childNodes[3];
    const parent = currproject.parentNode.parentNode.parentNode;
    const projectWidth = currproject.offsetWidth;
        const projectHeight = currproject.offsetHeight;
    
    project.addEventListener('mouseover', () => {
        clockdial.style.animation = 'none';
      
        
        currproject.style.scale = '1.6';
        parent.style.background=' linear-gradient(45deg, #343d68, #343d68be, #343d687c)'
      //  background: linear-gradient(45deg, #343d68, #343d68be, #343d687c);
        child1.style.display = 'contents';
        child2.style.display = 'contents';
        currproject.style.height = '370px';
        currproject.style.width = '370px';
        currproject.style.zIndex = '88'
        // currproject.style.display = 'flex';
        // currproject.style.flexDirection = 'column';
        // parent.style.display = 'flex';
        // parent.style.justifyContent = 'center';

        // // Centering the scaled project in the viewport
        // const viewportWidth = window.innerWidth;
        // const viewportHeight = window.innerHeight;
        //  currproject.style.marginLeft='1rem'

        // currproject.style.left = `${(viewportWidth - projectWidth) / 2}px`;
        // currproject.style.top = `${(viewportHeight - projectHeight) / 2}px`;
        // currproject.style.transform='translateX(-50%)'
        // currproject.style.scale = '2'
        // currproject.style.marginLeft='19rem'
    });

    project.addEventListener('mouseleave', () => {
         
        currproject.style.scale='1'
        // currproject.style.marginRight='1rem';
        clockdial.style.animation = 'rotateClockwise 20s infinite linear';
        child1.style.display = 'none';
        child2.style.display = 'none';
        currproject.style.height = '150px';
        currproject.style.width = '150px';
        // currproject.style.left = '0';
        // currproject.style.top = '0';
        currproject.style.zIndex = '1'; 
    });
});
