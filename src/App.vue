<template>
  <div id="app">
    <section class="container">
      <div class="content">
        <h1>cheatSheet</h1>
        <p>Those thing which you keep looking up and up and never get in your head. I know the website where I can find them, but I just want to have 1 simpel resource for all these recurring little lookups.</p>
      </div>
    </section>
    <div
      v-for="(value, key, index) in cheatSheet"
      :key="index"
    >
      <div class="container content">
        <h3>{{key}}</h3>
      </div>

      <section class="cheatsheet__group" :class="key">
        <div
          class="container content"
          v-for="(cheat,index) in value"
          :key="index"
        >
          <row>
            <column medium="1:2">
              <div class="cheatsheet__description">
                <markdown
                  :source="cheat.content"
                  meta
                >
                  <h5 meta="Title" />
                  <div meta="Description" />
                </markdown>
              </div>
            </column>
            <column medium="1:2">
              <markdown :source="cheat.content" />
            </column>
          </row>
        </div>
      </section>
    </div>

    <sil-footer />
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import Markdown from "@sil/markdown";
import Grid from "@sil/grid";

import silFooter from "./components/footer.vue";
const Row = Grid.row;
const Column = Grid.column;

export default {
  name: "app",
  components: {
    Markdown,
    Column,
    Row,
    silFooter
  },
  data() {
    return {
      cheatSheet: {
        css: [],
        javascript: [],
        misc: []
      }
    };
  },
  watch: {
    /* eslint-disable */
    cheatSheet: function(val) {
      // console.log(this.cheatSheet);
    }
  },
  created() {
    this.getCheats();
  },
  methods: {
    getCheats() {
      let _this = this;
      axios
        .get(
          "https://gist.githubusercontent.com/silvandiepen/2a403fd1e86f1cee228f120096ec0689/raw/all.json"
        )
        .then(function(response) {
          // handle success
          _this.setContent(response.data);
        })
        .catch(function(error) {});
    },
    setContent(data) {
      let _this = this;
      Object.keys(data).forEach(function(value, key) {
        let cheatGroup = [];
        data[value].forEach((cheat, index) => {
          axios
            .get(
              `https://gist.githubusercontent.com/silvandiepen/2a403fd1e86f1cee228f120096ec0689/raw/${cheat}.md`
            )
            .then(function(response) {
              cheatGroup.push({
                name: cheat,
                content: response.data
              });
              if (index === data[value].length - 1) {
                // console.log(cheatGroup);
                // _this.cheatSheet[value] = cheatGroup;
                _this.cheatSheet[value] = { ...cheatGroup };
              }
            });
        });
      });
      return;
      console.log(_this.cheatSheet);
    },
    categoryClass(cat) {
      return `category--${cat}`;
    }
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
  overflow: scroll;
}
h3 {
  opacity: 0.5;
}
.cheatsheet {
  &__group {
    background-color: color(Brown);
    color: contra(Brown);
    .container + .container {
      border-top: 1px solid color(Black, 0.25);
    }
    &.css {
      background-color: color(Blue);
      color: contra(Blue);
    }
    &.javascript {
      background-color: color(Green);
      color: contra(Green);
    }
    &.misc {
      background-color: color(Yellow);
      color: contra(Yellow);
    }
  }
  &__description{
    @media #{$medium-up}{
      padding-right: 4rem; 
    }
  }
}
</style>
