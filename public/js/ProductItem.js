export const ProductItem = {
    props: ['product', 'img'],
    template: `<div class='product-item'>
                    <img :src='img' alt='photo'>
                    <div class='desc'>
                        <h3>{{product.product_name}}</h3>
                        <p>{{product.price}}</p>
                        <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
                    </div>
                </div>`
};