<template>
    <div>
        <!-- Footer -->
        <footer class="text-center text-lg-start text-muted mt-5 ">


            <!-- Section: Links  -->
            <section class="">
                <div class="container text-center text-md-start mt-5 pt-3">
                    <!-- Grid row -->
                    <div class="row mt-3">
                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <!-- Content -->
                            <img src="../assets/logo_main.png" alt="" width="110px">
                        </div>
                        <!-- Grid column -->
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <router-link class="nav-link text-decoration-none txt-header" to="/">Ana
                                    səhifə</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link text-decoration-none txt-header"
                                    to="/projects">Proyektlər</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class=" nav-link text-decoration-none txt-header"
                                    to="/about">Haqqında</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class=" nav-link text-decoration-none txt-header"
                                    to="/contact">Əlaqə</router-link>
                            </li>
                        </ul>

                        <!-- Grid column -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <ul class="navbar-nav">
                                <li class="nav-item">

                                </li>

                                <!-- <li class="nav-item">
                                                <router-link class="nav-link text-decoration-none txt-header"
                                                    to="/services">Servislər</router-link>
                                            </li> -->
                                <li class="nav-item">

                                </li>
                                <li class="nav-item">

                                </li>
                                <li class="nav-item">

                                </li>
                            </ul>




                        </div>
                        <!-- Grid column -->



                        <!-- Grid column -->
                        <!-- <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        <a href="tel: (+994) 12-496-62-91" class="text-decoration-none text-light d-block">Tel:
                                            +99412 4966291</a>
                                        <a href="tel: (+994) 50-220-38-32" class="text-decoration-none text-light">Mob: +99450
                                            2203832</a>
                                        <p class="text-light">Fax: +99412 4966570</p>
                                    </div> -->
                        <!-- Grid column -->
                    </div>
                    <!-- Grid row -->
                </div>
            </section>
            <!-- Section: Links  -->

            <!-- Copyright -->
            <div class="text-center p-4 bg-dark text-light" style="background-color: rgba(0, 0, 0, 0.05);">
                © 2023 Copyright: Bütün hüquqlar qorunur.
            </div>
            <!-- Copyright -->
        </footer>
        <!-- Footer -->
    </div>
</template>

<script>
export default {
    name: 'AzfireFooter',

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
@import "@/assets/scss/variables.scss";

.txt-header {
    color: #fff;
    font-size: 20px;
    margin: 10px;
    border-bottom: 1px solid #656665;


}

.txt-header:hover {
    color: $success-main;
    transition: 0.2s;
    border-bottom: 1px solid #4cb147;

}

footer {
    background-color: #101825;
}
</style>
