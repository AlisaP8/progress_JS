import { Cart } from "./CartComp.js";
import { Products } from "./ProductComp.js";
import { Filter } from "./FilterComp.js";
import { Error } from "./ErrorComp.js";

const App = {
    components: {
        Cart,
        Products,
        Filter,
        Error,
    },
    data() {
        return {
            API: `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`,
            userSearch: ''
        }
    },
    provide() {
        return {
            API: this.API,
            getJson: this.getJson,
            putJson: this.putJson,
           postJson: this.postJson,
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error))
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error))
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error))
        }
    },
};

Vue.createApp(App).mount('#app');


// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// const app = new Vue({
//     el: '#app',
//     data: {
//         userSearch: '',
//         catalogUrl: '/catalogData.json',
//         imgCart: 'https://placehold.it/50x100',
//         showCart: false,
//         cartUrl: '/getBasket.json',
//         imgProduct: 'https://placehold.it/200x150',
//         products: [],
//         filtered: [],
//         cartItems: [],
//         error: false,
//     },
//     methods: {
//         getJson(url) {
//             return fetch(url)
//                 .then(result => result.json())
//                 .catch(error => {
//                     console.log(error)
//                     this.error = true;
//                 })
//         },
//         addProduct(item) {
//             this.getJson(`${API}/addToBasket.json`)
//                 .then(data => {
//                     if (data.result === 1) {
//                         let find = this.cartItems.find(el => el.id_product === item.id_product);
//                         if (find) {
//                             find.quantity++;
//                         } else {
//                             const prod = Object.assign({ quantity: 1 }, item);
//                             this.cartItems.push(prod)
//                         }
//                     }
//                 })
//         },
//         remove(item) {
//             this.getJson(`${API}/addToBasket.json`)
//                 .then(data => {
//                     if (data.result === 1) {
//                         if (item.quantity > 1) {
//                             item.quantity--;
//                         } else {
//                             this.cartItems.splice(this.cartItems.indexOf(item), 1);
//                         }
//                     }
//                 })
//         },
//         filter() {
//             let regexp = new RegExp(this.userSearch, 'i');
//             this.filtered = this.products.filter(el => regexp.test(el.product_name));
//         },
//     },
//     mounted() {
//         this.getJson(`${API + this.cartUrl}`)
//             .then(data => {
//                 for (let el of data.contents) {
//                     this.$data.cartItems.push(el);
//                 }
//             });
//         this.getJson(`${API + this.catalogUrl}`)
//             .then(data => {
//                 for (let el of data) {
//                     this.$data.products.push(el);
//                     this.$data.filtered.push(el);
//                 }
//             });

//         this.getJson(`getProducts.json`)
//             .then(data => {
//                 for (let el of data) {
//                     this.$data.products.push(el);
//                     this.$data.filtered.push(el);
//                 }
//             })
//     }
// });