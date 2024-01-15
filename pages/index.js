import { ContentProvider } from 'destack'
import 'grapesjs/dist/css/grapes.min.css'


export default function Page(props) {
    return (
        <div style={{ height: '100%' }}>
            <ContentProvider {...props} showEditorInProd={true} />
        </div>)
}
