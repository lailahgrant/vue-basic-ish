// var product = "Socks"

var app = new Vue({

    el: '#app',
    data: {
        product: "Socks",
        description: "Socks keep our feet warm, soft and feeling comfy",
        image: "./vmSocks-green.jpg",
        href: "https://en.wikipedia.org/wiki/Sock",
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

        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }

})



