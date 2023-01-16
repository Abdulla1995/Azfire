<template>
    <div class="container mt-5">
        <h1 class="text-center my-5">Görülən işlər və Layihələr</h1>
        <div class="row">
            <div class="col-6" v-for="(project, index) in projects">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"
                    style="height: 600px; width: 600px;">
                    <div class="carousel-indicators">
                        <div v-for="(image, index) in project.images" :key="index">
                            <button type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index"
                                :class="index === 0 ? 'active' : ''" aria-current="true" aria-label="Slide 1">
                            </button>
                        </div>
                    </div>

                    <div class="carousel-inner">
                        <div v-for="(image, index) in project.images" :key="index"
                            :class="index === 0 ? 'carousel-item active' : 'carousel-item'">
                            <img class="d-block w-100" :src="image" style="border-radius: 10px; " />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{{ project.title }}</h5>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
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

</style>