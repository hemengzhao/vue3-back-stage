<template>
    <div class="pptBody">
        <div class="pptBody-top">
            <div class="left">
                <span><i class="el-icon-document-add"/>文件</span>
                <span><i class="el-icon-edit"/>编辑</span>
                <span><el-icon>
                        <data-line />
                    </el-icon> 演示
               </span>
                <span><el-icon>
                        <sunrise />
                    </el-icon>
                    帮助</span>
            </div>
            <div class="right">
                
            </div>
        </div>
        <div class="pptBody-content">
            <div class="left">

            </div>
            <div class="centent">

            </div>
            <div class="right">

            </div>
        </div>
    </div>
</template>
<script>
  import { DataLine, Sunrise } from '@element-plus/icons'
  import { ref, reactive, onMounted, c } from "vue";
export default {
    name: "PPT",
    components: {
        DataLine,
        Sunrise
    },
    setup() {
        
    },
}
</script>
<style lang="scss" scoped>
    .pptBody{
        background: #fff;
        height: 100%;
        &-top{
            height: 30px;
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;
            padding: 10px 20px;
            &>.left{
                span{
                    display: inline-block;
                    margin-right: 20px;
                    font-size: 14px;
                    i{
                        margin-right: 5px;
                    }
                }
            }
          
        }
        &-content{
             height: calc(100% - 50px);
             overflow: hidden;
        }
    }
    
</style>