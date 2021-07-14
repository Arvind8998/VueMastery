app.component('review-list', {
    props:{
        reviews:{
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="reviewContainer">
            <h3> Review:</h3>
            <ul>
            <li v-for="(review,index) in reviews" v-bind:key="index">
            {{review.name}} gave this {{review.rating}} stars
            <br />
            "{{ review.review }}"
        <br/>
        <!-- solution -->
        Recommended: {{ review.recommend }}
            </li>
            </ul>
        </div>`
    
})