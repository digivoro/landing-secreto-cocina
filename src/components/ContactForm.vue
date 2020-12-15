<template>
  <form class="contactform">
    <v-container>
      <v-row class="d-flex">
        <v-col cols="12" md="6">
          <label for="firstname">NOMBRE</label>
          <input type="text" id="firstname" name="firstname" />
        </v-col>
        <v-col cols="12" md="6">
          <label for="lastname">APELLIDO</label>
          <input type="text" id="lastname" name="lastname" />
        </v-col>
        <v-col cols="12" md="6">
          <label for="email">EMAIL</label>
          <input type="email" id="email" name="email" />
        </v-col>
        <v-col cols="12" md="6">
          <label for="phone">TELÉFONO</label>
          <input type="tel" id="phone" name="phone" />
        </v-col>
        <v-col>
          <button type="send">ENVIAR</button>
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>

<script>
export default {};
</script>

<style>
label {
  display: block;
}
input {
  height: 3rem;
  width: 100%;
  border: 2px solid #aaa;
}

button {
  height: 3rem;
  width: 10rem;
  border-radius: 1.5rem;
  background-color: #d8ad3d;
  color: white;
}
</style>
