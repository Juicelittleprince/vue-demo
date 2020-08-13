<!--
label:用于给富文本赋予默认值,清空值label=" ",必须加空格,负责不会清空
v-model:单向绑定，由于富文本监听问题，不能用v-model赋予默认值
  -->
<template>
    <div class="editor-wrap">
        <froala
            id="froala-editor"
            :tag="'textarea'"
            :config="froalaConfig"
            v-model="body"
        ></froala>
    </div>
</template>
<script>
export default {
    props: {
        // 显示的工具列表
        
        placeholder: {
            type: String
            //   required: true
        },
        height: {
            type: Number
        },
        value: {
            type: String,
            default: null
        },
        label: {
            type: String,
            default: ''
        },
        index: {
            type: Number,
            default: 1
        }
    },
    name: 'froala-editor',
    data() {
        var that = this
        return {
            tool:{
            type:Array,
            default:[
                        'undo',
                        'redo',
                        'clearFormatting',
                        'bold',
                        'italic',
                        'underline',
                        'strikeThrough',
                        'fontFamily',
                        'fontSize',
                        'color',
                        'inlineStyle',
                        'paragraphFormat',
                        'align',
                        'formatOL',
                        'formatUL',
                        'outdent',
                        'indent',
                        'quote',
                        'insertLink',
                        'insertImage',
                        'insertVideo',
                        'embedly',
                        'insertFile',
                        'insertTable',
                        'emoticons',
                        'specialCharacters',
                        'insertHR',
                        'selectAll',
                        'print',
                        'spellChecker',
                        'html',
                        'help',
                        'fullscreen'
                    ]
            },
            editor: null,
            body: null,
            froalaConfig: {
                toolbarButtons: this.tool,
                // theme: "dark",//主题
                placeholderText: this.placeholder || '请在此输入',
                language: 'zh_cn', //国际化
                imageUploadURL: 'http://oiennce-service-java-qas.omepaas.enncloud.cn/image/addImageLinkFn', //上传url
                fileUploadURL: 'http://oiennce-service-java-qas.omepaas.enncloud.cn/image/addImageLinkFn',
                videoUploadURL: 'http://oiennce-service-java-qas.omepaas.enncloud.cn/image/addImageLinkFn',
                quickInsertButtons: ['image', 'table', 'ul', 'ol', 'hr'], //快速插入项
                // toolbarVisibleWithoutSelection: true,//是否开启 不选中模式
                // disableRightClick: true,//是否屏蔽右击
                colorsHEXInput: false, //关闭16进制色值
                toolbarSticky: false, //操作栏是否自动吸顶,
                zIndex: 2501,
                height: this.height || '400',
                // autofocus: true,
                events: {
                    initialized: function() {
                        // console.log("initialized1111");
                        // this.editor = editor;
                        // console.log(editor.opts.imageUploadParams);
                        that.editor = this
                        // console.log("initial");
                        // that.editor.html.set(that.value);
                        that.body = that.value
                        // that.setHtml()
                    },
                    blur: () => {
                        // console.log("blur....");
                        this.$emit('blur')
                    },
                    'image.beforeUpload': function() {
                        // Image was uploaded to the server.
                        // var i = generateUUID()
                        // this.opts.imageUploadParams.token = getToken()
                        // this.opts.imageUploadParams.i = i
                        // this.opts.imageUploadParams.ak = md5(COMM_API_KEY + i)

                        return true
                    },
                    'file.beforeUpload': function() {
                        // Image was uploaded to the server.

                        // var i = generateUUID()
                        // this.opts.fileUploadParams.token = getToken()
                        // this.opts.fileUploadParams.i = i
                        // this.opts.fileUploadParams.ak = md5(COMM_API_KEY + i)
                        return true
                    },
                    'video.beforeUpload': function() {
                        // Image was uploaded to the server.
                        // var i = generateUUID()
                        // this.opts.videoUploadParams.token = getToken()
                        // this.opts.videoUploadParams.i = i
                        // this.opts.videoUploadParams.ak = md5(COMM_API_KEY + i)
                        return true
                    },
                    contentChanged: () => {}
                }
            }
        }
    },
    watch: {
        body: function(newVal, old) {
            if (old !== newVal) {
                let val = this.getSimpleText(this.editor.html.get(true))
                this.$emit('input', val)
            }
        },
        label: function(newVal, old) {
            if (old !== newVal) {
                this.editor.html.set(newVal)
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.setIndex(this.index)
        }, 200)
    },
    methods: {
        //更改富文本层级
        setIndex(val) {
            this.$nextTick(() => {
                let dv = document.getElementsByClassName('fr-box')
                for (let i in dv) {
                    if (!dv[i].style) {
                        return
                    }
                    dv[i].style.cssText = 'z-index:' + val
                }
            })
        },
        //富文本中提取纯文本
        getSimpleText: (html) => {
            var re1 = new RegExp('<p data-f-id="pbf".+?</p>', 'g') //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
            var msg = html.replace(re1, '') //执行替换成空字符
            return msg
        },
        resetValue(val) {
            this.body = val || ''
        }
    }
}
</script>
<style>
.editor-wrap {
    width: 900px;
}
.editor-wrap > div {
    width: 100%;
}
.fr-wrapper > div[style*='z-index:9999;'],
.fr-wrapper > div[style*='z-index: 9999;'] {
    height: 0;
    overflow: hidden;
}
.fr-box .second-toolbar #logo {
    width: 0 !important;
    height: 0 !important;
    overflow: hidden;
}
.fr-box .fr-toolbar {
    border-radius: 4px 4px 0 0;
    border-color: #dcdfe6;
}
.fr-box .second-toolbar {
    border-radius: 0 0 4px 4px;
    border-color: #dcdfe6;
}
.fr-box .fr-wrapper {
    border-color: #dcdfe6 !important;
}
</style>
