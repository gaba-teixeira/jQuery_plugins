$(document).ready(function () {
  $("#carousel").slick({
    autoplay: true,
    autoplaySpeed: 1500,
  });

  $(".hamburger-menu").click(function () {
    $("nav").slideToggle();
  });

  $("#phone").mask("(00) 00000-0000");
  $("#cpf").mask("000.000.000-00");
  $("#cep").mask("00000-000");

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

      cep: {
        required: true,
      },
      cpf: {
        required: true,
      },

      endereco: {
        required: true,
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
      cep: "Esse campo é obrigatório",
      cpf: "Esse campo é obrigatório",
      endereco: "Esse campo é obrigatório",
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
