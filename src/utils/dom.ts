export const isNode = (node: any) => {
    return typeof node === 'object' && node !== null && 'nodeType' in node && 'nodeName' in node;
}