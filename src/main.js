// import Vue from 'vue'
import App from './App.vue'
// import VueApollo from 'vue-apollo'
// import { ApolloClient } from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'

// Vue.config.productionTip = false

// Vue.use(VueApollo)

// // HTTP connection to the API
// const httpLink = createHttpLink({
//   // You should use an absolute URL here
//   uri: 'https://venia.magento.com/graphql',
//   fetchOptions: {
//     mode: 'no-cors'
//   }
// })

// // Cache implementation
// const cache = new InMemoryCache()

// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// })

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
// })

// new Vue({
//   el: '#app',
//   // inject apolloProvider here like vue-router or vuex
//   apolloProvider,
//   render: h => h(App),
// }).$mount('#app')



import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  // Configure your Apollo Client options here
  // e.g., provide the GraphQL endpoint URL
  uri: 'https://venia.magento.com/graphql',
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');