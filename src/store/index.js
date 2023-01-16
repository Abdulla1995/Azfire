import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [
      // {
      //   id: 1,
      //   slug: 'fhn-tehlukesizlik-qurasdirilmasi',
      //   title: 'FHN sistem',
      //   description: 'Description text here',
      //   client: 'FHN flan korpusu',
      //   mainImage: '',
      //   images: [
      //     '@/assets/images/backr'
      //   ]
      // },
      {
        id: 1,
        title: 'Ağdaş rayonundan',
        description: 'Description text here',
        images: [
          require('@/assets/projects/agdash/agdash-1.jpg'),
          require('@/assets/projects/agdash/agdash-2.jpg'),
          require('@/assets/projects/agdash/agdash-3.jpg'),
          require('@/assets/projects/agdash/agdash-4.jpg'),
          require('@/assets/projects/agdash/agdash-5.jpg'),
        ]
      },
      {
        id: 2,
        title: 'Milli Arxiv Idarəsindən',
        description: 'Description text here',
        images: [
          require('@/assets/projects/milli-arxiv/arxiv-1.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-2.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-3.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-4.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-5.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-6.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-7.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-8.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-9.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-10.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-11.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-12.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-13.jpg'),
          require('@/assets/projects/milli-arxiv/arxiv-14.jpg'),
        ]
      },
      // {
      //   id: 3,
      //   title: 'Altes',
      //   description: 'Description text here',
      //   images: [
      //     require('@/assets/projects/altes/altes-1.jpg'),
      //     require('@/assets/projects/altes/altes-2.jpg'),
      //     require('@/assets/projects/altes/altes-3.jpg'),
      //     require('@/assets/projects/altes/altes-4.jpg'),
      //     require('@/assets/projects/altes/altes-5.jpg'),
      //     require('@/assets/projects/altes/altes-6.jpg'),
      //     require('@/assets/projects/altes/altes-7.jpg'),
      //     require('@/assets/projects/altes/altes-8.jpg'),
      //     require('@/assets/projects/altes/altes-9.jpg'),
      //     require('@/assets/projects/altes/altes-10.jpg'),
      //     require('@/assets/projects/altes/altes-11.jpg'),
      //     require('@/assets/projects/altes/altes-12.jpg'),
      //     require('@/assets/projects/altes/altes-13.jpg'),
      //   ]
      // },
      // {
      //   id: 4,
      //   title: 'Elmed',
      //   description: 'Description text here',
      //   images: [
      //     require('@/assets/projects/elmed/elmed-1.jpg'),
      //     require('@/assets/projects/elmed/elmed-2.jpg'),
      //     require('@/assets/projects/elmed/elmed-3.jpg'),
      //     require('@/assets/projects/elmed/elmed-4.jpg'),
      //     require('@/assets/projects/elmed/elmed-5.jpg'),
      //     require('@/assets/projects/elmed/elmed-6.jpg'),
      //     require('@/assets/projects/elmed/elmed-7.jpg'),
      //     require('@/assets/projects/elmed/elmed-8.jpg'),
      //     require('@/assets/projects/elmed/elmed-9.jpg'),
      //     require('@/assets/projects/elmed/elmed-10.jpg'),
      //     require('@/assets/projects/elmed/elmed-11.jpg'),
      //     require('@/assets/projects/elmed/elmed-12.jpg'),
      //     require('@/assets/projects/elmed/elmed-13.jpg'),
      //   ]
      // },
      // {
      //   id: 5,
      //   title: 'Prokuratura',
      //   description: 'Description text here',
      //   images: [
      //     require('@/assets/projects/prokuratura/prokuratura-1.jpg'),
      //     require('@/assets/projects/prokuratura/prokuratura-2.jpg'),
      //     require('@/assets/projects/prokuratura/prokuratura-3.jpg'),
      //     require('@/assets/projects/prokuratura/prokuratura-4.jpg'),
      //     require('@/assets/projects/prokuratura/prokuratura-5.jpg'),
      //     require('@/assets/projects/prokuratura/prokuratura-6.jpg'),
      //     require('@/assets/projects/prokuratura/prokuratura-7.jpg'),
      //     require('@/assets/projects/prokuratura/prokuratura-8.jpg'),
      //     require('@/assets/projects/prokuratura/prokuratura-9.jpg'),
      //     require('@/assets/projects/prokuratura/prokuratura-10.jpg'),
      //     require('@/assets/projects/prokuratura/prokuratura-11.jpg'),
      //     require('@/assets/projects/prokuratura/prokuratura-12.jpg'),
      //   ]
      // },
      // {
      //   id: 6,
      //   title: 'Ticaret merkezi',
      //   description: 'Description text here',
      //   images: [
      //     require('@/assets/projects/ticaret/ticaret-1.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-2.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-3.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-4.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-5.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-6.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-7.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-8.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-9.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-10.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-11.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-12.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-13.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-14.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-15.jpg'),
      //     require('@/assets/projects/ticaret/ticaret-16.jpg'),
      //   ]
      // },
      // {
      //   id: 7,
      //   title: 'Gence',
      //   description: 'Description text here',
      //   images: [
      //     require('@/assets/projects/gence/gence-1.jpg'),
      //     require('@/assets/projects/gence/gence-2.jpg'),
      //     require('@/assets/projects/gence/gence-3.jpg'),
      //     require('@/assets/projects/gence/gence-4.jpg'),
      //     require('@/assets/projects/gence/gence-5.jpg'),
      //     require('@/assets/projects/gence/gence-6.jpg'),
      //     require('@/assets/projects/gence/gence-7.jpg'),
      //     require('@/assets/projects/gence/gence-8.jpg'),
      //     require('@/assets/projects/gence/gence-9.jpg'),
      //     require('@/assets/projects/gence/gence-10.jpg'),
      //     require('@/assets/projects/gence/gence-11.jpg'),
      //     require('@/assets/projects/gence/gence-12.jpg'),
      //     require('@/assets/projects/gence/gence-13.jpg'),
      //     require('@/assets/projects/gence/gence-14.jpg'),
      //     require('@/assets/projects/gence/gence-15.jpg'),
      //     require('@/assets/projects/gence/gence-16.jpg'),
      //     require('@/assets/projects/gence/gence-17.jpg'),

      //   ]
      // },
      // {
      //   id: 1,
      //   title: '',
      //   description: 'Description text here',
      //   images: [
      //     '@/assets/images/backr'
      //   ]
      // },



    ],

    services: [
      {
        id: 1,
        title: 'Havalandırma Sistemləri',
        img: require('@/assets/services/havalandirma.jpg')
      },
      {
        id: 2,
        title: 'İsitmə Sistemləri',
        img: require('@/assets/services/istilik.jpg')
      },
      {
        id: 3,
        title: 'Soyutma Sistemləri',
        img: require('@/assets/services/soyutma.jpg')
      },
      {
        id: 4,
        title: 'Xüsusi avtomatik yanğın söndürmə sistemləri',
        img: require('@/assets/services/sondurme.jpg')
      },
      {
        id: 5,
        title: 'Dozimetrik ölçü cihazları',
        img: require('@/assets/services/dozimetr.jpg')
      },
      {
        id: 6,
        title: 'Servis Xidmətlərimiz',
        img: require('@/assets/services/servis-logo.webp')
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
