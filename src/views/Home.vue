<template>
    <div class="container-fluid my-5">
        <div class="container">
            <div class="row">
                <h2 class="text-center text-decoration-underline">Serviz xidmətlərimiz</h2>
                <div class="col-6" v-for="service in services">
                    <div @click="selectObject(service.id)" class="bg-image">
                        <h4 class="my-3 ms-5">{{ service.title }}</h4>
                        <img :src="service.img" class="image-sevices" alt="" width="400px" height="300px"
                            style="border-radius:10px">
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-light py-5">
            <div class="container">
                <h2 class="text-center ">Görülən işlər və Layihələrimiz </h2>
                <ul>
                    <li>
                        <p class="fw-bold">Ağdaş rayonunda </p>
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
            services: []
        };
    },

    mounted() {
        this.services = this.$store.state.services
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
.backgorund-picture {
    width: 100%;
    height: auto;
}

.image-sevices {
    cursor: pointer;
}

.image-sevices:hover {
    transform: scale(1.1);
    box-shadow: 7px 7px 5px #797575;
    -moz-box-shadow: 0px 7px 5px #5b5050;
    -webkit-box-shadow: 0px 7px 5px #473b3b;
}
</style>
