<script lang="ts" setup>
const links: Record<"title" | "url", string>[] = [
  { title: "Home", url: "/" },
  { title: "Browse", url: "/browse" },
  { title: "Search", url: "/search" },
];

const { data: collections } = useTrackCollections();
</script>

<template>
  <aside
    class="min-w-[300px] border-r border-slate-200 bg-slate-100 p-6 sticky flex flex-col gap-8"
  >
    <Logo size="small" />
    <SidebarGroup>
      <SidebarItem
        v-for="(link, i) in links"
        :key="`${link.url}_${i}`"
        v-bind="link"
      />
    </SidebarGroup>

    <SidebarGroup title="Playlists">
      <SidebarItem
        v-for="collection in collections"
        :key="collection.id"
        :title="collection.name || ''"
        :url="`/playlist/private/${collection.id}`"
      />
    </SidebarGroup>
  </aside>
</template>
