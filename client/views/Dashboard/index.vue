<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">Add Measurement</el-button>
    <el-card >
      <line-chart :chartData="progress" :options="{responsive: false}" ></line-chart>
    </el-card>
    <el-dialog title="Add measurements" :modal-append-to-body="false" :visible.sync="dialogVisible" size="tiny">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Activity name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="form.region" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Activity time">
          <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="Instant delivery">
          <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="Activity type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="Online activities" name="type"></el-checkbox>
            <el-checkbox label="Promotion activities" name="type"></el-checkbox>
            <el-checkbox label="Offline activities" name="type"></el-checkbox>
            <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources">
          <el-radio-group v-model="form.resource">
            <el-radio label="Sponsor"></el-radio>
            <el-radio label="Venue"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import LineChart from 'components/Charts/Line'
export default {
  name: 'Dashboard',
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        region: '',
        date: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      progress: {
        labels: [new Date('09/25/2017').toLocaleDateString('en-BG'), new Date('10/02/2017').toLocaleDateString('en-BG')],
        datasets: [
          {
            label: 'Weight',
            data: [107, 104.4]
          }
        ]
      }
    }
  },
  components: {
    LineChart
  }
}
</script>
