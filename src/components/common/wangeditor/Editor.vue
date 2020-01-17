<template>
  <div class="editor">
    <div ref="editor" style="text-align:left" class="editor"></div>
  </div>
</template>

<script>
import E from "@/components/common/wangeditor/wangEditor.js"
export default {
  name: 'wangEditor',
  data () {
    return {
      editor: '',
      flag: true
    }
  },
  props: {
    defaultContent: ''
  },
  computed: {
    editorContent: {
      get: function () {
        return this.defaultContent;
      },
      set: function (val) {
        this.defaultContent = val;
      }
    }
  },
  watch: {
    editorContent: function () {
      if (this.defaultContent&&this.flag) {
        this.editor.txt.html(this.editorContent)
      }
       this.flag = false;
    }

  },
  mounted () {
    var editor = new E(this.$refs.editor)
    this.editor = editor;
    let _this = this;
    editor.customConfig.onchange = (html) => {
      // _this.editorContent = html
      _this.$emit('getContent', html);
    }
    editor.customConfig.showLinkImg = false
    editor.create()
    editor.txt.html(this.editorContent)

  }
}
</script>

<style scoped>
/deep/ .w-e-text-container {
  z-index: 10 !important;
}
/deep/ .w-e-menu {
  z-index: 11 !important;
}
</style>
