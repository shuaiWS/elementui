export const UEditorConfig = {
    UEDITOR_HOME_URL: '/static/ue/',
    serverUrl:'',//[默认值：URL + "php/controller.php"]  服务器统一请求接口路径
    autoHeightEnabled: true,//是否自动长高，默认true
    autoFloatEnabled: false,//是否保持toolbar的位置不动，默认true
    initialFrameWidth: 900,//初始化编辑器宽度，默认1000
    initialFrameHeight: 500,//初始化编辑器高度，默认320
    enableAutoSave: false, //启用自动保存
    maximumWords:10000,//允许的最大字符数
    enableContextMenu:true, //打开右键菜单功能
}