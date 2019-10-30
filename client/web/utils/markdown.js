import 'vditor/dist/js/lute/lute.min.js';

export const render = str => {
    const lute = Lute.New();
    lute.SetGFMAutoLink(false);
    lute.SetGFMStrikethrough(false);
    lute.SetGFMTable(false);
    lute.SetGFMTaskListItem(false);
    lute.SetSoftBreak2HardBreak(false);
    lute.SetAutoSpace(false);
    lute.SetFixTermTypo(false);
    lute.SetEmoji(false);
    return lute.MarkdownStr('', str)[0];
};
