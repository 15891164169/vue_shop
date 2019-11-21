<template>
  <div v-if="Object.keys(itemParams).length !== 0" id="params-info">
    <div class="params-rule" v-for="(table, idx) in itemParams.rule.tables" :key="idx">
      <p v-for="(items, idy) in table" :key="idy" class="rule-row">
        <span v-for="(item, idz) in items" :key="idz">{{ item }}</span>
      </p>
    </div>

    <div class="params-info">
      <p v-for="(item, idx) in itemParams.info.set" :key="idx" class="info-row">
        <span class="info-key">{{ item.key }}</span>
        <span class="info-value">{{ item.value }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    itemParams: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .params-rule {
    padding: 8px;
  }
  .params-rule .rule-row {
    display: flex;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  .params-rule .rule-row span {
    flex: 1;
    padding: 20px 10px;
    text-align: center;
  }
  .params-info {
    padding: 8px;
  }
  .params-info .info-row {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  .info-row .info-key {
    flex: 1;
    padding: 16px 20px;
  }
  .info-row .info-value {
    flex: 3;
    padding: 16px 20px 16px 0;
    color: var(--color-tint);
  }
</style>
