//分页的页码数
import { ref } from 'vue';
const pagrRef = ref({
    offset: 1,
    limit: 10,
});
export default pagrRef;