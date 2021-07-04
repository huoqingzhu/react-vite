import React, { useState} from 'react'
// 标题组件
const Title:React.FC<{title:string}>=({title="我是标题"})=>{
    return (
      <div className="title">
        {title}
      </div>
    )
}
/**
 * 计数器组件
 * @param param0 
 */
type ArticleInfo = {
  title: string,
  content: string
}
const Article:React.FC<ArticleInfo> = ({ title, content }) => {
  const [article, setArticle] = useState<ArticleInfo>({ title, content })
  return (
    <div className="component">
      <Title title="year页面" />
      <p>Title: { article.title }</p>
      <section>{ article.content }</section>
      <button onClick={() => setArticle({
        title: '下一篇',
        content: '下一篇的内容',
      })}>
        下一篇
      </button>
    </div>
  )
}
export default Article