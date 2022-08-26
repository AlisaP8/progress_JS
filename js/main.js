class GoodsItem {
    constructor(title, price, img) {
        this.title = title;
        this.price = price;
        this.img = img
    }

    render() {
        return `<div class="goods-item">
                <img class='image-item src="${img}" alt="фото"'/>
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="button-item">Купить</button>
            </div >`
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        makeGETRequest(`${API_URL}/catalogData.json`)
            .then((goods) => {
                this.goods = JSON.parse(goods);
                console.log(`${goods}`)
            })
            .then(() => { this.render() })
            .catch(err => { console.error('err') })
    }

    getSum() {

        let sumGoods = 0;
        this.goods.forEach(good => {
            sumGoods += good.price;
            // console.log(`${sumGoods}`);
        })
        console.log(`Общая сумма состовляет ${sumGoods} рублей`)
    }
}

class Basket {
    constructor() {

    }

    addGood() {

    }

    updateGood() {

    }

    removeGood() {

    }

    render() {

    }
}

class ElemBasket {
    render() {

    }
}


// const list = new GoodsList();
// list.fetchGoods();
// list.getSum();

function makeGETRequest(url) {

    return new Promise((resolve, reject) => {
        let time = Math.random() * 100;
        console.log(time);

        b.send();
        b.open('GET', url, true);

        return Promise;
    });
};