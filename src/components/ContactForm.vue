<template>
  <form class="contactform" @submit.prevent="handleSubmit">
    <v-container>
      <v-row>
        <v-col class="form-input" cols="12" md="6">
          <label class="form-input__label" for="firstname">NOMBRE</label>
          <input
            class="form-input__field"
            v-model="formInfo.firstname"
            type="text"
            id="firstname"
            name="firstname"
          />
        </v-col>

        <v-col cols="12" md="6">
          <label class="form-input__label" for="lastname">APELLIDO</label>
          <input
            class="form-input__field"
            v-model="formInfo.lastname"
            type="text"
            id="lastname"
            name="lastname"
          />
        </v-col>

        <v-col cols="12" md="6">
          <label class="form-input__label" for="email">EMAIL</label>
          <input
            class="form-input__field"
            v-model="formInfo.email"
            type="email"
            id="email"
            name="email"
          />
        </v-col>

        <v-col cols="12" md="6">
          <label class="form-input__label" for="phone">TELÉFONO</label>
          <input
            class="form-input__field"
            v-model="formInfo.phone"
            type="tel"
            id="phone"
            name="phone"
          />
        </v-col>

        <v-col cols="12" class="text-right">
          <button type="send">ENVIAR</button>
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      formInfo: {
        firstname: null,
        lastname: null,
        email: null,
        phone: null
      }
    };
  },

  methods: {
    ...mapActions(["newsletterSubscribe"]),

    handleSubmit() {
      this.newsletterSubscribe(this.formInfo);
    }
  }
};
</script>
