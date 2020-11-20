<template>
  <el-table
    :data="table_data"
    style="width: 100%; margin-top:5%"
    height="87%">
    <el-table-column
      fixed
      prop="id"
      label="序号"
      span:1>
    </el-table-column>
    <el-table-column
      prop="name"
      label="设备名称"
      span:1>
    </el-table-column>
    <el-table-column
      prop="lng"
      label="经度"
      width="120">
    </el-table-column>
    <el-table-column
      prop="log"
      label="纬度"
      width="120">
    </el-table-column>
    <el-table-column
      prop="money"
      label="造价"
      width="300">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: ['table_data'],
    data() {
      return {
      }
    }
  }
</script>
