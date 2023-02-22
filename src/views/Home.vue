<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <h2 class="text-center section-services-title">Servis xidmətlərimiz</h2>
                <div class="col-12 col-md-6 d-flex justify-content-center mb-5" v-for="service in services">
                    <div @click="selectObject(service.id)" class="bg-image text-center">
                        <h3 class="my-3">{{ service.title }}</h3>
                        <img :src="service.img" class="image-services" alt="services" style="border-radius:5px">
                    </div>
                </div>
            </div>
        </div>

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

        <div class="bg-light py-5">
            <div class="container">
                <h2 class="text-center ">Görülən işlər və layihələrimiz </h2>
                <ul>
                    <li>
                        <p class="fw-bold">Ağdaş rayonu </p>
                        <p class="fst-italic">İsitmə, soyutma və havalandırma sisteminin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Altes</p>
                        <p class="fst-italic">Soyutma (VRV) və havalandırma sistemlərinin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Elmed</p>
                        <p class="fst-italic">Havalandırma sistemlərinin quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Milli arxiv</p>
                        <p class="fst-italic">İsitmə, soyutma və havalandırma sisteminin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Prokratura</p>
                        <p class="fst-italic">İsitmə, soyutma sistemlərinin layihələndirilməsi və quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Ticarət mərkəzi</p>
                        <p class="fst-italic">İsitmə, soyutma və havalandırma sisteminin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Gəncə şəhərindən</p>
                        <p class="fst-italic">İsitmə, soyutma və havalandırma sisteminin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Hövsan FHN </p>
                        <p class="fst-italic">İsitmə, soyutma,havalandırma, yanğından mühafizə və kanalizasiya
                            sistemlərinin
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Yasamal İcra hakimiyyəti</p>
                        <p class="fst-italic">İsitmə, soyutma və havalandırma sisteminin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Şəki şəhərindən</p>
                        <p class="fst-italic">Soyutma sistemlərinin layihələndirilməsi və quraşdırılması.</p>
                    </li>
                </ul>
                <router-link to="/projects" class="btn btn-outline-success"> Ətraflı</router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'AzfireHome',

    data() {
        return {
            services: [],
            products: [],
        };
    },

    mounted() {
        this.services = this.$store.state.services
        this.products = this.$store.state.products

        console.log(this.$store.state.services)
    },

    methods: {
        selectObject(selectedId) {
            console.log(selectedId)
            if (selectedId === 1) {
                this.$router.push({ path: '/services/havalandirma-sistemleri' });
            } else if (selectedId === 2) {
                this.$router.push({ path: '/services/isitme-sistemleri' });
            } else if (selectedId === 3) {
                this.$router.push({ path: '/services/soyutma-sistemleri' });
            } else if (selectedId === 4) {
                this.$router.push({ path: '/services/yangin-sondurme-sistemleri' })
            } else if (selectedId === 5) {
                this.$router.push({ path: '/services/dozimetrik-olcu-cihazlari' })
            } else {
                this.$router.push({ path: '/services/servis-xidmetlerimiz' })
            }

        }
    },
};
</script>

<style lang="scss" scoped>
.section-services-title {
    font-size: 44px;
    margin-bottom: 50px;
    margin-top: 50px;
}

.backgorund-picture {
    width: 100%;
    height: auto;
}

.fw-bold {
    font-size: 20px;
}

.fst-italic {
    font-size: 18px;
}

.image-services {
    cursor: pointer;
    width: 400px;
    height: 300px;
}

.products-description {
    font-size: 18px;
}

.image-services:hover {
    transform: scale(1.1);
    box-shadow: 7px 7px 5px #797575;
    -moz-box-shadow: 0px 7px 5px #5b5050;
    -webkit-box-shadow: 0px 7px 5px #473b3b;
    transition: 0.4s;
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
