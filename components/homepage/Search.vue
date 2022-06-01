<template>
  <section>
    <div class="relative overflow-hidden z-0">
      <!-- image -->
      <div class="absolute top-0 left-0 right-0 z-0">
        <img src="~/assets/images/search-back.jpg" alt />
      </div>

      <!-- main content -->
      <div class="px-4 py-12 relative z-10">
        <h2 class="text-4xl font-semibold">Welcome.</h2>
        <h4 class="text-xl">
          Millions of movies, TV shows and people to discover. Explore now.
        </h4>

        <div>
          <input
            type="text"
            placeholder="Search for a movie, tv show, person......."
          />

          <button
            class="px-6 py-2 rounded-2xl bg-gradient-to-l from-green-600 to-green-400"
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
