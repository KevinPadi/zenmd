import '@mdxeditor/editor/style.css'
import { MDXEditor,  headingsPlugin, linkPlugin, listsPlugin, markdownShortcutPlugin, quotePlugin } from '@mdxeditor/editor'

function App() {
  return (
      <div className='min-h-screen w-screen bg-neutral-950'>
        <MDXEditor markdown="hello world" plugins={[headingsPlugin(), listsPlugin(), linkPlugin(), quotePlugin(), markdownShortcutPlugin()]} className='text-white prose prose-invert'/>
      </div>
  )
}

export default App
