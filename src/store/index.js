import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let articlesGetURL = "https://5eed24da4cbc340016330f0d.mockapi.io/api/articles";
let formPostURL = "https://5eed24da4cbc340016330f0d.mockapi.io/api/subscribe";

export default new Vuex.Store({
  state: {
    articles: [],
    filters: {
      selectedItem: 0,
      items: [
        {
          id: 0,
          title: "TODOS"
        },
        {
          id: 1,
          title: "PRODUCTOS",
          category: "Productos"
        },
        {
          id: 2,
          title: "RECETAS",
          category: "Recetas"
        },
        {
          id: 3,
          title: "CONSEJOS",
          category: "Consejos"
        }
      ]
    }
  },

  mutations: {
    GET_ARTICLE_LIST(state, articleList) {
      state.articles.push(...articleList);
    },

    UPDATE_SELECTED_ITEM(state, value) {
      state.filters.selectedItem = value;
    }
  },

  actions: {
    async getArticleList({ commit }) {
      try {
        let response = await axios.get(articlesGetURL);
        console.log(response);
        commit("GET_ARTICLE_LIST", response.data);
      } catch (error) {
        console.log(error);
      }
    },

    async newsletterSubscribe(context, formData) {
      try {
        console.log("newsletter formData:", formData);
        let response = await axios.post(formPostURL, formData);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  },

  getters: {
    filteredArticles(state) {
      if (state.filters.selectedItem === 0) {
        return state.articles;
      } else {
        return state.articles.filter(
          article =>
            article.category.toLowerCase() ===
            state.filters.items[
              state.filters.selectedItem
            ].category.toLowerCase()
        );
      }
    }
  }
});
