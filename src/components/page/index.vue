<template>
  <div class="index">
   <a-button type="primary">AAAAA</a-button>
   <a-select
       v-model="value"
       mode="multiple"
       style="width: 100%"
       placeholder="select one country"
       option-label-prop="label"
       :autoFocus="true"
       dropdownClassName="menu2222"
       :dropdownMatchSelectWidth="false"
       :dropdownStyle="{color:'red'}"
       :open="true"
       :dropdownMenuStyle="{color:'red !important'}"
     >
       <a-select-option value="china" label="China">
         <span role="img" aria-label="China">
           🇨🇳
         </span>
         China (中国)
       </a-select-option>
       <a-select-option value="usa" label="USA">
         <span role="img" aria-label="USA">
           🇺🇸
         </span>
         USA (美国)
       </a-select-option>
       <a-select-option value="japan" label="Japan">
         <span role="img" aria-label="Japan">
           🇯🇵
         </span>
         Japan (日本)
       </a-select-option>
       <a-select-option value="korea" label="Korea">
         <span role="img" aria-label="Korea">
           🇰🇷
         </span>
         Korea (韩国)
       </a-select-option>
     </a-select>
  </div>
</template>

<script>
  import Editor from '../component/editor.vue'
export default {
  name: 'Index',
  components:{
    Editor
  },
  data () {
    return {
      msg: '',
      msg2:'',
      value: ['china'],
      editorContentLaebl:"",
      basicForm:{editorContent:""}
    }
  },
  watch: {
      value(val) {
        console.log(`selected:`, val);
      },
    },
  mounted() {
      this.msg=this.$store.state.param.msg;
      this.msg2=this.$store.state.param.msg2;
  },
  methods: {
      change(){

        this.$store.dispatch("increment", {msg:'helloworld'});
        console.log(this.$store.state.param.msg);
        this.msg=this.$store.state.param.msg;
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">

.menu2222{
  color:red !important;
}
/deep/ .ant-select-dropdown-menu{
  color:red !important;
}
</style>
