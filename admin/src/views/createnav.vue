<template>
    <div class="createnav">
        <h5>新建分类</h5>
        <el-form @submit.native.prevent="save">
            <el-form-item>
                <span>名字</span>
                <el-input v-model="model.name"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" native-type="submit" ref="">保存</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    props: {},
    data () {
       return {
           model:{
               name:''
           }
       }
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {
        save(){
            this.$http.post('/createnav',this.model)
            this.$router.push('/1')
            this.$message({
                type:'success',
                message:'W AI NI'
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>