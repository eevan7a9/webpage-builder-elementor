<template>
  <div class="settings-wrapper h-100">
    <div class="h-100 w-100">
      <div class="none-selected">
        <p class="text-muted p-3 font-weight-bold">
          *Select a "Widget or Element" from one of your columns, to show
          available Settings here.
        </p>
        <img src="@/assets/icons/info-icons.svg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.settings-wrapper {
  overflow: auto;
  max-height: 98%;
  .none-selected {
    img {
      width: 100px;
    }
  }
}
</style>
