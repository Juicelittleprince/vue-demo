<template>
  <div class="index">
    <Editor></Editor>
  </div>
</template>

<script>
import Editor from "../component/editor.vue";
export default {
  name: "Index",
  components: {
    Editor,
  },
  data() {
    return {
      msg: "",
      msg2: "",
      value: ["china"],
      editorContentLaebl: "",
      basicForm: { editorContent: "" },
    };
  },
  watch: {
    value(val) {
      console.log(`selected:`, val);
    },
  },
  mounted() {
    this.msg = this.$store.state.param.msg;
    this.msg2 = this.$store.state.param.msg2;
  },
  methods: {
    change() {
      this.$store.dispatch("increment", { msg: "helloworld" });
      console.log(this.$store.state.param.msg);
      this.msg = this.$store.state.param.msg;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.menu2222 {
  color: red !important;
}
/deep/ .ant-select-dropdown-menu {
  color: red !important;
}
</style>
