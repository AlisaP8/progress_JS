const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    // {},
];


const renderGoodsItem = (title = 'отсутствует', price = '0') => {
    return `<div class="goods-item">
        <img class='image-item src="" alt="фото"' />
        <h3>${title}</h3>
        <p>${price}</p>
        <button class="button-item">Купить</button>
    </div >`
};

// const renderGoodsItem = (title='', price='') =>
//     `<div>
//         <h2>${title}</h2>
//         <p>${price}</p>
//         <button>Купить</button>
//     </div>`

const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
};

renderGoodsList(goods);
