<template>
  <form class="contactform" @submit.prevent="handleSubmit">
    <v-container>
      <v-row>
        <!-- Firstname -->
        <v-col
          class="form-group"
          :class="{ 'form-group--error': $v.formInfo.firstname.$error }"
          cols="12"
          md="6"
        >
          <label class="form__label" for="firstname">NOMBRE</label>
          <input
            v-model.trim="$v.formInfo.firstname.$model"
            class="form__field"
            v-model="formInfo.firstname"
            type="text"
            id="firstname"
            name="firstname"
          />
          <div class="error" v-if="!$v.formInfo.firstname.minLength">
            El nombre debe tener al menos
            {{ $v.formInfo.firstname.$params.minLength.min }} letras.
          </div>
          <div
            class="error"
            v-if="
              formInfo.submitStatus === 'ERROR' &&
                !$v.formInfo.firstname.required
            "
          >
            El nombre es requerido.
          </div>
        </v-col>

        <!-- Lastname -->
        <v-col
          class="form-group"
          :class="{ 'form-group--error': $v.formInfo.lastname.$error }"
          cols="12"
          md="6"
        >
          <label class="form__label" for="lastname">APELLIDO</label>
          <input
            class="form__field"
            v-model.trim="$v.formInfo.lastname.$model"
            v-model="formInfo.lastname"
            type="text"
            id="lastname"
            name="lastname"
          />
          <div class="error" v-if="!$v.formInfo.lastname.minLength">
            El apellido debe tener al menos
            {{ $v.formInfo.lastname.$params.minLength.min }} letras.
          </div>
          <div
            class="error"
            v-if="
              formInfo.submitStatus === 'ERROR' &&
                !$v.formInfo.lastname.required
            "
          >
            El apellido es requerido.
          </div>
        </v-col>

        <!-- Email -->
        <v-col
          class="form-group"
          :class="{ 'form-group--error': $v.formInfo.email.$error }"
          cols="12"
          md="6"
        >
          <label class="form__label" for="email">EMAIL</label>
          <input
            class="form__field"
            v-model.trim="$v.formInfo.email.$model"
            v-model="formInfo.email"
            type="email"
            id="email"
            name="email"
          />
          <div class="error" v-if="!$v.formInfo.email.email">
            Ingresa un email válido.
          </div>
          <div
            class="error"
            v-if="
              formInfo.submitStatus === 'ERROR' && !$v.formInfo.email.required
            "
          >
            El email es requerido.
          </div>
        </v-col>

        <!-- Phone -->
        <v-col
          class="form-group"
          :class="{ 'form-group--error': $v.formInfo.phone.$error }"
          cols="12"
          md="6"
        >
          <label class="form__label" for="phone">TELÉFONO</label>
          <input
            class="form__field"
            v-model.trim="$v.formInfo.phone.$model"
            v-model="formInfo.phone"
            type="tel"
            id="phone"
            name="phone"
          />
          <div class="error" v-if="!$v.formInfo.phone.minLength">
            El teléfono debe tener al menos
            {{ $v.formInfo.phone.$params.minLength.min }} números.
          </div>
          <div class="error" v-if="!$v.formInfo.phone.numeric">
            Solo se aceptan números.
          </div>
          <div
            class="error"
            v-if="
              formInfo.submitStatus === 'ERROR' && !$v.formInfo.phone.required
            "
          >
            El teléfono es requerido.
          </div>
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
import { required, numeric, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      formInfo: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        submitStatus: null
      }
    };
  },

  validations: {
    formInfo: {
      firstname: {
        required,
        minLength: minLength(3)
      },
      lastname: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      phone: {
        required,
        numeric,
        minLength: minLength(9)
      }
    }
  },

  methods: {
    ...mapActions(["newsletterSubscribe"]),

    handleSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.formInfo.submitStatus = "ERROR";
      } else {
        this.newsletterSubscribe(this.formInfo);
      }
    }
  }
};
</script>
