function setContent() {

    let checkBoxChecked = document.getElementById('checkbox').checked;

    let heroContentElements = document.querySelectorAll('.hero .content *');

    if (checkBoxChecked === true) {

        heroContentElements.forEach(element => {
            element.style.zIndex = "-1";
        })

    }
    else {
        
        heroContentElements.forEach(element => {
            element.style.zIndex = "10";
        })

    }

}

