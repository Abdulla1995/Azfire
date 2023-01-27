<template>
    <div class="container-fluid img" :class="[selectedImg.page === '/' ? 'home-img' : 'other-pages-img']"
        :style="{ backgroundImage: 'url(' + selectedImg.img + ')' }">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid my-5 me-5">
                <router-link class="text-decoration-none txt-header fs-1 ms-5" to="/">
                    <img src="../assets/azfire-logo.svg" alt="" width="100px">

                </router-link>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-decoration-none txt-header" to="/">Ana səhifə</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <div class="dropdown">
                            <button class="btn dropdown-toggle txt-header" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Servislər
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li> <router-link class="dropdown-item" to="/services/servis-xidmetlerimiz">Servis
                                        Xidmətlərimiz
                                    </router-link>
                                </li>
                                <li> <router-link class="dropdown-item"
                                        to="/services/havalandirma-sistemleri">Havalandırma Sistemləri
                                    </router-link>
                                </li>
                                <li> <router-link class="dropdown-item" to="/services/isitme-sistemleri">İsitmə
                                        Sistemləri
                                    </router-link>
                                </li>
                                <li> <router-link class="dropdown-item" to="/services/soyutma-sistemleri">Soyutma
                                        Sistemləri
                                    </router-link>
                                </li>
                                <li> <router-link class="dropdown-item" to="/services/yangin-sondurme-sistemleri">Yanğın
                                        söndürmə sistemləri
                                    </router-link>
                                </li>
                                <li> <router-link class="dropdown-item"
                                        to="/services/dozimetrik-olcu-cihazlari">Dozimetrik ölçü cihazları
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>


                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-decoration-none txt-header" to="/projects">Proyektlər</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-decoration-none txt-header" to="/about">Haqqında</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-decoration-none txt-header" to="/contact">Əlaqə</router-link>
                        </a>
                    </li>

                </ul>

            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'AzfireNavbar',

    data() {
        return {
            bgimages: [
                {
                    page: '/',
                    img: require('@/assets/images/background/home.jpg')
                },
                {
                    page: '/about',
                    img: require('@/assets/images/background/About.png')
                },

                {
                    page: '/contact',
                    img: require('@/assets/images/background/contact.jpg')
                },
                {
                    page: '/services',
                    img: require('@/assets/images/background/services.png')
                },
                {
                    page: '/projects',
                    img: require('@/assets/images/background/project.jpg')
                },
                {
                    page: '/services/isitme-sistemleri',
                    img: require('@/assets/images/background/services.png')
                },
                {
                    page: '/services/havalandirma-sistemleri',
                    img: require('@/assets/images/background/services.png')
                },
                {
                    page: '/services/soyutma-sistemleri',
                    img: require('@/assets/images/background/services.png')
                },
                {
                    page: '/services/yangin-sondurme-sistemleri',
                    img: require('@/assets/images/background/services.png')
                },
                {
                    page: '/services/servis-xidmetlerimiz',
                    img: require('@/assets/images/background/services.png')
                },
                {
                    page: '/services/dozimetrik-olcu-cihazlari',
                    img: require('@/assets/images/background/services.png')
                },
            ],
            selectedImg: {}
        };
    },

    watch: {
        '$route.path'() {
            this.setPageImage()
        }
    },
    methods: {
        setPageImage() {
            const path = this.$route.path
            this.selectedImg = this.bgimages.find(imgObj => imgObj.page === path) || this.bgimages[0];
        }
    },

    mounted() {
        this.setPageImage()
    }
};
</script>

<style lang="scss" scoped>
.img {
    width: 100%;
    background-size: cover;
    // object-fit: contain;

}

.dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
    /* remove the gap so it doesn't close */
}

.dropdown-item:hover {
    background-color: #4cb147;
}

.other-pages-img {
    height: 800px;
}

.home-img {
    height: 100vh;
}

.txt-header {
    color: #fff;
}

.txt-header:hover {
    color: #4cb147;
    transition: 0.2s;
}
</style>