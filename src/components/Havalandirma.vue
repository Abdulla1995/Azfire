<template>
    <div class="container mt-5">
        <div class="col-12 justify-content-center d-flex mt-3 animate__animated animate__zoomInDown animate__delay-1s">
            <div class="card border-0">
                <div class="card-body">
                    <h2 class="card-title text-center ">Havalandırma Sistemləri</h2>
                    <p class="card-text">Havalandırma sistemləri bütün inzibati və yaşayış binalarında quraşdırılan
                        ən
                        mühüm
                        ünsürlərdən biridir. Havalandırma sistemlərinin texniki xüsusiyyətləri beynəlxalq
                        standartların
                        normalarına
                        cavab verməlidir.

                        Havalandırma sistemlərinin mühüm əhəmiyyəti olmasının səbəbi onunla izah edilir ki, bu
                        sistemlərin
                        yoxluğu
                        nəticəsində qapalı yerlərdə karbon qazının və digər zərərli qazların artması müşahidə
                        olunur. Bu
                        isə
                        insanların özünü pis hiss etməsinə, baş ağrılarına, yorğunluğa, əmək məhsuldarlığının
                        azalmasına
                        və
                        digər
                        neqativ hallara səbəb olur.

                        Sadalanan bu halların qarşısını almaq üçün isə havalandırma sistemlərinin tətbiq olunması
                        zəruridir.
                    </p>
                </div>
                <img src="../assets/services/havalandirma.jpg" class="card-img-top image-card mt-4"
                    alt="havalandirma sistemleri">
                <img src="../assets/services/havalandirma2.jpg" class="card-img-top image-card mt-4"
                    alt="havalandirma sistemleri">
                <img src="../assets/services/havalandirma3.jpg" class="card-img-top image-card mt-4"
                    alt="havalandirma sistemleri">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AzfireHavalandirma',

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
.card-text {
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