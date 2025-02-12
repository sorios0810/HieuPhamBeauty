﻿const data = [
    {
        ID: 1,
        IMG_1: "../../Content/img/shop/01.jpg",
        IMG_2: "../../Content/img/shop/01-h1.jpg",
        TITLE: "Nâng cơ xóa nhăn mắt",
        SLIDE_TYPE: 1
    },
    {
        ID: 2,
        IMG_1: "../../Content/img/shop/01.jpg",
        IMG_2: "../../Content/img/shop/01-h1.jpg",
        TITLE: "Nâng cơ xóa nhăn mắt",
        SLIDE_TYPE: 1
    },
    {
        ID: 3,
        IMG_1: "../../Content/img/shop/01.jpg",
        IMG_2: "../../Content/img/shop/01-h1.jpg",
        TITLE: "Nâng cơ xóa nhăn mắt",
        SLIDE_TYPE: 1
    },
    {
        ID: 4,
        IMG_1: "../../Content/img/shop/01.jpg",
        IMG_2: "../../Content/img/shop/01-h1.jpg",
        TITLE: "Nâng cơ xóa nhăn mắt",
        SLIDE_TYPE: 1
    },
    {
        ID: 5,
        IMG_1: "../../Content/img2/sample.jpg",
        IMG_2: "../../Content/img/shop/01-h1.jpg",
        TITLE: "Nâng cơ xóa nhăn mắt",
        SLIDE_TYPE: 2
    },
    {
        ID: 6,
        IMG_1: "../../Content/img2/sample.jpg",
        IMG_2: "../../Content/img/shop/01-h1.jpg",
        TITLE: "Nâng cơ xóa nhăn mắt",
        SLIDE_TYPE: 2
    },
    {
        ID: 7,
        IMG_1: "../../Content/img2/sample.jpg",
        IMG_2: "../../Content/img/shop/01-h1.jpg",
        TITLE: "Nâng cơ xóa nhăn mắt",
        SLIDE_TYPE: 2
    },
    {
        ID: 8,
        IMG_1: "../../Content/img2/sample.jpg",
        IMG_2: "../../Content/img/shop/01-h1.jpg",
        TITLE: "Nâng cơ xóa nhăn mắt",
        SLIDE_TYPE: 2
    },
];

function ProductSlider() {
    // Image Slider Js
    var product = $(".images-col3-slider");
    product.owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: false,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            540: {
                items: 2,
                margin: 15,
            },
            576: {
                items: 2,
                margin: 15,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });

    // Product Slider Js
    var product = $(".product-slider");
    product.owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        margin: 0,
        responsive: {
            0: {
                items: 1,
            },
            540: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    // Product Col2 Slider Js
    var product = $(".product-col2-slider");
    product.owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        margin: 0,
        responsive: {
            0: {
                items: 1,
            },
            540: {
                items: 2,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    });

    // Product Col2 Slider Js
    var product = $(".product-col4-slider");
    product.owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        margin: 0,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

}

function LoadData() {
    RenderBoxList()
}

function ShowPopup() {
    var popupProduct = $(".popup-product-quickview");

    popupProduct.addClass('active');
    $(".popup-product-overlay").addClass('active');
    $(".popup-product-close").addClass('active');
    $("body").addClass("fix");
}

function RenderBoxList() {
    var itemHTML_1 = "", itemHTML_2 = "";

    data.forEach((obj) => {
        if (obj.SLIDE_TYPE == 1) {
            itemHTML_1 += `
                <div class="item type1">
                    <div class="product-item" onclick="ShowPopup()">
                        <div class="inner-content">
                            <div class="product-thumb">
                               <img src="${obj.IMG_1}" alt="${obj.TITLE}">
                               <img class="second-image" src="${obj.IMG_2}" alt="${obj.TITLE}">
                            </div>
                            <div class="product-desc">
                                <div class="product-info">
                                    <div class="horizontal-line"></div>
                                    <h4 class="title">${obj.TITLE}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
        else if (obj.SLIDE_TYPE == 2) {
            itemHTML_2 += `
                <div class="item type2">
                    <div class="product-item" onclick="ShowPopup()">
                        <div class="inner-content">
                            <div class="product-thumb">
                               <img src="${obj.IMG_1}" alt="${obj.TITLE}">
                               <img class="second-image" src="${obj.IMG_2}" alt="${obj.TITLE}">
                            </div>
                            <div class="product-desc">
                                <div class="product-info">
                                    <div class="horizontal-line"></div>
                                    <h4 class="title">${obj.TITLE}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    });

    $("#listBox1").html(itemHTML_1);
    $("#listBox2").html(itemHTML_2);
}