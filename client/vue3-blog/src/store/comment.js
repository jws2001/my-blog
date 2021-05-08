import { ref } from 'vue';
export const commentStoreRef = ref({
    pitchInfo: {}, //@的信息
    isReply: false, //是否显示@dom
});

export function replyState(state) {
    //改变是否显示的状态
    commentStoreRef.value.isReply = state
}