<template>
  <el-form ref="form" label-width="120px">
    <el-form-item label="Activity name">
      <el-input v-model="weight"></el-input>
    </el-form-item>
    <!-- <el-form-item label="Activity time">
      <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-form-item> -->
  </el-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Measurements',
  computed: {
    ...mapGetters(['getField']),
    ...{
      weight() {
        return this.getField('weight')
      }
    }
  }
}
</script>
