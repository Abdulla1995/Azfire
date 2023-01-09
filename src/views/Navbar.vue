<template>
    <div class="container-fluid img">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid my-5 me-5">
                <router-link class="text-decoration-none txt-header fs-1 ms-5" to="/">Azfire</router-link>

                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-decoration-none txt-header" to="/">Home</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-decoration-none txt-header" to="/services">Services</router-link>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-decoration-none txt-header" to="/projects">Projects</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-decoration-none txt-header" to="/about">About</router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-decoration-none txt-header" to="/contact">Contact</router-link>
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

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.img {
    background-image: url(../assets/backgoround.jpg);
    width: 100%;
    height: 90vh;
}

.txt-header {
    color: #fff;
}

.txt-header:hover {
    color: #4cb147;
    transition: 0.2s;
}
</style>