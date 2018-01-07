<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <!-- 基本信息 start-->
      <el-row class="border-b">
        <el-col :span="24" class="large padd20">基本信息</el-col>
      </el-row>

      <el-form-item label="课程标题" prop="name" required>
        <el-input v-model="ruleForm.name" :maxlength=30  placeholder="请输入30个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="课程简介" prop="des">
        <el-input v-model="ruleForm.des" type="textarea" :maxlength="60" :rows="3"  placeholder="请输入60个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="课程目录" prop="catalog" required>
        <el-row>
          <el-button>新增课程目录</el-button>
        </el-row>
        <el-row>
          <el-col :span="24" class="extra-small">( 上传即代表你同意《 <span class="blue">内容上传协议</span> 》)</el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="课程分类" prop="catalog" required>
        <el-dropdown trigger="click" @command="handleCommand">
          <el-button >
            选择分类<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item command="a">学习</el-dropdown-item>
            <el-dropdown-item command="b">娱乐</el-dropdown-item>
            <el-dropdown-item command="c">记忆力</el-dropdown-item>
            <el-dropdown-item command="d">书法</el-dropdown-item>
            <el-dropdown-item command="e">国文</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-form-item>
      <!-- 基本信息 end-->
      <!-- 上架信息 start -->
      <el-row class="border-b">
        <el-col :span="24" class="large padd20">上架信息</el-col>
      </el-row>

      <el-form-item label="收费标准" prop="catalog" required>
        <el-radio-group v-model="ruleForm.charge">
            <el-radio :label="1">免费</el-radio>
            <el-radio :label="2">收费</el-radio>
          </el-radio-group>
      </el-form-item>   

      <el-form-item label="课程试听" prop="catalog" required>
        <el-radio-group v-model="ruleForm.audition">
            <el-radio :label="1">无试听</el-radio>
            <el-radio :label="2">1分钟</el-radio>
            <el-radio :label="2">3分钟</el-radio>
          </el-radio-group>
      </el-form-item>    

      <el-form-item label="分成比例" prop="catalog" required>
        <el-input v-model="ruleForm.name" placeholder="0 则为不分成" type="number" min=0></el-input>%
      </el-form-item>    
      <!-- 上架信息 end -->
      <!-- 课程信息 start -->
      <el-row class="border-b">
        <el-col :span="24" class="large padd20">课程信息</el-col>
      </el-row>
      <el-form-item label="封面图" prop="catalog" required>
        <el-button>选择图片</el-button>
        <span>600x400最佳 ， 支持 png 、jpg 格式</span>
      </el-form-item>   

      <el-form-item label="介绍附件" prop="catalog">
        <el-button>选择附件</el-button>
        <span>支持MP3、MP4、FLV、AVI格式转码，最大2G，在课程详情页播放</span>
      </el-form-item>  

      <el-form-item label="课程详情" prop="catalog" required>
        <u-editor ></u-editor>
      </el-form-item>    
      <!-- 课程信息 end -->
      <!-- 讲师信息 start -->
      <el-row class="border-b">
        <el-col :span="24" class="large padd20">讲师信息</el-col>
      </el-row>

      <el-form-item label="讲师名称" prop="name" required>
        <el-input v-model="ruleForm.name" :maxlength=30  placeholder="请输入30个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="讲师介绍" prop="des">
        <el-input v-model="ruleForm.des" type="textarea" :maxlength="60" :rows="3"  placeholder="请输入60个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="讲师图片" prop="catalog" required>
        <el-button>选择图片</el-button>
        <span>400X400最佳，支持png、jpg格式</span>
      </el-form-item>
      <!-- 讲师信息 end -->
      <!-- 附加信息 start-->
      <el-row class="border-b">
        <el-col :span="24" class="large padd20">附加信息</el-col>
      </el-row>

      <el-form-item label="课程标签" prop="name" required>
        <el-tag  :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false"  @close="tagHandleClose(tag)">{{tag}}</el-tag>
        <el-input class="input-new-tag" v-if="tagInputVisible" v-model="tagInputValue" ref="saveTagInput" size="small"
          @keyup.enter.native="tagHandleInputConfirm"  @blur="tagHandleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showTagInput">+ 添加标签</el-button>
      </el-form-item>

      <el-form-item label="状态" prop="catalog" required>
       <el-radio-group v-model="ruleForm.charge">
            <el-radio :label="1">草稿</el-radio>
            <el-radio :label="2">发布</el-radio>
          </el-radio-group>
      </el-form-item>
      <!-- end start-->
    </el-form>
  </div>
</template>

<script lang="ts" src="./NewCourse.ts"></script>

<style lang="scss" scoped type="text/css" src="./NewCourse.scss"></style>


