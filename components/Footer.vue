<template>
  <footer class="p-6 bg-darkBlue">
    <div class="width-1200">
      <div class="xl:grid grid-cols-5 gap-6">
        <div class="col-start-1 col-end-2">
          <a href="" class="">
            <img src="~/assets/images/tmdb-1.svg" alt="" class="w-16 xl:w-32" />
          </a>
        </div>

        <div
          class="mt-12 space-y-6 md:space-y-0 md:grid grid-cols-4 gap-6 col-start-2 col-end-6 xl:mt-0"
        >
          <div v-for="(item, i) in items" :key="i">
            <h4 class="text-lg uppercase font-semibold text-white">
              {{ item.title }}
            </h4>

            <ul class="space-y-1">
              <li v-for="(subItem, z) in item.subItems" :key="z">
                <a :href="subItem.url" class="text-gray-100">{{
                  subItem.name
                }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- copyright -->
      <div class="pt-8">
        <p class="px-6 text-sm text-center text-darkerGrey">
          &copy; copyright TMDB
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'The Basics',
          subItems: [
            {
              name: 'About TMDB',
              url: '#!',
            },
            {
              name: 'Contact Us',
              url: '#!',
            },
            {
              name: 'Support Forums',
              url: '#!',
            },
            {
              name: 'API',
              url: '#!',
            },
            {
              name: 'System Status',
              url: '#!',
            },
          ],
        },
        {
          title: 'GET INVOLVED',
          subItems: [
            {
              name: 'Contribution Bible',
              url: '#!',
            },
            {
              name: 'Add New Movie',
              url: '#!',
            },
            {
              name: 'Add New TV Show',
              url: '#!',
            },
          ],
        },
        {
          title: 'COMMUNITY',
          subItems: [
            {
              name: 'Guidelines',
              url: '#!',
            },
            {
              name: 'Discussions',
              url: '#!',
            },
            {
              name: 'Leaderboard',
              url: '#!',
            },
            {
              name: 'Twitter',
              url: '#!',
            },
          ],
        },
        {
          title: 'LEGAL',
          subItems: [
            {
              name: 'Terms of Use',
              url: '#!',
            },
            {
              name: 'API Terms of Use',
              url: '#!',
            },
            {
              name: 'Privacy Policy',
              url: '#!',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
