<template>
    <div class="container-fuild mt-5">
        <div class="bg-light my-4 py-3">
            <div class="container">
                <h2 class="text-center ">Görülən işlər və Layihələrimiz </h2>
                <ul>
                    <li>
                        <p class="fw-bold">Ağdaş rayonunda </p>
                        <p class="fst-italic">İsitmə, soyutma və havalandırma sisteminin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Altes</p>
                        <p class="fst-italic">Soyutma (VRV) və havalandırma sistemlərinin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Elmed</p>
                        <p class="fst-italic">Havalandırma sistemlərinin quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Milli arxiv</p>
                        <p class="fst-italic">İsitmə, soyutma və havalandırma sisteminin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Prokratura</p>
                        <p class="fst-italic">İsitmə, soyutma sistemlərinin layihələndirilməsi və quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Ticarət mərkəzi</p>
                        <p class="fst-italic">İsitmə, soyutma və havalandırma sisteminin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Gəncə şəhərindən</p>
                        <p class="fst-italic">İsitmə, soyutma və havalandırma sisteminin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Hövsan FHN </p>
                        <p class="fst-italic">İsitmə, soyutma,havalandırma, yanğından mühafizə və kanalizasiya
                            sistemlərinin
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Yasamal İcra hakimiyyəti</p>
                        <p class="fst-italic">İsitmə, soyutma və havalandırma sisteminin layihələndirilməsi və
                            quraşdırılması.</p>
                    </li>
                    <li>
                        <p class="fw-bold">Şəki şəhərindən</p>
                        <p class="fst-italic">Soyutma sistemlərinin layihələndirilməsi və quraşdırılması.</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <h3 class="text-center my-5">Aşağıda görülən layihələrimizdən</h3>
            <div class="row">
                <div class="col-6 project-holder" v-for="project in projects">
                    <div :id="'carouselExampleIndicators' + project.id" class="carousel slide " data-bs-touch="false"
                        data-bs-interval="false">
                        <div class="carousel-indicators">
                            <div v-for="(image, index) in project.images" :key="index">
                                <button type="button" :data-bs-target="'#carouselExampleIndicators' + project.id"
                                    :data-bs-slide-to="index" :class="index === 0 ? 'active' : ''" aria-current="true"
                                    aria-label="Slide 1">
                                </button>
                            </div>
                        </div>

                        <div class="carousel-inner">
                            <div v-for="(image, index) in project.images" :key="index"
                                :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
                                <img class="d-block w-100 image-project" :src="image" style="border-radius: 10px; " />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>{{ project.title }}</h5>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button"
                            :data-bs-target="'#carouselExampleIndicators' + project.id" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button"
                            :data-bs-target="'#carouselExampleIndicators' + project.id" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AzfireProjects',

    data() {
        return {
            projects: []
        };
    },

    mounted() {
        this.projects = this.$store.state.projects
        console.log(this.$store.state.projects)
    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.image-project {
    width: 600px;
    height: 600px;
}

.project-holder {
    margin-bottom: 20px;
}
</style>