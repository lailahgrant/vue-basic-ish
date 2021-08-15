// var product = "Socks"

var app = new Vue({

    el: '#app',
    data: {
        product: "Socks",
        description: "Socks keep our feet warm, soft and feeling comfy",
        // image: "./vmSocks-green.jpg", - replacing image with selectedVariant
        selectedVariant:0,
        href: "https://en.wikipedia.org/wiki/Sock",
        brand:"Vue Mastery",
        inStock: true,
        // inventory:100,
        onSale: true,
        details: [
            "80% cotton",
            "20% polyester",
            "Gender-neutral"
        ],
        sizes: [
            "10 small", "12 Medium", "18 Large"
        ],
        // array of objects
        variants: [
            { variantId: 2234, variantColor: "green", variantImage:"./vmSocks-green.jpg" },
            { variantId: 2235, variantColor: "blue", variantImage: "./vmSocks-blue.jpg" }
        ],

        cart: 0,
    },

    //methods property
    methods: {
        addToCart() {
            this.cart +=1
        },

        removeFromCart() {
            if (this.cart > 0) {
                this.cart -=1
            }

        },

        // updateProduct(variantImage) {
        //     this.image = variantImage;
        // }

        //index is from the v-for="(variant,index)"
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index) //when hover on green or blue, 0 1 are returned respectively
        }
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        
        //make image into a computed property
        image() {
            return this.variants[this.selectedVariant].variantImage
        }
    }

})



