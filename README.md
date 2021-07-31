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
- `v-bind` - dynamically binds an `attribute` to an `expression`.
`v-bind:src="expression"`
- Shorthand for `v-bind` is `:` ie instead of `<img v-bind:src="image">` -  use `<img :src="image">` 
- The attribute name that comes after the `:` specifies the attribute we are binding date to.

### Conditional rendering
- How to conditionally display elements in Vue.
- `v-if`, `v-else`, `v-else-if`, `v-show`.
- Check for the `truthy` of expressions.







