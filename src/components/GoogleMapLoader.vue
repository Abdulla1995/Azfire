<template>
    <div>
        <GmapMap :center="{ lat: lat, lng: lon }" :zoom="15" map-type-id="terrain" style="width: 700px; height: 500px">
            <GmapMarker ref="myMarker" :position="google && new google.maps.LatLng(lat, lon)" />
        </GmapMap>
    </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'
export default {
    name: 'AzfireGoogleMapLoader',

    data() {
        return {
            lat: 40.3997734,
            lon: 49.8752738
        };
    },
    computed: {
        google: gmapApi
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>

</style>
