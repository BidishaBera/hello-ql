<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   HELLO

   <button @click="getQLData">Get data</button>
   <!-- {{ categories }} -->
   <!-- <p>{{ $apollo.queries.data.loading ? 'Loading...' : $apollo.queries.data }}</p> -->

  </div>
</template>

<script>
import gql from 'graphql-tag'

const GET_DATA = gql`query{
  categories {
    items {
      name,
      children {
        uid,
        name
      }
    }
  }
}`
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  apollo: {
    // Specify the query
    categories: {
      query: GET_DATA,
    },
  },
//     apollo: {
//     // Simple query that will update the 'hello' vue property
//     hello: gql`query{
//   categories {
//     items {
//       name,
//       children {
//         uid,
//         name
//       }
//     }
//   }
// }`,
//   },
// mounted(){
//   console.log(categories);
// },
methods: {
  getQLData() {
    this.$apollo.query({
      query: GET_DATA,
    }).then((data) => {
      console.log('data received--', data);
    })
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>



<!-- <template>
  <div>
    <h1>My Component</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  apollo: {
    items: {
      query: gql`
        query {
          categories {
    items {
      name,
      children {
        uid,
        name
      }
    }
  }
        }
      `,
    },
  },
};
</script> -->
