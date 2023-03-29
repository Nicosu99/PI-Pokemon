export default function validationBox(form){
    let errors = {};
    let regexName = /^[a-zA-Z]{3,15}$/;
    let regexHp = /^(?:[1-9]|[1-9]\d|1\d{2}|2[0-4]\d|250)$/
    let regexAttack = /^(?:[1-9]|[1-9]\d|1\d{2}|2[0-4]\d|250)$/
    let regexDefense = /^(?:[1-9]|[1-9]\d|1\d{2}|2[0-4]\d|250)$/
    let regexSpeed = /^(?:[1-9]|[1-9]\d|1\d{2}|2[0-4]\d|250)$/
    let regexHeight = /^(?:[1-9]|[1-4]\d|50)$/
    let regexWeight = /^(?:[1-9]|[1-9]\d{1,2}|1[0-1]\d{2}|12[0-4]\d{1}|1250)$/
    let regexImage = /\bhttps?:\/\/\S+\.(jpg|jpeg|png|gif|bmp)\b/


    if(form.name && !regexName.test(form.name.trim())){
        errors.name = "El nombre solo acepta letras y tener entre 3 y 15 caracteres"
    }

    if (form.hp && !regexHp.test(form.hp)){
        errors.hp = "El Pokemon puede tener entre 1 y 250 de vida"
    }

    if(form.attack && !regexAttack.test(form.attack)){
        errors.attack = "El Pokemon puede tener entre 1 y 250 de ataque"
    }

    if(form.defense && !regexDefense.test(form.defense)){
        errors.defense = "El Pokemon puede tener entre 1 y 250 de defensa"
    }

    if(form.speed && !regexSpeed.test(form.speed)){
        errors.speed = "El pokemon puede tener entre 1 y 250 de velocidad"
    }

    if(form.height && !regexHeight.test(form.height)){
        errors.height = "El Pokemon puede tener entre 1 y 50 de altura"
    }

    if(form.weight && !regexWeight.test(form.weight)){
        errors.weight = "El Pokemon puede pesar entre 1 y 1250 "
    }

    if(form.image && !regexImage.test(form.image.trim())){
        errors.image = "Debe ser una URL con una imagen en formato .jpg, .jpeg, .png, .gif o .bmp"
    }

    return errors
}

