<template>
    <div class="container mt-5">
        <div class="col-12 justify-content-center d-flex mt-3 animate__animated animate__backInRight animate__delay-1s">
            <div class="card border-0">
                <div class="card-body">
                    <h2 class="card-title text-center">Dozimetrik ölçü cihazları</h2>
                    <p class="card-text">Dozimetrik cihazlar – onların təyinatına, vericisinin tipinə, ölçülən
                        şüalanmanın növünə və cihazın sxeminin çevirdiyi elektrik siqnallarının xarakterinə görə
                        təsnif etmək olar. Dozimetriya vasitəsilə aşağıdakı işlər yerinə yetirilir:
                    </p>
                    <ul>
                        <li>Əhalinin həyat fəaliyyətinin və zədələnmə ocaqlarında X və DTİ təhlükəsizliyini təmin
                            etmək üçün şüalanmaların aşkar edilməsi və ölçülməsi; </li>
                        <li>Dezaktivasiya və sanitariya təmizlənməsi keçirilməsi zərurətini, bunların keyfiyyətini
                            müəyyən etmək, habelə zəhərlənmiş ərzaq məhsullarından istifadə etməyin mümkünlüyünü,
                            normalarını təyin etmək üçün müxtəlif obyektlərin zəhərlənmə dərəcələrinin ölçülməsi;
                        </li>
                        <li>Radiasiya baxımından əhalinin və ayrı-ayrı adamların iş qabiliyyətini təyin etmək
                            məqsədilə şüalanma dozalarının ölçülməsi;</li>
                        <li>Ərzaq məhsullarının, suyun, alafın radioaktiv maddələrlə zəhərlənmə dərəcələrinin
                            laboratoriyalarda ölçülməsi;</li>
                    </ul>
                </div>
                <img src="../assets/services/dozimetr.jpg" class="card-img-top image-card mt-4" alt="dozimetr cihazi">
                <img src="../assets/services/dozimetr2.jpg" class="card-img-top image-card mt-4" alt="dozimetr cihazi">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AzfireDozimetrik',

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
p,
li {
    font-size: 23px;
}

.card {
    width: 70%;
}

.image-card {
    width: 600px;
    height: 450px;
    margin: auto;
}

h2 {
    font-size: 40px;
}

@media screen and (max-width: 578px) {

    .card-text,
    li {
        font-size: 15px;
    }

    .image-card {
        width: 250px;
        height: 200px;
        margin: auto;
    }

    h2 {
        font-size: 22px;
    }

    .card {
        width: 100%;
    }
}
</style>