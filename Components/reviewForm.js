app.component("review-from", {
  template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <label for="name">Name</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea v-model="review"></textarea>

        <label for="Recommend">Recommendation</label>
        
        <select id="recommend" v-model="recommend">
            <option>Yes</option>
            <option>No</option>
        </select>

        <br />
        <label for="rating">Rating:</label>
        
        <select v-model.number="rating">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <button class="button" type="submit" value="Submit">Submit</button>
    </form>
    `,
  data() {
    return {
      name: "",
      review: "",
      recommend: null,
      rating: null,
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
        alert('Review is incomplete. Please fill out every field.')
        return
      }

      let productReview = {
        name: this.name,
        review: this.review,
        recommend: this.recommend,
        rating: this.rating,
      }

      this.$emit('review-submitted', productReview)

      this.name = ""
      this.review = ""
      this.recommend = null
      this.rating = null
    },
  },
})
