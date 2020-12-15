<template>
  <nav class="socialicons">
    <a href="https://www.facebook.com" class="socialicons__icon cerulean">
      <img src="../assets/facebook-icon.svg" />
    </a>
    <a href="https://www.instagram.com" class="socialicons__icon poppy">
      <img src="../assets/instagram-icon.svg" />
    </a>
    <a href="https://www.youtube.com" class="socialicons__icon anzak">
      <img src="../assets/youtube-icon.svg" />
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          name: "Facebook",
          src: "../src/assets/facebook-icon.svg",
          alt: "Facebook Logo"
        },
        {
          name: "Instagram",
          src: "src/assets/instagram-icon.svg",
          alt: "Instagram Logo"
        },
        {
          name: "Youtube",
          src: "src/assets/youtube-icon.svg",
          alt: "Youtube Logo"
        }
      ]
    };
  },

  methods: {
    getImgSrc(src) {
      return require(src);
    }
  }
};
</script>

<style lang="scss" scoped></style>
