<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-6" v-for="service in services">
                <router-link to="/services" class="text-decoration-none text-dark">
                    <h4 class="my-3 ms-5">{{ service.title }}</h4>
                    <img :src="service.img" alt="" width="500px" height="400px" style="border-radius:20px">
                </router-link>
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

    },
};
</script>

<style lang="scss" scoped>
.backgorund-picture {
    width: 100%;
    height: auto;
}
</style>
