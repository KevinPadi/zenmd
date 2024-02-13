import '@mdxeditor/editor/style.css'
import { 
  IconAlignLeft, 
  IconAlignRight, 
  IconAlignCenter, 
  IconTrash, 
  IconColumnInsertLeft, 
  IconColumnInsertRight, 
  IconRowInsertBottom, 
  IconRowInsertTop, 
  IconDots,
  IconDotsVertical, 
  IconBold, 
  IconItalic, 
  IconUnderline, 
  IconTablePlus, 
  IconPhotoPlus, 
  IconCode, 
  IconSettings, 
  IconList, 
  IconListNumbers, 
  IconListCheck, 
  IconLink, 
  IconArrowBackUp, 
  IconArrowForwardUp,
  IconMinus,
  IconChevronDown
} from '@tabler/icons-react'
import { 
  MDXEditor,  
  headingsPlugin, 
  linkDialogPlugin, 
  listsPlugin, 
  markdownShortcutPlugin, 
  quotePlugin, 
  linkPlugin, 
  UndoRedo, 
  BoldItalicUnderlineToggles, 
  toolbarPlugin,
  IconKey, 
  CodeToggle,
  Separator,
  InsertImage,
  imagePlugin,
  tablePlugin,
  InsertTable,
  CreateLink,
  thematicBreakPlugin,
  ListsToggle,
  InsertThematicBreak,
  BlockTypeSelect
} from '@mdxeditor/editor'

function App() {
  // Función para cambiar los iconos por defecto
  const iconComponentFor = (name: IconKey): JSX.Element => {
    switch (name) {
      case 'undo':
        return <IconArrowBackUp stroke={1.5}/>;
      // Agrega casos para otros tipos de íconos según sea necesario
      case 'redo':
        return <IconArrowForwardUp stroke={1.5}/>
      case 'format_bold':
        return <IconBold stroke={1.5}/>
      case 'format_underlined':
        return <IconUnderline stroke={1.5}/>
      case 'format_italic':
        return <IconItalic stroke={1.5}/>
      case 'code':
        return <IconCode stroke={1.5}/>
      case 'add_photo':
        return <IconPhotoPlus stroke={1.5}/>
      case 'table':
        return <IconTablePlus stroke={1.5}/>
      case 'add_column':
        return <IconColumnInsertRight stroke={1.5}/>
      case 'insert_col_left':
        return <IconColumnInsertLeft stroke={1.5}/>
      case 'insert_col_right':
        return <IconColumnInsertRight stroke={1.5}/>
      case 'add_row':
        return <IconRowInsertBottom stroke={1.5}/>
      case 'insert_row_above':
        return <IconRowInsertTop stroke={1.5}/>
      case 'insert_row_below':
        return <IconRowInsertBottom stroke={1.5}/>
      case 'delete_small':
        return <IconTrash stroke={1.5}/>
      case 'delete_big':
        return <IconTrash stroke={1.5}/>
      case 'more_horiz':
        return <IconDots stroke={1.5}/>
      case 'more_vert':
        return <IconDotsVertical stroke={1.5}/>
      case 'format_align_center':
        return <IconAlignCenter stroke={1.5}/>
      case 'format_align_left':
        return <IconAlignLeft stroke={1.5}/>
      case 'format_align_right':
        return <IconAlignRight stroke={1.5}/>
      case 'settings':
        return <IconSettings stroke={1.5}/>
      case 'format_list_bulleted':
        return <IconList stroke={1.5}/>
      case 'format_list_numbered':
        return <IconListNumbers stroke={1.5}/>
      case 'format_list_checked':
        return <IconListCheck stroke={1.5}/>
      case 'link':
        return <IconLink stroke={1.5}/>
      case 'horizontal_rule':
        return <IconMinus stroke={1.5}/>
      case 'arrow_drop_down':
        return <IconChevronDown stroke={1.5}/>
      default:
        return <IconCode />; // Si no hay un icono correspondiente, devuelve un ícono por defecto
    }
  }

  return (
    <div className='min-h-screen max-w-screen bg-neutral-950 flex justify-center overflow-hidden'>
      <MDXEditor 
        markdown='' 
        autoFocus 
        plugins={[
          headingsPlugin(), 
          listsPlugin(), 
          linkPlugin(), 
          quotePlugin(), 
          markdownShortcutPlugin(),
          linkDialogPlugin(), 
          imagePlugin({
            imageUploadHandler: () => {
              return Promise.resolve('https://picsum.photos/200/300')
            },
            imageAutocompleteSuggestions: ['https://picsum.photos/200/300', 'https://picsum.photos/200']
          }),
          tablePlugin(),
          thematicBreakPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {' '}
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <CodeToggle />
                <Separator />
                <ListsToggle />
                <Separator />
                <CreateLink />
                <InsertImage />
                <InsertTable />
                <InsertThematicBreak />
                <Separator />
                <BlockTypeSelect />
              </>
            )
          })
        ]} 
        iconComponentFor={iconComponentFor} // Pasamos la función iconComponentFor aquí
        className='prose prose-invert prose-p:text-lg dark-theme dark-editor border-r-[1px] border-l-[1px] border-neutral-900 min-w-[750px] max-w-[700px] prose-sky prose-headings:text-sky-100 px-2 bg-neutral-900'
      />
    </div>
  )
}

export default App
