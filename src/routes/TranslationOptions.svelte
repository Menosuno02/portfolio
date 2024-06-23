<script>
  import { locale } from "../i18n";
</script>

<div
  class="col-span-8 col-start-3 col-end-11 text-white inline-flex rounded-md shadow-sm w-full bg-gray-800 mb-10"
  role="group"
>
  <button
    type="button"
    class="w-full px-4 py-2 text-sm border rounded-l-lg border-gray-700 text-white hover:text-white hover:bg-gray-600 font-semibold"
    value="en"
    on:click={() => locale.set("en")}
  >
    <img
      alt=""
      class="w-6 inline-block me-2"
      src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ec-1f1e7.svg"
    />English
  </button>
  <button
    type="button"
    class="w-full px-4 py-2 text-sm border rounded-r-md border-gray-700 text-white hover:text-white hover:bg-gray-600 font-semibold"
    value="es"
    on:click={() => locale.set("es")}
  >
    <img
      alt=""
      class="w-6 inline-block me-2"
      src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ea-1f1f8.svg"
    />Español
  </button>
</div>
