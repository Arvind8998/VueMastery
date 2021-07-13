const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      inStock: true,
      image: "https://000517248.codepen.website/assets/images/socks_green.jpg",
      googleWebsite: "https://www.google.com/",
      invetory: 0,
      details: ["50% Cotton", "Polyester", "Nylon"],
      variants: [
        {
          id: 2234,
          color: "green",
          image:
            "https://000517248.codepen.website/assets/images/socks_green.jpg",
        },
        {
          id: 2235,
          color: "blue",
          image:
            "https://000517248.codepen.website/assets/images/socks_blue.jpg",
        },
      ],
      cart: 0,
      isActive: false,
      toggleStyle: {
        color: 'white',
        fontSize: "1rem",
      },
    }
  },
  methods: {
    handleCart() {
      this.cart += 1
    },
    changeImage(image) {
      debugger
      this.image = image
    },
  },
})
