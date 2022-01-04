@@include("input-mask/_input-mask.js")

let contactsRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 32,
    function: () => {
      const regExp = new RegExp("^(?!.* .* )(?!^ )[A-Za-zА-Яа-яЁё ]*$", "g");
      const contactsName = nameInput.value;
      return contactsName.match(regExp);
    },
  },
  phone: {
    required: true,
    function: () => {
      const phone = phoneInput.inputmask.unmaskedvalue();
      return Number(phone) && phone.length === 10;
    },
  },
};

let contactsMessages = {
  name: {
    required: "Как вас зовут?",
    minLength: "Имя должно быть не меньше 2 букв",
    function: "Недопустимый формат",
  },
  phone: {
    required: "Укажите ваш телефон",
    function: "Укажите ваш телефон полностью",
  },
};
let formMessage = document.querySelector(".form-contacts__message");
let formButton = document.querySelector(".form-contacts__btn");

formButton.addEventListener("click", function (e) {
  formMessage.textContent = "";
})

let validateForm = function (selector, rules, messages) {
  new window.JustValidate(selector, {
    rules: rules,
    messages: messages,
    submitHandler: function (form) {
      let formData = new FormData(form);
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            formMessage.style.color = "green";
            formMessage.textContent = "Ваша заявка успешно отправлена";
          } else {
            formMessage.style.color = "red";
            formMessage.textContent = "Ошибка при отправке";
          }
        }
      };

      xhr.open("POST", "mail.php", true);
      xhr.send(formData);

      form.reset();
    },
  });
};

validateForm(".form-contacts", contactsRules, contactsMessages);
