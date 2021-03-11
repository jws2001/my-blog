import marked from 'marked';
import hljs from 'highlight.js';
import { ref } from 'vue';

/**
 * 目录树形结构
 */
export const treePage = ref([]);

const renderer = new marked.Renderer();
/**
 * 得到h 标签的信息 生成树形结构
 * @param {文本} text 
 * @param {h tag登记} level 
 * @param {文本} raw 
 * @returns 
 */
let idIndex = 0;
renderer.heading = function(text, level, raw) {
    idIndex++;
    console.log(text);
    console.log(level);
    console.log(raw);
    console.log(treePage)
    console.log(treePage.value)
    treePage.value.push({ text, level, raw })
    return `<h${level} id="article-title-${idIndex}">${text}</h${level}>`
}

marked.setOptions({
    renderer: renderer,
    highlight: function(code, language) {
        const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
        return hljs.highlight(validLanguage, code).value;
    },
    headerIds: true,
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
})




export default marked;