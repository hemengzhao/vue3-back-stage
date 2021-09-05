<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in sidebarRouter">
                <template v-if="item.children">
                    <el-sub-menu :index="item.path" :key="item.path">
                        <template #title>
                            <i :class="item.meta.icon"></i>
                            <span>{{ item.meta.title }}</span>
                        </template>
                        <template v-for='subItem in item.children'>
                            <el-sub-menu v-if="subItem.children" :index="subItem.path" :key="subItem.path">
                                <template #title>{{ subItem.meta.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.children" :key="i" :index="threeItem.path">
                                    {{ threeItem.meta.title }}</el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.path" :key="subItem.path">{{ subItem.meta.title }}</el-menu-item>
                        </template>
                    </el-sub-menu>

                </template>
                <template v-else>
                    <el-menu-item :index="item.path" :key="item.path">
                        <i :class="item.meta.icon"></i>
                        <template #title>{{ item.meta.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
    setup() {
       
        const route = useRoute();

        const onRoutes = computed(() => {
            return route.path;
        });

        const store = useStore();
        const collapse = computed(() => store.state.lodVuex.collapse);
        const sidebarRouter = computed(() => store.state.router.sidebarRouter);
        
        return {
            sidebarRouter,
            onRoutes,
            collapse,
        };
    },
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
