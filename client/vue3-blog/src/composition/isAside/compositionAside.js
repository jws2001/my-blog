//是否隐藏 侧边栏
import { ref } from 'vue';
//根据值得判断是否隐藏 侧边栏
export const isAside = ref(false);
//改变值得函数
export function handleisAside(flag) {
    isAside.value = flag;
}