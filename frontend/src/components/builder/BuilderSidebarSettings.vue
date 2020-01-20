<template>
  <div class="settings-wrapper">
    <div class="h-100 w-100">
      <div class="none-selected" v-if="!getSettings.content">
        <p class="text-muted px-3 pt-3 font-weight-bold">
          *Select a "Widget or Column" from one of your Sections, to show
          available Settings here.
        </p>
        <img src="@/assets/icons/info-icons.svg" alt="" srcset="" />
      </div>
      <div class="widget-settings" v-if="getSettings.content">
        <b-card no-body class="h-100">
          <b-tabs v-model="tabIndex" card>
            <b-tab title="Widget">
              <b-card-text>
                <SettingsWidget
                  :widgets="getSettings.widget.content"
                  :key="getSettings.widget.id"
                  v-if="getSettings.widget.id"
                />
                <div
                  class="w-100"
                  style="height:200px"
                  v-if="!getSettings.widget.id"
                >
                  <p class="font-weight-bold text-muted">
                    Select a "Widget" to show available settings.
                  </p>
                  <img src="@/assets/icons/info-icons.svg" alt="" srcset="" />
                </div>
              </b-card-text>
            </b-tab>
            <b-tab title="Column">
              <b-card-text>
                <ColumnSettings
                  :column="getSettings.column"
                  :key="getSettings.column.id"
                />
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import SettingsWidget from "@/components/widgets/SettingsWidget.vue";
import ColumnSettings from "@/components/column/ColumnSettings.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    SettingsWidget,
    ColumnSettings
  },
  data() {
    return {
      tabIndex: 0
    };
  },
  mounted() {
    this.tabIndex = this.getSettings.tabOpen;
  },
  computed: {
    ...mapGetters(["getSettings"])
  },
  watch: {
    "getSettings.tabOpen": function() {
      this.tabIndex = this.getSettings.tabOpen;
    }
  }
};
</script>

<style lang="scss" scoped></style>
