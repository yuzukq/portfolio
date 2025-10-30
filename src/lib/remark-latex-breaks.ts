type MdastNode = {
  type?: string
  value?: string
  children?: MdastNode[]
  [key: string]: unknown
}

// 親ノード配下の子ノードを順に置換（テキスト→テキスト+break）
function processChildren(parent: MdastNode) {
  if (!parent || !Array.isArray(parent.children)) return

  let i = 0
  while (i < parent.children.length) {
    const child = parent.children[i]
    const type = child?.type

    // code / inlineCode / html / image / definition / linkをスキップ
    if (type === 'code' || type === 'inlineCode' || type === 'html' || type === 'image' || type === 'definition' || type === 'link' || type === 'linkReference') {
      i++
      continue
    }

    if (type === 'text' && typeof child.value === 'string') {
      const value: string = child.value

      // "\"で分割して <br /> を挿入
      if (value.includes('\\')) {
        const parts = value.split('\\')
        const newNodes: MdastNode[] = []

        parts.forEach((part: string, idx: number) => {
          if (part) newNodes.push({ type: 'text', value: part })
          // 最後の要素以外の後ろに必ず break ノードを挿入 → 区切り数だけ <br /> が増える
          if (idx < parts.length - 1) newNodes.push({ type: 'break' })
        })

        parent.children.splice(i, 1, ...newNodes)
        i += newNodes.length
        continue
      }
    }

    if (Array.isArray(child?.children)) {
      processChildren(child)
    }
    i++
  }
}

export default function remarkLatexBreaks() {
  return function transformer(tree: MdastNode) {
    processChildren(tree)
  }
}
