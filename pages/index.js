import { ContentProviderGrapes } from 'destack'
import 'grapesjs/dist/css/grapes.min.css'


export default function Page(props) {
    return (
        <div style={{ height: '100%' }}>
            <ContentProviderGrapes {...props} showEditorInProd={true} />
        </div>)
}
