export { getStaticProps } from 'destack/build/server'
export { ContentProvider } from 'destack'


// Import necessary modules
import { getStaticProps as destackGetStaticProps, ContentProvider as DestackContentProvider } from 'destack';

// Define your custom function to pass as an argument
const customFunction = () => {
    // Your custom logic here
    return 'Custom result';
};



// Use ContentProvider from destack with your custom argument
const ContentProvider = (props) => {
    console.log('props', props);
    return (
        <DestackContentProvider>
            {/* Your component logic here */}
            <div>

                Hello</div>
        </DestackContentProvider>
    );
};

export default ContentProvider;
