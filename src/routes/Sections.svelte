<script>
import { page } from "$app/stores";
import { t } from "../i18n";
</script>

<div
  class="inline-flex rounded-md shadow-sm w-full bg-gray-800 text-center"
  role="group"
>
  <a
    href="/"
    type="button"
    class="{$page.url.pathname === '/'
      ? 'bg-gray-800'
      : 'bg-gray-700'} w-full px-4 py-2 text-sm font-medium border rounded-l-lg border-gray-700 text-white hover:text-white hover:bg-gray-600"
  >
    {$t("navbar.about")}
  </a>
  <a
    href="/e&e"
    type="button"
    class="{$page.url.pathname === '/e&e'
      ? 'bg-gray-800'
      : 'bg-gray-700'} w-full px-4 py-2 text-sm font-medium border-t border-b border-gray-700 text-white hover:text-white hover:bg-gray-600"
  >
    {$t("navbar.ee")}
  </a>
  <a
    href="/projects"
    type="button"
    class="{$page.url.pathname === '/projects'
      ? 'bg-gray-800'
      : 'bg-gray-700'} w-full px-4 py-2 text-sm font-medium border rounded-r-md border-gray-700 text-white hover:text-white hover:bg-gray-600"
  >
    {$t("navbar.projects")}
  </a>
</div>
