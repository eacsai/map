<template>
  <el-table
    :data="table_data"
    style="width: 100%"
    height="100%">
    <el-table-column
      prop="id"
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="设备名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="log"
      label="经度">
    </el-table-column>
    <el-table-column
      prop="lng"
      label="纬度">
    </el-table-column>
    <el-table-column
      prop="money"
      label="造价">
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