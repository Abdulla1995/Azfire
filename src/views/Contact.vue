<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h1 class="text-center">Əlaqə</h1>
                <h4>"Laxas" Ltd 23, Aga-Neymatulla Str., Baku, Azerbaijan, AZ1033 </h4>
                <a href="tel: (+994) 12-496-62-91" class="text-decoration-none text-dark d-block">Tel: +99412
                    4966291</a>
                <a href="tel: (+994) 50-220-38-32" class="text-decoration-none text-dark">Mob: +99450 2203832</a>
                <p>Fax: +99412 4966570</p>
            </div>
            <div class="col-6">
                <GoogleMapLoader />
            </div>
        </div>

    </div>
</template>

<script>
import GoogleMapLoader from '@/components/GoogleMapLoader.vue';
export default {
    name: "AzfireContact",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: { GoogleMapLoader }
};
</script>

<style lang="scss" scoped>

</style>