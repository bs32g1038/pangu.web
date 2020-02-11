import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import deepOrange from '@material-ui/core/colors/deepOrange';
import grey from '@material-ui/core/colors/grey';

export const Wrap = styled.div`
    flex: 1 0 auto;
    padding: 20px;
    background-color: #fff;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.85);
    margin-top: 0;
    margin-bottom: 0;
    flex: 1 0 auto;
`;

export const Meta = styled.div`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
`;

export const MetaBaseInfo = styled.div`
    flex: 1 0 auto;
    > span {
        margin-right: 10px;
    }
`;

export const MetaReaction = styled.div`
    display: flex;
    align-items: center;
`;

export const CollectCountWrap = styled(IconButton)`
    &.MuiIconButton-root {
        font-size: 14px;
        border-radius: 4px;
        padding: 5px 8px;
        margin-right: 10px;
    }
    .icon {
        width: 20px;
        height: 20px;
    }
`;

export const LikeCountWrap = styled(CollectCountWrap)`
    .icon {
        margin-right: 2px;
    }
`;

export const MarkdownBody = styled.div`
    min-height: 100px;
    padding-top: 1.5em;
    font-size: 14px;
    word-break: break-word;
    line-height: 1.6;
    margin-bottom: 36px;
    h1,
    h2 {
        clear: left;
        margin-top: 1.16667em;
        margin-bottom: 1.16667em;
        font-size: 1.2em;
        line-height: 1.5;
        font-weight: 600;
        font-synthesis: style;
    }
    h3,
    h4,
    h5,
    h6 {
        clear: left;
        margin-top: 1.90909em;
        margin-bottom: 1.27273em;
        font-size: 1.1em;
        line-height: 1.5;
        font-weight: 600;
        font-synthesis: style;
    }
    u {
        text-decoration: none;
    }

    b {
        font-weight: 600;
        font-synthesis: style;
    }
    sup {
        font-size: 0.8em;
    }

    a:focus {
        outline: none;
        -webkit-transition: -webkit-box-shadow 0.3s;
        transition: -webkit-box-shadow 0.3s;
        transition: box-shadow 0.3s;
        transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;
    }

    a.external,
    a.internal,
    a.link {
        text-decoration: none;
        cursor: pointer;
        border-bottom: 1px solid grey;
    }
    a.external:hover,
    a.internal:hover,
    a.link:hover {
        color: #175199;
        border-bottom: 1px solid #175199;
    }
    a.external > .ellipsis:after,
    a.internal > .ellipsis:after,
    a.link > .ellipsis:after {
        content: '...';
    }
    a.external > .invisible,
    a.internal > .invisible,
    a.link > .invisible {
        font: 0/0 a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
    }
    a.external u,
    a.internal u,
    a.link u {
        border: none;
    }
    a.member_mention {
        color: #175199;
    }
    a.member_mention:hover {
        border-bottom: 1px solid #175199;
    }
    p {
        margin: 1.4em 0;
    }
    p.empty-paragraph {
        margin: -0.8em 0;
    }
    p.empty-paragraph + .empty-paragraph {
        margin: 1.4em 0;
    }
    hr {
        margin: 4em auto;
        width: 240px;
        max-width: 100%;
        border: none;
        border-top: 1px solid #d3d3d3;
    }
    img[eeimg] {
        max-width: 100%;
        vertical-align: middle;
    }
    img[eeimg='1'] {
        margin: 0 3px;
        display: inline-block;
    }
    img[eeimg='2'] {
        margin: 1.4em auto;
        display: block;
    }
    blockquote {
        margin: 1.4em 0;
        padding-left: 1em;
        color: #646464;
        border-left: 3px solid #d3d3d3;
    }
    ol,
    ul {
        margin: 1.4em 0;
        padding: 0;
    }
    ol ol,
    ol ul,
    ul ol,
    ul ul {
        margin: 0;
    }
    ol > ol,
    ol > ul,
    ul > ol,
    ul > ul {
        display: table-row;
    }
    ol > ol:before,
    ol > ul:before,
    ul > ol:before,
    ul > ul:before {
        display: table-cell;
        content: '';
    }
    ul {
        display: table;
    }
    ul > li {
        display: table-row;
        list-style: none;
    }
    ol {
        display: table;
        counter-reset: ol;
    }
    ol > li {
        display: table-row;
        list-style: none;
    }
    ol > li:before {
        display: table-cell;
        text-align: right;
        counter-increment: ol;
        content: counter(ol) '.';
        white-space: pre;
    }
    ol ol {
        counter-reset: ol2;
    }
    ol ol li:before {
        counter-increment: ol2;
        content: counter(ol2) '.';
    }
    ol ol ol {
        counter-reset: ol3;
    }
    ol ol ol li:before {
        counter-increment: ol3;
        content: counter(ol3) '.';
    }
    ol ol ol ol {
        counter-reset: ol4;
    }
    ol ol ol ol li:before {
        counter-increment: ol4;
        content: counter(ol4) '.';
    }
    code {
        margin: 0 2px;
        padding: 3px 4px;
        border-radius: 3px;
        font-family: Menlo, Monaco, Consolas, Andale Mono, lucida console, Courier New, monospace;
        font-size: 0.9em;
        background-color: #f6f6f6;
    }
    pre {
        margin: 1.4em 0;
        padding: 0.88889em;
        font-size: 0.9em;
        word-break: normal;
        word-wrap: normal;
        white-space: pre;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        background: #f6f6f6;
        border-radius: 4px;
    }
    pre code {
        margin: 0;
        padding: 0;
        font-size: inherit;
        border-radius: 0;
        background-color: inherit;
    }
    li pre {
        white-space: pre-wrap;
    }
`;

export const RecruitInfoWrap = styled.div``;

export const RecruitInfoSign = styled.h2`
    text-align: center;
    border-bottom: 1px solid ${grey[200]};
    max-width: 500px;
    margin: 1em auto;
    padding-bottom: 20px;
`;

export const RecruitInfoContent = styled.div`
    font-size: 14px;
    background-color: #f5f5f5;
    padding: 20px;
    display: flex;
    align-items: center;
`;

export const RecruitInfoItem = styled.div`
    display: flex;
    align-items: center;
    flex: 1 0 auto;
`;

export const IconSvg = styled.div`
    width: 16px;
    height: 16px;
    fill: ${deepOrange[200]};
    margin-right: 3px;
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    svg {
        color: #657786;
        fill: #657786;
        margin-right: 6px;
    }
    img {
        max-height: 14px;
        margin-right: 4px;
    }

    a {
        margin-left: 10px;
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        padding: 2px 10px;
        border-radius: 3px;
        :hover {
            color: rgb(92, 134, 139);
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;

export const Attention = styled.div`
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    svg {
        color: #657786;
        fill: #657786;
        margin-right: 6px;
    }
`;
