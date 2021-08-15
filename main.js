Vue.component('product', {

    props: {
        premium: {
            type: Boolean,
            required: true
    }  
    },

    template: `
        

        <div class="product">
            <div class="product-image">
                <img v-bind:src="image" alt="" >
            </div>
        

            <div class="product-info">
                <!-- <h1> {{ product }} </h1> -->
                <h1> {{ title }}  </h1>  <!--- computed property-->
                <p>{{ description }}</p>
                <a :href="href">More about Socks</a>
                <p v-if="inStock">In Stock</p>
                <p :class="{outOfStock : !inStock }" v-else >Out of Stock</p>
                <p>{{ onsale }}</p>
                <!--<p>User is  premium : {{premium}}</p> -->
                <p>Shipping : {{shipping}}</p>

                <ul>
                    <span>Material</span>
                    <li v-for="detail in details" > {{ detail }}</li><br>
                    <span>Sizes</span>
                    <li v-for="size in sizes"> {{ size }}</li>
                </ul>

                <!-- Style Binding - style is bound which targets a css style, :style 
                it can be "{backgroundColor}" or "{'background-color'}"-->
                <!-- <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantId" :style="{backgroundColor : variant.variantColor}" @mouseover="updateProduct(variant.variantImage)"> add index in our v-for, instead of passing the variant.variantImage - we pass index  -->
                    <div class="color-box" v-for="(variant, index) in variants" :key="variant.variantId" :style="{backgroundColor : variant.variantColor}" @mouseover="updateProduct(index)"></div>
                    <!-- <p @mouseover="updateProduct(variant.variantImage)" >{{ variant.variantColor }}</p> -->
                
                
                                
                <!-- <button v-on:click="cart +=1 ">Add to Cart</button> -->
                <!-- :disabled="!inStock" when inStock is false, this attribute binding will disable a button. 
                We shouldn't click the Add to Cart button when there's no product in stock
                If stock is empty, the Add to Cart button changes color from clickable to disable - Class binding
                Class Binding - class name is bound which targets a class name in css, :class-->
                <button v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton : !inStock}" >Add to Cart</button>
                <button @click="removeFromCart" :disabled= "!inStock" :class="{disabledButton : !inStock}">-</button>

                <div class="cart">
                    <p>Cart {{ cart }}</p>
                </div>



                <!-- <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory < 10 && inventory > 0" >Almost out of Stock</p>
                <p v-else >Out of Stock</p> -->

                <!-- <span v-show="onSale">On Sale</span> -->

            </div>
        
        </div>
    
    `,

    //make data object into a function that returns data objects
    data() {
        return {
        product: "Socks",
        description: "Socks keep our feet warm, soft and feeling comfy",
        // image: "./vmSocks-green.jpg", - replacing image with selectedVariant
        selectedVariant:0,
        href: "https://en.wikipedia.org/wiki/Sock",
        brand:"Vue Mastery",
        // inStock: true, - make inStock a computed property,, instead of being a boolean,it gets values from variants
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
            { variantId: 2234, variantColor: "green", variantImage:"./vmSocks-green.jpg", variantQuantity:10 },
            { variantId: 2235, variantColor: "blue", variantImage: "./vmSocks-blue.jpg",  variantQuantity:0 }
        ],

        cart: 0,

        }
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
        },

        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },

        onsale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!'
            }
                return this.brand + ' ' + this.product + ' are not on sale'
        },

        //shipping free or 2.99 for premium user
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return "2.99"
                
        }
    }

})


// var product = "Socks"

var app = new Vue({

    el: '#app',

    data: {
        premium:true
    }
    

})



