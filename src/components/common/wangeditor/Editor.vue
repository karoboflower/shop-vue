<template>
    <div>
        <div ref="editor" style="text-align:left"></div>
    </div>
</template>

<script>
    import E from "@/components/common/wangeditor/wangEditor.js"
    export default {
      name: 'wangEditor',
      data () {
        return {
          editor:''
        }
      },
      props:{
          defaultContent:''
      },
      computed:{
          editorContent:function(){
              return this.defaultContent
          }
      },
      watch:{
          editorContent:function(){
              this.editor.txt.html(this.editorContent)
          }
       
      },
      mounted() {
        var editor = new E(this.$refs.editor)
        this.editor=editor;
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
          this.$emit('getContent',this.editorContent)
        }
        editor.customConfig.showLinkImg = false
        editor.create()
        editor.txt.html(this.defaultContent)
       
      }
    }
</script>

<style scoped>
</style>
