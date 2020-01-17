<template>
  <div class="settings-wrapper">
    <div class="h-100 w-100">
      <div class="none-selected" v-if="!getSettings.content">
        <p class="text-muted p-3 font-weight-bold">
          *Select a "Widget or Element" from one of your columns, to show
          available Settings here.
        </p>
        <img src="@/assets/icons/info-icons.svg" alt="" srcset="" />
      </div>
      <div class="widget-settings" v-if="getSettings.content">
        <SettingsWidget
          :widgets="getSettings.widget.content"
          :key="getSettings.widget.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SettingsWidget from "@/components/widgets/SettingsWidget.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    SettingsWidget
  },
  computed: {
    ...mapGetters(["getSettings"])
  }
};
</script>

<style lang="scss" scoped></style>
