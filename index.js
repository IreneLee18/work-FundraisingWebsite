const app = Vue.createApp({
  data() {
    return {
      hideNavbar: true,
      showLogin: false,
    };
  },
  methods: {
    showContent() {
      // this[key] = !this[key];
      console.log("click");
    },
  },
});
app.mount("#app");

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        console.log("?????");
        }
        console.log("??");

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
