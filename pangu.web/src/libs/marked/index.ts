/**
 * markdown渲染器，支持解释表情图标，自动过滤脚本
 */
import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt();

export default mdStr => {
    return markdown.render(mdStr);
};
