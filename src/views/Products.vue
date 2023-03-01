<template>
    <div>
        <div class="bg-light">
            <div class="container">
                <div class="row">
                    <h2 class="text-center section-services-title my-4">Məhsullar</h2>
                    <div class="col-12 col-md-6 mb-4 bg-light text-center" v-for="product in products">
                        <h3 class="my-4">{{ product.name }}</h3>
                        <img class="image-services" :src="product.img" :alt="'product ' + product.name">
                        <p class="my-3 products-description">{{ product.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AzfireProducts',

    data() {
        return {
            products: []
        };
    },

    mounted() {
        this.products = this.$store.state.products

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.section-services-title {
    font-size: 44px;
    margin-bottom: 50px;
    margin-top: 50px;
}

.image-services {
    cursor: pointer;
    width: 400px;
    height: 300px;
}

.image-services:hover {
    transform: scale(1.1);
    box-shadow: 7px 7px 5px #797575;
    -moz-box-shadow: 0px 7px 5px #5b5050;
    -webkit-box-shadow: 0px 7px 5px #473b3b;
    transition: 0.4s;
}

.products-description {
    font-size: 18px;
}

@media screen and (max-width:576px) {
    .image-services {
        cursor: pointer;
        width: 300px;
        height: 200px;
    }

    .products-description {
        font-size: 15px;
    }
}
</style>