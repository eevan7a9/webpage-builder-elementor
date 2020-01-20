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
        <b-card no-body>
          <b-tabs v-model="tabIndex" card>
            <b-tab title="Widget" v-if="getSettings.widget.id">
              <b-card-text>
                <SettingsWidget
                  :widgets="getSettings.widget.content"
                  :key="getSettings.widget.id"
                  v-if="getSettings.widget.id"
              /></b-card-text>
            </b-tab>
            <b-tab title="Column">
              <b-card-text>
                <div class="bg-danger">
                  <h1>
                    {{ getSettings.column.style }}
                    {{ getSettings.column.grid }}
                  </h1>
                  <button @click="getSettings.column.style.fill = false">
                    x
                  </button>
                </div></b-card-text
              >
            </b-tab>
          </b-tabs>
        </b-card>
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
  data() {
    return {
      tabIndex: 0
    };
  },
  computed: {
    ...mapGetters(["getSettings"])
  }
};
</script>

<style lang="scss" scoped></style>
