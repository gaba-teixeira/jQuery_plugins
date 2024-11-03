$(document).ready(function () {
  $("#carousel").slick({
    autoplay: true,
    autoplaySpeed: 1500,
  });

  $(".hamburger-menu").click(function () {
    $("nav").slideToggle();
  });

  $("#phone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },

      email: {
        required: true,
        email: true,
      },

      message: {
        required: true,
      },
    },
    messages: {
      name: "Esse campo é obrigatório",
      email: "Esse campo é obrigatório",
      phone: "Esse campo é obrigatório",
      message: "Esse campo é obrigatório",
    },

    submitHandler: function (form) {
      alert("Formulário enviado com sucesso!");
      form.reset();
    },
    invalidHandler: function (form, validator) {
      alert(
        "Por favor, preencha todos os campos para prosseguir com o envio do formulário!"
      );
    },
  });
});
