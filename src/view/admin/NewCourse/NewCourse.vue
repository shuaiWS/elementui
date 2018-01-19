<template>
  <div>
<<<<<<< HEAD
    <el-form :model="formData"  ref="courseforme" label-width="100px" class="demo-formData" :rules="formRule">

      <!-- 基本信息 start      :rules="rules"   -->
=======
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <!-- 基本信息 start-->
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
      <el-row class="border-b">
        <el-col :span="24" class="large padd20">基本信息</el-col>
      </el-row>

<<<<<<< HEAD
      <el-form-item label="课程标题" prop="title" required>
        <el-input v-model="formData.title" :maxlength="30"  placeholder="请输入30个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="课程简介" prop="slogo">
        <el-input v-model="formData.slogo" type="textarea" :maxlength="60" :rows="3" placeholder="请输入60个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="课程目录" prop="chapterlist" required >
        <el-row v-for="(cata,i) in formData.chapterlist" :key="i" class="catalog-list">
          <span>序号{{i+1}}</span>
          <el-input v-model="cata.title" :maxlength="30"  placeholder="请输入30字以内标题名称"></el-input>
          <el-upload
            class="upload-demo"
            :data="mediaParams"
            :limit="1"
            :accept="mediaType.join(',')"
            :action="uploadAction"
            :on-preview="chapterPreview"
            :on-error="uploadErr"
            :on-remove="(file, fileList)=>{chapterRemove(file, fileList,i)}"
            :on-success="(response, file, fileList)=>{chapterSuccess(response, file, fileList,i)}"
            :before-upload="beforeChapterUpload"
            :file-list="pageData.chapterList[i]"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">支持MP3、MP4、FLV、AVI格式转码，最大2G</div>
          </el-upload>
        </el-row>
        <el-row>
          <el-button @click="addCatalog">新增课程目录</el-button>
=======
      <el-form-item label="课程标题" prop="name" required>
        <el-input v-model="ruleForm.name" :maxlength=30  placeholder="请输入30个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="课程简介" prop="des">
        <el-input v-model="ruleForm.des" type="textarea" :maxlength="60" :rows="3"  placeholder="请输入60个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="课程目录" prop="catalog" required>
        <el-row>
          <el-button>新增课程目录</el-button>
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
        </el-row>
        <el-row>
          <el-col :span="24" class="extra-small">( 上传即代表你同意《 <span class="blue">内容上传协议</span> 》)</el-col>
        </el-row>
      </el-form-item>

<<<<<<< HEAD
      <el-form-item label="课程分类" prop="category" required>
        <el-input v-model="formData.category" type="hidden" class="input-hidden"></el-input>
        <el-dropdown trigger="click" @command="categoryCommand">
          <el-button >
            {{pageData.categoryName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item  v-for="(item,i) in pageData.categoryList" :key="i" :command="item.cid">{{item.name}}</el-dropdown-item>
=======
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
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
          </el-dropdown-menu>
        </el-dropdown>
      </el-form-item>
      <!-- 基本信息 end-->
      <!-- 上架信息 start -->
      <el-row class="border-b">
        <el-col :span="24" class="large padd20">上架信息</el-col>
      </el-row>

<<<<<<< HEAD
      <el-form-item label="收费标准" prop="price" required  >
        <el-radio-group v-model="pageData.priceRadio">
          <el-radio label="0"  @change="priceChange">免费</el-radio>
          <el-radio label="1"  @change="priceChange">收费</el-radio>
          <el-input v-model="pageData.price" :maxlength="30" type="number" placeholder="收费价格不小于 1 元" v-if="pageData.showPriceInput" ref="price" @blur="changePrice"></el-input>
        </el-radio-group>
      </el-form-item>   

      <el-form-item label="课程试听" prop="islisten" required>
        <el-radio-group v-model="formData.islisten">
            <el-radio :label="0">无试听</el-radio>
            <el-radio :label="1">有试听</el-radio>
          </el-radio-group>
      </el-form-item>    

      <el-form-item label="分成比例" prop="scale" required>
        <el-input v-model="formData.scale" placeholder="0 则为不分成" type="number"></el-input>%
=======
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
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
      </el-form-item>    
      <!-- 上架信息 end -->
      <!-- 课程信息 start -->
      <el-row class="border-b">
        <el-col :span="24" class="large padd20">课程信息</el-col>
      </el-row>
<<<<<<< HEAD
      <el-form-item label="封面图" prop="title_img" required>
        <el-input v-model="formData.title_img" type="hidden" class="input-hidden"></el-input>
        <el-upload
          class="upload-demo"
          :data="imgParams"
          :limit="1"
          :accept="imgType.join(',')"
          :action="uploadAction"
          :on-preview="slogoPreview"
          :on-error="uploadErr"
          :on-remove="slogoRemove"
          :before-upload="beforeSlogoUpload"
          :on-success="slogoSuccess"
          :file-list="pageData.slogoList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
        </el-upload>
      </el-form-item>   

      <el-form-item label="介绍附件" prop="listenannex">
        <el-input v-model="formData.listenannex" type="hidden" class="input-hidden"></el-input>
        <el-upload
          class="upload-demo"
          :data="mediaParams"
          :limit="1"
          :accept="mediaType.join(',')"
          :action="uploadAction"
          :on-preview="introImgPreview"
          :on-error="uploadErr"
          :on-remove="introImgRemove"
          :before-upload="beforeintroImgUpload"
          :on-success="introImgSuccess"
          :file-list="pageData.introImgList"
          list-type="picture">
          <el-button size="small" type="primary">选择附件</el-button>
          <div slot="tip" class="el-upload__tip">支持MP3、MP4、FLV、AVI格式转码，最大2G，在课程详情页播放</div>
        </el-upload>
      </el-form-item>  

      <el-form-item label="课程详情" prop="intro_img" required>
        <!-- <u-editor></u-editor> -->
        <el-input v-if="formData.intro_img[0]" v-model="formData.intro_img[0]['img']" type="hidden" class="input-hidden"></el-input>
        <el-upload
          class="upload-demo"
          :data="imgParams"
          :accept="imgType.join(',')"
          :action="uploadAction"
          :on-preview="introPreview"
          :on-error="uploadErr"
          :on-remove="introRemove"
          :before-upload="introUpload"
          :on-success="introSuccess"
          :file-list="pageData.introList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
        </el-upload> 
=======
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
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
      </el-form-item>    
      <!-- 课程信息 end -->
      <!-- 讲师信息 start -->
      <el-row class="border-b">
        <el-col :span="24" class="large padd20">讲师信息</el-col>
      </el-row>

<<<<<<< HEAD
      <el-form-item label="讲师名称" prop="tname" required>
        <el-input v-model="formData.tname" :maxlength=30  placeholder="请输入30个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="讲师介绍" prop="tintro">
        <el-input v-model="formData.tintro" type="textarea" :maxlength="60" :rows="3"  placeholder="请输入60个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="讲师头像" prop="head_img_url" required>
        <el-input v-model="formData.head_img_url" type="hidden" class="input-hidden"></el-input>
        <el-upload
          class="upload-demo"
          :data="imgParams"
          :limit="1"
          :accept="imgType.join(',')"
          :action="uploadAction"
          :on-preview="tintroImgPreview"
          :on-error="uploadErr"
          :on-remove="tintroImgRemove"
          :before-upload="beforetintroImgUpload"
          :on-success="tintroImgSuccess"
          :file-list="pageData.tintroImgList"
          list-type="picture">
          <el-button size="small" type="primary">选择图片</el-button>
          <div slot="tip" class="el-upload__tip">400X400最佳，支持png、jpg格式，且不超过2MB</div>
        </el-upload>
=======
      <el-form-item label="讲师名称" prop="name" required>
        <el-input v-model="ruleForm.name" :maxlength=30  placeholder="请输入30个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="讲师介绍" prop="des">
        <el-input v-model="ruleForm.des" type="textarea" :maxlength="60" :rows="3"  placeholder="请输入60个字符以内"></el-input>
      </el-form-item>

      <el-form-item label="讲师图片" prop="catalog" required>
        <el-button>选择图片</el-button>
        <span>400X400最佳，支持png、jpg格式</span>
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
      </el-form-item>
      <!-- 讲师信息 end -->
      <!-- 附加信息 start-->
      <el-row class="border-b">
        <el-col :span="24" class="large padd20">附加信息</el-col>
      </el-row>

<<<<<<< HEAD
      <el-form-item label="课程标签" prop="tags" required>
        <el-tag  :key="tag" v-for="tag in formData.tags" closable :disable-transitions="false"  @close="tagHandleClose(tag)">          
          <el-input v-model="formData.tags[0]" type="hidden" class="input-hidden"></el-input>
          {{tag}}
        </el-tag>
        <el-input class="input-new-tag" v-if="pageData.tagInputVisible" v-model="pageData.tagInputValue" ref="saveTagInput" size="small"
=======
      <el-form-item label="课程标签" prop="name" required>
        <el-tag  :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false"  @close="tagHandleClose(tag)">{{tag}}</el-tag>
        <el-input class="input-new-tag" v-if="tagInputVisible" v-model="tagInputValue" ref="saveTagInput" size="small"
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
          @keyup.enter.native="tagHandleInputConfirm"  @blur="tagHandleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showTagInput">+ 添加标签</el-button>
      </el-form-item>

<<<<<<< HEAD
      <el-form-item label="状态" prop="status" required>
       <el-radio-group v-model="formData.status">
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">发布</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      <!-- 附加信息 end-->
=======
      <el-form-item label="状态" prop="catalog" required>
       <el-radio-group v-model="ruleForm.charge">
            <el-radio :label="1">草稿</el-radio>
            <el-radio :label="2">发布</el-radio>
          </el-radio-group>
      </el-form-item>
      <!-- end start-->
>>>>>>> d0a2e3c2388ea7da928aff3fd81943e2f895c4f5
    </el-form>
  </div>
</template>

<script lang="ts" src="./NewCourse.ts"></script>

<style lang="scss" scoped type="text/css" src="./NewCourse.scss"></style>


