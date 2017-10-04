<template>
  <el-form ref="form" label-width="120px">
    <el-form-item label="Height" >
      <el-input :value="fields.height.value"@change="value => onInputChange('height', value)"></el-input>
    </el-form-item>
    <el-form-item label="Weight">
      <el-input :value="fields.weight.value" @change="value => onInputChange('weight', value)"></el-input>
    </el-form-item>
    <el-form-item label="Shoulders">
      <el-input :value="fields.shoulders.value" @change="value => onInputChange('shoulders', value)"></el-input>
    </el-form-item>
    <el-form-item label="Chest">
      <el-input :value="fields.chest.value" @change="value => onInputChange('chest', value)"></el-input>
    </el-form-item>
    <el-form-item label="Waist">
      <el-input :value="fields.waist.value" @change="value => onInputChange('waist', value)"></el-input>
    </el-form-item>
    <el-col :span="12">
      <el-form-item label="Hip">
        <el-input :value="fields.hip.value" @change="value => onInputChange('hip', value)"></el-input>
      </el-form-item>
      <el-form-item label="Left Thigh">
        <el-input :value="fields.leftThigh.value" @change="value => onInputChange('leftThigh', value)"></el-input>
      </el-form-item>
      <el-form-item label="Right Thigh">
        <el-input :value="fields.rightThigh.value" @change="value => onInputChange('rightThigh', value)"></el-input>
      </el-form-item>
      <el-form-item label="Left Calf">
        <el-input :value="fields.leftCalf.value" @change="value => onInputChange('leftCalf', value)"></el-input>
      </el-form-item>
      <el-form-item label="Right Calf">
        <el-input :value="fields.rightCalf.value" @change="value => onInputChange('rightCalf', value)"></el-input>
      </el-form-item>
      <el-form-item label="Ankle">
        <el-input :value="fields.ankle.value" @change="value => onInputChange('ankle', value)"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="Left Biceps">
        <el-input :value="fields.leftBiceps.value" @change="value => onInputChange('leftBiceps', value)"></el-input>
      </el-form-item>
      <el-form-item label="Right Biceps">
        <el-input :value="fields.rightBiceps.value" @change="value => onInputChange('rightBiceps', value)"></el-input>
      </el-form-item>
      <el-form-item label="Left Triceps">
        <el-input :value="fields.leftTriceps.value" @change="value => onInputChange('leftTriceps', value)"></el-input>
      </el-form-item>
      <el-form-item label="Right Triceps">
        <el-input :value="fields.rightTriceps.value" @change="value => onInputChange('rightTriceps', value)"></el-input>
      </el-form-item>
      <el-form-item label="Left Forearm">
        <el-input :value="fields.leftForearm.value" @change="value => onInputChange('leftForearm', value)"></el-input>
      </el-form-item>
      <el-form-item label="Right Forearm">
        <el-input :value="fields.rightForearm.value" @change="value => onInputChange('rightForearm', value)"></el-input>
      </el-form-item>
    </el-col>
    <!-- <el-form-item label="Activity time">
      <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-form-item> -->
  </el-form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Measurements',
  methods: {
    ...mapActions(['setField']),
    onInputChange(name, value) {
      return this.setField({
        formName: 'measurements',
        fieldName: name,
        fieldValue: value
      })
    }
  },
  computed: {
    ...mapGetters(['inputFields']),
    fields() {
      return this.inputFields('measurements')
    }
  }
}
</script>
