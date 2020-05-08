import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { nama: "pisang ambon", harga: 3000 },
      { nama: "jambu merah", harga: 4000 },
      { nama: "jeruk bali", harga: 3800 },
      { nama: "alupukat", harga: 2000 }
    ]
  },
  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map( product => {
        return {
          nama: '**' + product.nama + '**',
          harga: product.harga / 2
        }
      });
      return saleProducts;
    }
  },
  mutations: {
    reduceHarga: (state, payload) => {
      state.products.forEach( product => {
        product.harga -= payload;
      })
    }
  },
  actions: {
    reduceHarga: (context,payload) => {
      setTimeout(function() {
        context.commit('reduceHarga',payload);
      },2000)
    }
  },
  modules: {
  }
})
