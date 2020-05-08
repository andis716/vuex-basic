<template>
  <div id="product-list-one">
  <h3>Product List One</h3>
  <ul>
    <li v-for="product in saleProducts" :key="product.nama">
      <span class="nama">{{ product.nama }}</span>
      <span class="harga"> Rp {{ product.harga }}</span>
    </li>
  </ul>
  <button v-on:click="reduceHarga(4)"> Reduce Harga</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  computed : {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters([
      'saleProducts'
    ])
  }, 
  methods: {
    ...mapActions([
      'reduceHarga'
    ])
  }

}
</script>

<style scope>
  #product-list-one {
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,2);
    margin-bottom: 30px;
    padding: 10px 20px;
  }
  #product-list-one ul {
    padding: 0;
    list-style-type: none;
  }
  #product-list-one li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(225, 225, 225, 0.7);
  }
  .harga {
    font-weight: bold;
    color: #860CE8;
    display: block;
  }
</style>