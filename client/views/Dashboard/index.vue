<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">Add Measurement</el-button>
    <el-card >
      <line-chart :chartData="progress" :options="{responsive: false}" ></line-chart>
    </el-card>
    <el-dialog title="Add measurements" :modal-append-to-body="false" :visible.sync="dialogVisible" size="tiny">
      <measurements></measurements>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import LineChart from 'components/Charts/Line'
import Measurements from 'containers/MeasurementsForm'

export default {
  name: 'Dashboard',
  data() {
    return {
      dialogVisible: false,
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
    LineChart, Measurements
  }
}
</script>
