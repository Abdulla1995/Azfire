<template>
    <div class="container-fluid img" :class="[selectedImg.page === '/' ? 'home-img' : 'other-pages-img']"
        :style="{ backgroundImage: 'url(' + selectedImg.img + ')' }">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid my-5 me-5">
                <router-link class="text-decoration-none txt-header fs-1 ms-5" to="/">Azfire</router-link>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-decoration-none txt-header" to="/">Ana səhifə</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-decoration-none txt-header" to="/services">Servislər</router-link>
                        </a>
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
                }
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