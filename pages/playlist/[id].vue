<script lang="ts" setup>
definePageMeta({
  toolbarTitle: "Playlist",
});

const { id } = useRoute().params;
const playlistId = Number(id);

const { data: playlist } = usePlaylist({ id: playlistId });
const { data: tracks, pending } = usePlaylistTracks({ id: playlistId });

onBeforeMount(() => {
  useHead({
    title: playlist.value?.title,
  });
});
</script>

<template>
  <div v-if="playlist">
    <header class="flex gap-6 mb-12">
      <ProtectedImage
        v-if="playlist.cover"
        :src="playlist.cover"
        alt=""
        class="aspect-square rounded-2xl bg-slate-100 w-[300px]"
      />
      <div class="p-6 flex flex-col justify-between">
        <div>
          <Heading>{{ playlist.title }}</Heading>
          <p v-if="tracks">{{ tracks.length }} tracks</p>
        </div>
        <div class="flex gap-2">
          <Button intent="primary">
            <template #icon>
              <Icon name="tabler:player-play-filled" />
            </template>
            Shuffle
          </Button>
          <Button>Follow</Button>
        </div>
      </div>
    </header>
    <TrackList :skeleton-count="10" :show-skeleton="pending">
      <Track v-for="track in tracks" :key="track.id || 0" :track="track" />
    </TrackList>
  </div>
</template>
