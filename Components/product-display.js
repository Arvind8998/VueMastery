app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true
    },
  },
  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping {{shipping}}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="handleHover(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        ></div>

        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          v-on:click="addToCart"
        >
          Add to Cart
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-from @review-submitted="addReview"></review-from>
  </div>`,
  data() {
    return {
      brand: "Nike",
      product: "Socks",
      googleWebsite: "https://www.google.com/",
      invetory: 0,
      details: ["50% Cotton", "Polyester", "Nylon"],
      selectedVariant: 0,
      reviews:[],
      variants: [
        {
          id: 2234,
          color: "green",
          image:
            "https://000517248.codepen.website/assets/images/socks_green.jpg",
          quantity: 0,
        },
        {
          id: 2235,
          color: "blue",
          image:
            "https://000517248.codepen.website/assets/images/socks_blue.jpg",
          quantity: 540,
        },
      ],
      isActive: false,
      toggleStyle: {
        color: "white",
        fontSize: "1rem",
      },
    }
  },
  methods: {
    handleHover(selectedVariant) {
      this.selectedVariant = selectedVariant
    },
    addToCart(){
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    addReview(reviews){
        this.reviews.push(reviews)
    }
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    title() {
      return this.brand + " " + this.product
    },
    shipping(){
        if(this.premium){
            return 'Free'
        }
        return 2.99
    }

  },
})
