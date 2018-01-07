<template>
  <div>
    <div  class="block">
      <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
      <el-button type="primary">搜索</el-button>
      <el-button type="primary" @click="centerDialogVisible = true">点击打开 Dialog</el-button> 
    </div>
    <div  class="block">
      <el-dialog  title="新建推广"  :visible.sync="centerDialogVisible"  width="30%"  center>
        <el-row>
          <el-col :span="6" class="align-right">推广名称</el-col>
          <el-col :span="18"><el-input v-model="input" placeholder="请输入内容" size="small"></el-input></el-col>
        </el-row>
        <el-row>
          <el-col :span="6" class="align-right">推广ID</el-col>
          <el-col :span="18"><el-input v-model="input" placeholder="请输入内容" size="small"></el-input></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>   
    </div>
    <div  class="block">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column  prop="id" label="推广ID" width="180"></el-table-column>
        <el-table-column prop="name" label="推广名称" width="180"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="a" label="总收入"></el-table-column>
        <el-table-column prop="b" label="实际收入"></el-table-column>
        <el-table-column prop="c" label="订单数"></el-table-column>
      </el-table>
    </div>    
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts" src="./Spread.ts"></script>

<style lang="scss" src="./Spread.scss" scoped type="text/css"></style>