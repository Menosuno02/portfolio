<script>
import InfoColumn from "./InfoColumn.svelte";
import Sections from "./Sections.svelte";
import TranslationOptions from "./TranslationOptions.svelte";
import "./styles.css";
</script>

<div class="grid grid-cols-12 lg:gap-x-12">
  <TranslationOptions />
  <InfoColumn />
  <main
    class="mt-8 lg:mt-0 lg:col-span-7 lg:col-start-6 xl:col-span-8 col-span-12"
  >
    <Sections />
    <div>
      <slot />
    </div>
  </main>
</div>
