var nameInput = document.getElementById("contacts-name");
var phoneInput = document.getElementById("contacts-phone");
var inputMask = new Inputmask("+7(999) 999-99-99");
inputMask.mask(phoneInput);
