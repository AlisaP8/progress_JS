Vue.component('cart', {
    props: ['cartItems', 'facts'],
    template:  `<div class='cart-block' v-show='facts'>
                    <p v-if="!cartItems.length">No products</p>
                    <cart-item v-for='el of cartItems' :cart-item='el'></cart-item>
                </div>`,
});

Vue.component('cart-item', {
    props: ['img', 'cartItem'],
    template:  `<div class='cart-item'>
                    <div class="product-bio">
                        <img :src="img" alt="photo">
                        <div class="product-desc">
                            <div class="product-title">{{ cartItem.product_name }}</div>
                            <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
                            <div class="product-single-price">$ {{ cartItem.price }} each</div>
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="product-price">{{ cartItem.quantity*cartItem.price }}</div>
                        <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>`,
})