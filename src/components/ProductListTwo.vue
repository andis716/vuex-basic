<template>
  <div id="product-list-two">
  <h3>Product List Two</h3>
  <ul>
    <li v-for="product in saleProducts" :key="product.nama">
      <span class="nama">{{ product.nama }}</span>
      <span class="harga"> Rp {{ product.harga }}</span>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  computed : {
    products() {
      return this.$store.state.products
    }, 
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  }

}
</script>

<style scope>
  #product-list-two {
    background: plum;
    box-shadow: 1px 2px 3px rgba(0,0,0,2);
    margin-bottom: 30px;
    padding: 10px 20px;
  }
  #product-list-two ul {
    padding: 0;
    list-style-type: none;
  }
  #product-list-two li {
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