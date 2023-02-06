<template>
    <div class="container mt-5">
        <div class="col-12 justify-content-center d-flex mt-3 animate__animated animate__zoomInDown animate__delay-1s">
            <div class="card border-0" style="width: 1000px; ">
                <div class="card-body">
                    <h2 class="card-title text-center">Xüsusi avtomatik yanğın söndürmə sistemləri</h2>
                    <p class="card-text">Yanğından Mühafizə Sistemlərinin - Yanğın Alarm, Yanğın-mühafizə
                        siqnalizasiyası, avtomatik sulu söndürmə, qazlı söndürmə (FM200, Karbondioksid,
                        Köpüklü),mətbəx davlumbaz söndürmə və s. sistemlərninin, Fövqalədə Hallar Nazirliyinin
                        verdiyi xüsusi lisenziyaya əsasən standartlara uyğun layihələndirilməsini, quraşdırılmasını
                        ,texniki baxışını və təmirini həyata keçirir.
                    </p>


                </div>
                <img src="../assets/services/sondurme2.jpg" class="card-img-top image-card mt-4"
                    alt="sondurme sistemleri">
                <img src="../assets/services/sondurme.jpg" class="card-img-top image-card mt-4"
                    alt="sondurme sistemleri">
                <img src="../assets/services/sondurme3.jpg" class="card-img-top image-card mt-4"
                    alt="sondurme sistemleri">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AzfireYangin',

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