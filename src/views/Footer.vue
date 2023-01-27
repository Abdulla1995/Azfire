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
                            <img src="../assets/fire-logo.png" alt="" width="100px">
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <!-- Links -->
                            <router-link class="d-block text-decoration-none txt-header" to="/">Ana səhifə</router-link>
                            <router-link class="d-block text-decoration-none txt-header"
                                to="/services">Servislər</router-link>
                            <router-link class="d-block text-decoration-none txt-header"
                                to="/projects">Proyektlər</router-link>
                            <router-link class="d-block text-decoration-none txt-header"
                                to="/about">Haqqında</router-link>
                            <router-link class="d-block text-decoration-none txt-header"
                                to="/contact">Əlaqə</router-link>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Help</a>
                            </p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <!-- Links -->
                            <h6 class="text-uppercase fw-bold mb-4 text-light">Əlaqə</h6>
                            <p class="text-light">"Laxas" Ltd 23, Aga-Neymatulla Str., Baku, Azerbaijan,
                                AZ1033
                            </p>
                            <a href="tel: (+994) 12-496-62-91" class="text-decoration-none text-light d-block">Tel:
                                +99412 4966291</a>
                            <a href="tel: (+994) 50-220-38-32" class="text-decoration-none text-light">Mob: +99450
                                2203832</a>
                            <p class="text-light">Fax: +99412 4966570</p>
                        </div>
                        <!-- Grid column -->
                    </div>
                    <!-- Grid row -->
                </div>
            </section>
            <!-- Section: Links  -->

            <!-- Copyright -->
            <div class="text-center p-4 bg-dark text-light" style="background-color: rgba(0, 0, 0, 0.05);">
                © 2023 Copyright:Bütün hüquqlar qorunur.
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
.txt-header {
    color: #fff;
    font-size: 20px;

}

.txt-header:hover {
    color: #4cb147;
    transition: 0.2s;
}

footer {
    background-color: #101825;
}
</style>