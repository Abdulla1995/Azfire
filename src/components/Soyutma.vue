<template>
    <div class="container mt-5">
        <div class="col-12 justify-content-center d-flex mt-3 animate__animated animate__backInUp animate__delay-1s">
            <div class="card border-0" style="width: 1000px; ">
                <div class="card-body">
                    <h2 class="card-title text-center">Soyutma Sistemləri</h2>
                    <p class="card-text">Müştərilərin seçimindən, həmçinin soyutma sistemi qurulacaq binanın
                        təyinatından asılı olaraq aşağdakı soyutma sistemlərinin layihələndirilməsi,
                        avadanlıqlarının satışını və quraşdırılması işlərini həyata keçirir:
                    </p>
                    <p class="lh-sm ps-2">VRV sistemləri</p>
                    <p class="lh-sm ps-2">Multi split kondisioner sistemləri</p>
                    <p class="lh-sm ps-2">Çiller və fankoil soyutma sistemlıri</p>
                    <p class="lh-sm ps-2">Server otaqlarının həssas tipli soyutma sistemləri</p>

                </div>
                <img src="../assets/services/soyutma.jpg" class="card-img-top image-card mt-4" alt="soyutma sistemleri">
                <img src="../assets/services/soyutma2.jpg" class="card-img-top image-card mt-4"
                    alt="soyutma sistemleri">
                <img src="../assets/services/soyutma3.jpg" class="card-img-top image-card mt-4"
                    alt="soyutma sistemleri">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AzfireSoyutma',

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

.image-card {
    width: 700px;
    height: 550px;
    margin: auto;
}

@media screen and (max-width: 578px) {

    .card-text,
    p {
        font-size: 15px;
    }




    h2 {
        font-size: 22px;
    }

    .card {
        width: 100%;
    }

    .image-card {
        width: 250px;
        height: 200px;
        margin: auto;
    }

}
</style>