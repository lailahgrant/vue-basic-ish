# VUE MASTERY  - Intro to Vue 2
## Learn the fundamentals of Vue while building a Product page

### To learn
- Vue Instance
- Attribute binding
- Conditional rendering
- List rendering
- Event Handling
- Class and Style binding

### Vue Instance
` var app = new Vue({ options }) `
- The Vue instance is the root of the application.
It is created by passing an `options` object into it :- this object has a variety of `optional` properties that give the instance the ability to store data and perform actions.
- The Vue instance plugs into an element in the DOM ie el:"#app"
- The Vue instance's data can be displayed using a mustache-like syntax `{{  }}` called an `expression` .
- Vue is `Reactive`.

### Attribute binding
- How to connect data to the attributes of the HTML elements.
- `v-bind` directive - dynamically binds an `attribute` to an `expression`.
`v-bind:src="expression"`
- Shorthand for `v-bind` is `:` ie instead of `<img v-bind:src="image">` -  use `<img :src="image">` 
- The attribute name that comes after the `:` specifies the attribute we are binding date to.

### Conditional rendering
- How to conditionally display elements in Vue.
- `v-if`, `v-else`, `v-else-if`, `v-show` directives
- Check for the `truthy` of expressions.
- How to conditionally render elements depending on `if` a condition is met or not
- `v-show` only toggles visibility, it does not insert/remove the element from the DOM.

### List rendering
- Display lists onto webpages with Vue - use `v-for`
- `v-for` directive allows us to loop over an array and render data from within it.
- e.g. `v-for="detail in details"`  in an element.
- in the above line, `detail` is an `alias`, then `in` and name the 'collection' `details` that we're looping through.
- with `v-for`, can iterate over Arrays and objects.
- Iterating over objects is more complex.
- Use a `dot` notation to display a property from an object
- e.g. v-for="variant in variants"     {{ variant.variantColor }}
- NB: it is recommended to use a `special key attribute` when rendering elements like  this so that Vue can keep track of each node's activity. 
    ` use e.g variant's unique ` `variantId` property .
- `v-for="detail in details"  :key="variant.variantId" ` in an element


### Event Handling
- How to listen for DOM events that are used to trigger methods.
- `v-on` directive lets Vue know we're listening for events on that element.
- `v-on:click="expression"` 
after the `:`, we specify the kind of event we're listening for i.e here it is `a click`.
- Instead of an expression in the "", we can call a method that gets triggered when that event occurs 
`v-on:click="addClickMethod"`
- Just like data, the Vue instance has an optional property of `methods`.
- methods are written within the `methods` property
- methods:{....}
- Shorthand for `v-on` is `@`
- The `v-on` can trigger a method.
- Triggered methods can take in arguments
- `this` refers to the current Vue instance's data as well as other methods declared inside the instance.







