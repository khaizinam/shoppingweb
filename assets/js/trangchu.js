function logg(mess) {
    return console.log(mess);
}
class Page {
    constructor() {
        this.now = ' ';
        this.boot();
    }
    boot() {
        if (this.now === ' ') {
            if (localStorage.getItem('page')) {
                this.now = localStorage.getItem('page');
            } else {
                this.now = 'home-page';
            }
        }
        this.open(this.now);
        logg(this.now);
    }
    close(e) {
        $(`#${e}`).hide();
        $(`#${e}-btn`).attr('class', 'icon-standard');
        if (e === 'detail-page') {
            $(`.non-detail`).css('display', 'flex');
            $(`.detail-active`).css('display', 'none');
            $(`#header-wrapper`).attr('class', 'gradient');
            $(`.page`).css('margin-top', '80px');

        }
    }
    open(e) {
        if (this.now === e) {
            $(`#${e}`).show();
            $(`#${e}-btn`).attr('class', 'icon-standard active');
        } else {
            $(`#${e}`).show();
            $(`#${e}-btn`).attr('class', 'icon-standard active');
            this.close(this.now);
            if (e === 'detail-page') {
                $(`.non-detail`).css('display', 'none');
                $(`.detail-active`).css('display', 'flex');
                $(`#header-wrapper`).attr('class', ' ');
                $(`.page`).css('margin-top', '0px');
            }
        }
        this.now = e;
    }
    detail(id) {
        this.open('detail-page');
    }
}
var listPage = [
    'home-page',
    'cate-page',
    'chat-page',
    'user-page',
    'cart-page',
];
var page = new Page();
listPage.forEach(element => {
    document.getElementById(`${element}-btn`).onclick = () => {
        page.open(element);
    }
});
class Product {
    constructor() {
        this.data = {
            1: {
                id: 1,
                name: 'Tay cầm chơi game cho FPT Play BOx 2019-X3',
                price: 188100,
                sale: 15,
                img: 'giày.jpg',
            },
            2: {
                id: 3,
                name: 'Tay cầm chơi game cho FPT Play BOx 2019-X3',
                price: 188100,
                sale: 15,
                img: 'giày.jpg',
            },
            3: {
                id: 4,
                name: 'Tay cầm chơi game cho FPT Play BOx 2019-X3',
                price: 188100,
                sale: 15,
                img: 'giày.jpg',
            },
            4: {
                id: 5,
                name: 'Tay cầm chơi game cho FPT Play BOx 2019-X3',
                price: 188100,
                sale: 15,
                img: 'giày.jpg',
            },
            5: {
                id: 6,
                name: 'Tay cầm chơi game cho FPT Play BOx 2019-X3',
                price: 188100,
                sale: 15,
                img: 'giày.jpg',
            }
        }
        this.boot();
    }
    boot() {
        this.show();
        this.render();
    }
    show() {
        var parentEle = document.getElementsByClassName('product-list-wraper')[0];
        var data = this.data;
        for (const key in data) {
            let childItem = document.createElement("div");
            childItem.setAttribute('class', 'product-item-wrapper');
            childItem.setAttribute('onclick', `page.detail(${data[key].id})`);
            childItem.setAttribute('type', 'button');
            let contetnBarWidth = $('#mobile-responsive').width() * 0.5 - 20;
            let limitWordPerRow = Math.floor(contetnBarWidth / 7) * 2;
            let productName = data[key].name;
            if (productName.length >= limitWordPerRow) {
                productName = `${productName.substr(0,limitWordPerRow - 3)}...`;
            }
            logg(limitWordPerRow);
            childItem.innerHTML = `
                <div class="background-none-img img-render">
                    <img src="../assets/img/noimage.jpg" alt="product-img">
                </div>
                <div class="product-img img-render">
                    <img src="../assets/img/productimg/${data[key].img}" alt="product-img">
                </div>
                <div class="product-content">
                    <span>${productName}</span>
                </div>
                <div class="product-price">
                    <span>${data[key].price.toLocaleString('en-US')} đ</span>
                </div>
            `;
            parentEle.appendChild(childItem);
        }
    }
    render() {
        let w = $('#mobile-responsive').width();
        $('.product-item-wrapper').width(`${w * 0.5 - 10}px`);
        $('.product-item-wrapper').height(`${w * 0.5 + 80}px`);
        $('.img-render').width(`${w * 0.5 - 10}px`);
        $('.img-render').height(`${w * 0.5 - 10}px`);

    }
}
const product = new Product();

function render() {
    let wHeight = $(window).height();
    let mobile = '#mobile-responsive';
    let header = '#header-wrapper';
    let menu = '#menu-bar-wrapper';
    //$(mobile).height(wHeight);
    $(header).width($(mobile).width());
    $(menu).width($(mobile).width());
}

window.onload = () => {
    render();
    logg(`init render screen :\n
    -window height : ${$(window).height()}
    -window width :  ${$(window).width()}`);
}
window.onresize = () => {
    render();
    product.render();
}