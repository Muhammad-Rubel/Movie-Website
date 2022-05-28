<template>
  <header class="bg-gray-900 shadow-2xl fixed top-0 left-0 right-0 z-40">
    <div class="width-1200 p-4 flex justify-between items-center">
      <div>
        <a href="/" class="text-3xl text-primary font-bold">IMDB</a>
      </div>

      <!-- nav -->
      <div>
        <nav class="hidden lg:flex justify-end items-center space-x-8">
          <a
            v-for="(item, i) in navItems"
            :key="i"
            :href="item.url"
            class="text-lg font-semibold border-b-2 border-transparent hover:border-primary hover:text-primary custom-transition"
            >{{ item.name }}</a
          >
        </nav>

        <!-- mobile Menu -->
        <div class="flex items-center">
          <button
            class="lg:hidden text-lg font-semibold"
            @click="mobileMenu = !mobileMenu"
          >
            <Icons name="menu" class-list="text-gray-200 h-6" />
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-class="max-h-0"
      enter-active-class="transition-all duration-300 ease-in-out"
      enter-to-class="max-h-[500px]"
      leave-class="max-h-[500px]"
      leave-active-class="transition-all duration-300 ease-in-out"
      leave-to-class="max-h-0"
    >
      <nav
        v-if="mobileMenu"
        class="lg:hidden flex flex-col justify-end items-center space-y-4 py-4 overflow-hidden"
      >
        <a
          v-for="(item, i) in navItems"
          :key="i"
          :href="item.url"
          class="text-lg font-semibold"
          >{{ item.name }}</a
        >
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      mobileMenu: false,
      navItems: [
        {
          name: 'Movies',
          url: '/movies',
        },
        {
          name: 'TV Shows',
          url: '/tv',
        },
        {
          name: 'Actors',
          url: '/actors',
        },
        {
          name: 'Awards',
          url: '/awards',
        },
        {
          name: 'My List',
          url: '/my-list',
        },
      ],
    }
  },
}
</script>

<style></style>
