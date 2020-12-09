<script>
  // import Topbar from "../components/Topbar.svelte";
  import CloseApp from "../components/CloseApp.svelte";
  import Login from "../components/Login.svelte";

  const users = [
    {
      name: "John",
      surname: "Doe",
      email: "john-doe@foo.com",
      avatar: "john doe.jpeg",
    },
    {
      name: "Jane",
      surname: "Doe",
      email: "jane-doe@foo.com",
      avatar: "jane doe.png",
    },
    {
      name: "Svelte",
      surname: "JS",
      email: "sveltejs@dev.io",
      avatar: "logo-512.png",
    },
  ];
  let user = {};
  function checkUser() {
    for (let u in users) {
      if (email == u.email) {
        user = { ...u };
        console.table(user);
      } else {
        console.log("utilisateur non reconnu");
      }
    }
    return user;
  }
  let display = "login";
  function closeApp() {
    display = "close";
  }
</script>

<style>
</style>

<Login on:closeApp={closeApp} />
<!-- {#if display == 'close'}
  <CloseApp />
  
{/if} -->
