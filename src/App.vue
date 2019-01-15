<template>
  <div id="app">
      <section class="container">
        <div class="content">
          <h1>Cheatsheet</h1>
        </div>
      </section>
      
      <div class="container content">
          <h2>Javascript</h2>      
      </div>
      
      <section class="background--yellow">
        <div class="container content">
          <row>
            <column medium="1:2">
              <vue-markdown>
#### Custom Properties

Add or read custom properties
              </vue-markdown>
            </column>
            <column medium="1:2">
             <vue-markdown>
**Set**
```js
element.style.setProperty(propertyName, value, priority);
````

**Get**
```js
element.style.getProperty(propertyName);
```
**Remove**
```js
element.style.removeProperty(propertyName);
```   
         
          </vue-markdown>
            </column>
          </row>
        </div>
      </section>
      
      
      
      <div class="container content">
          <h2>Misc.</h2>      
      </div>
      
      
        <section class="background--green">
        <div class="container content">
          <row>
            <column medium="1:2">
              <vue-markdown>
#### To Lowercase

There are so many ways to make a string lowercase, every language has its own function. 
              </vue-markdown>
            </column>
            <column medium="1:2">
             <vue-markdown>
**SCSS**
```scss
to-lower-case($string);
````

**JS**
```js
toLowerCase(string);
```
**PHP**
```php
strtolower(string);
```   
         
          </vue-markdown>
            </column>
          </row>
        </div>
      </section>
      <sil-footer /> 
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import Grid from "@sil/grid";

import silFooter from "./components/footer.vue";
const Row = Grid.row;
const Column = Grid.column;

export default {
  name: "app",
  components: {
    VueMarkdown,
    Column,
    Row,
    silFooter
  }
};
</script>


<style lang="scss">
@import "~@sil/base-style/src/scss/index.full";

code[class*="language"] {
  background-color: color(Black, 0.85);
  border: 1px solid color(Black, 1);
  color: color(White);
  padding: 1rem;
}
</style>
