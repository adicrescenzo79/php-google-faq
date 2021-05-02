// SCOMMENTARE SE SI USA JQUERY
// $(document).ready(function(){
//
// });

// METODO JQUERY PER LA RICHIESTA DI API
// $.ajax(
// {
// url: "https://flynn.boolean.careers/exercises/api/random/boolean",
// method: "GET",
// success: function (data, stato) {
// $("#risultati").html(data);
// },
// error: function (richiesta, stato, errori) {
// alert("E' avvenuto un errore. " + errore);
// }
// }
// );

// SCOMMENTARE SE SI USA VUE
Vue.config.devtools = true;
var app = new Vue({
  el: '#root',
  data: {
    menuLinks: [
      {
        nome: 'Introduzione',
        link: '#'
      },
      {
        nome: 'Norme sulla privacy',
        link: '#'
      },
      {
        nome: 'Termini di servizio',
        link: '#'
      },
      {
        nome: 'Tecnologie',
        link: '#'
      },
      {
        nome: 'Domande frequenti',
        link: '#'
      },
    ],
    footerLinks: [
      {
        nome: 'Google',
        link: '#'
      },
      {
        nome: 'Tutto su Google',
        link: '#'
      },
      {
        nome: 'Privacy',
        link: '#'
      },
      {
        nome: 'Termini',
        link: '#'
      },

    ]
  },
});

// METODO VUE PER LA RICHIESTA DI API
// axios
// .get('https://flynn.boolean.careers/exercises/api/random/boolean')
// .then(function (response) {
//   const result = response.data;
// })
// .catch((error) => {
//   console.log(error);
// });
