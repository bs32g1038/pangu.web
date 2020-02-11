// import React, { useEffect } from 'src/libs/editor/node_modules/react';
// import Vditor from 'src/libs/editor/node_modules/vditor';
// import 'src/libs/editor/node_modules/vditor/src/assets/scss/classic.scss';
// import styled from 'src/libs/editor/node_modules/styled-components';

// const MarkdownEditorWrap = styled.div`
//     width: 100%;
//     h3 {
//         font-weight: 400;
//         font-size: 14px;
//     }
// `;

// const initEditor = () => {
//     const vditor = new Vditor('markdownEditor', {
//         height: 240,
//         preview: {
//             mode: 'editor',
//         },
//         placeholder: '请输入正文',
//         editor: false,
//     });
//     vditor.setValue('');
//     return vditor;
// };

// export default props => {
//     useEffect(() => {
//         const vditor = initEditor();
//         vditor.setValue(props.content || '');
//         if (props.getEditor) {
//             props.getEditor(vditor);
//         }
//     }, [1]);
//     return <MarkdownEditorWrap id="markdownEditor"></MarkdownEditorWrap>;
// };
