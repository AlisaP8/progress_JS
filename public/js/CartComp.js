import { CartItem } from "./CartItem.js";

export const Cart = {
    inject: ['API', 'getJson', 'putJson', 'postJson', 'deleteJson'],
    components: {
        CartItem,
    },
    data() {
        return {
            showCart: false,
            cartUrl: '/getBasket.json',
            imgCart: 'https://placehold.it/50x100',
            cartItems: [],
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
                    .then(data => {
                        if (data.result) {
                            find.quantity++
                        }
                    });
                return
            }

            const prod = Object.assign({ quantity: 1 }, product);

            this.postJson(`/api/cart`, prod)
                .then(data => {
                    if (data.result) {
                        this.cartItems.push(prod);
                    }
                });
        },
        remove(product) {
            if (product.quantity > 1) {
                this.putJson(`/api/cart/${product.id_product}`, { quantity: -1 })
                    .then(data => {
                        if (data.result) {
                            product.quantity--
                        }
                    });
            } else {
                this.deleteJson(`/api/cart/${product.id_product}`)
                    .then(data => {
                        if (data.result) {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        }
                    })
            }
        },
    },
    mounted() {
        this.getJson(`/api/cart`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
    },
    template: `
            <button class="btn-cart" type="button" @click="showCart = !showCart">??????????????</button>
                <div class='cart-block' v-show='showCart'>
                    <p v-if="!cartItems.length">No products</p>
                    <CartItem 
                        v-for='el of cartItems' 
                        :cartItem='el'
                        :img="imgCart"
                        @remove="remove"
                    ></CartItem>
                </div>`,
};