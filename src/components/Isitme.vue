<template>
    <div class="container mt-5">
        <div class="col-12 justify-content-center d-flex mt-3 animate__animated animate__backInRight animate__delay-1s">
            <div class="card border-0">
                <div class="card-body">
                    <h2 class="card-title text-center">İsitmə Sistemləri</h2>
                    <p class="card-text">İsitmə sistemləri istifadə məkanlarının istənilən istilikdə tutulması üçün
                        daxili mühitdən xarici mühitə (ətrafa) istilik itkisinin qarşılanması prinsipi ilə çalışan
                        sistemdir.
                    </p>
                    <p class="lh-sm ps-2">Qazanxana sistemi</p>
                    <p class="lh-sm ps-2"> Radiator sistemi</p>
                    <p class="ps-2"> Yerdən isitmə sistemi</p>
                    <p class="ps-2">İstilik nasosu</p>
                </div>
                <img src="../assets/services/istilik.jpg" class="card-img-top image-card mt-4" alt="istilik sistemleri">
                <img src="../assets/services/istilik3.jpg" class="card-img-top image-card mt-4"
                    alt="istilik sistemleri">
                <img src="../assets/services/istilik2.jpg" class="card-img-top image-card mt-4"
                    alt="istilik sistemleri">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AzfireIsitme',

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
p {
    font-size: 23px;
}

.card {
    width: 1000px;
}

h2 {
    font-size: 40px;
}

@media screen and (max-width: 578px) {
    .card-text {
        font-size: 15px;
    }

    h2 {
        font-size: 22px;
    }

    .card {
        width: 100%;
    }
}
</style>