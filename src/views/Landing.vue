<template>
  <div class="landing">
    <!-- Hero Section -->
    <section id="hero">
      <header>
        <a href="/">
          <img alt="logo" src="../assets/logo.svg" />
        </a>
        <SocialIcons />
      </header>
      <h1>El secreto de tu cocina</h1>
    </section>

    <!-- Articles Section -->
    <section id="articles">
      <v-container>
        <h2>Nuestros artículos</h2>
        <v-row>
          <v-col cols="12" sm="12" md="3">
            <FilterCard />
          </v-col>
          <v-col class="pt-0" cols="12" sm="12" md="9">
            <v-row>
              <v-col
                v-for="article in filteredArticles"
                :key="article.id"
                cols="12"
                sm="4"
                md="4"
              >
                <ArticleCard :loading="false" :data="article" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Contact Form -->
    <section id="contacto">
      <v-container>
        <h2>Contáctanos</h2>
        <v-row class="d-flex justify-center">
          <v-col cols="8">
            <ContactForm />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import SocialIcons from "@/components/SocialIcons.vue";
import FilterCard from "@/components/FilterCard.vue";
import ArticleCard from "@/components/ArticleCard.vue";
import ContactForm from "@/components/ContactForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "landing",

  components: {
    SocialIcons,
    FilterCard,
    ArticleCard,
    ContactForm
  },

  data() {
    return {
      articleData: {
        title: "Titulo del artículo asdasd kasdi jasjaooko",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam accusantium ea maxime, temporibus a quas commodi. Ipsa iure ea soluta molestias laboriosam itaque deleniti consequuntur, dolore, sapiente vel dolorem?"
      }
    };
  },

  computed: {
    ...mapGetters(["filteredArticles"])
  },

  methods: {
    ...mapActions(["getArticleList"])
  },

  mounted() {
    this.getArticleList();
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  #hero {
    h1 {
      font-size: 4rem;
    }
  }
}
#hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 4rem;
  height: 100vh;
  background-image: url("../assets/hero-background.jpg");
  background-position: center top;
  background-size: 100%;

  header {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    width: 45%;
    margin-bottom: 6rem;
  }
}

h2 {
  text-align: center;
  padding-bottom: 2rem;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.7)
    ),
    url("../assets/heading-shape.png");
  background-size: 400px;
  background-position: center;
  background-position-y: 90%;
  background-clip: border-box;
  background-repeat: no-repeat;
}

section {
  margin-bottom: 3rem;
}
</style>
