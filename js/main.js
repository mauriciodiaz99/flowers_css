onload = () =>{

    netlifyIdentity.open();
debugger;
const user = netlifyIdentity.currentUser();

// Bind to events
netlifyIdentity.on('init', user => console.log('init', user));
netlifyIdentity.on('login', user => console.log('login', user));
netlifyIdentity.on('logout', () => console.log('Logged out'));
netlifyIdentity.on('error', err => console.error('Error', err));
netlifyIdentity.on('open', () => console.log('Widget opened'));
netlifyIdentity.on('close', () => console.log('Widget closed'));

// Unbind from events
netlifyIdentity.off('login'); // to unbind all registered handlers

// Close the modal
netlifyIdentity.close();

// Log out the user
netlifyIdentity.logout();

// Refresh the user's JWT
// Call in on('login') handler to ensure token refreshed after it expires (1hr)  
// Note: this method returns a promise.
netlifyIdentity.refresh().then((jwt)=>console.log(jwt))

// Change language
netlifyIdentity.setLocale('en');

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
          } else if (value != 'elsa') {
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