onload = () =>{
    verificarClave();
};

async function verificarClave() {
    debugger;
    const { value: password } = await Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      allowOutsideClick: false,
      allowEscapeKey: false,
      inputAttributes: {
        maxlength: "10",
        autocapitalize: "off",
        autocorrect: "off"
      },
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "") {
            resolve("Enter your password!");
          } else if (value != 'Edward02') {
            resolve("Incorrect password!");
          } else {
            resolve();
            document.body.classList.remove("container");
            const name = document.getElementById('nombre');
            name.style.display = 'block';
          }
        });
      }
    });
}