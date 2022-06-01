<template>
  <section>
    <div class="relative overflow-hidden z-0">
      <!-- image -->
      <div class="absolute top-0 left-0 right-0 z-0 h-full">
        <img
          src="~/assets/images/search-back.jpg"
          alt=""
          class="w-full h-full object-cover object-center"
        />
      </div>

      <!-- main content -->
      <div
        class="px-4 py-12 relative z-10 bg-darkBlue bg-opacity-70 md:py-14 lg:py-16"
      >
        <h2 class="text-[2.75rem] font-semibold text-white">Welcome.</h2>
        <h4 class="text-3xl text-white">
          Millions of movies, TV shows and people to discover. Explore now.
        </h4>

        <!-- search input -->
        <div
          class="mt-6 bg-white rounded-3xl flex justify-between items-stretch md:mt-8"
        >
          <input
            type="text"
            placeholder="Search for a movie, tv show, person......."
            class="py-3 px-6 bg-transparent w-full"
          />

          <button
            class="px-6 py-3 rounded-3xl bg-gradient-to-r from-lightGreen to-lightBlue text-white md:px-8"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
