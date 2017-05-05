import React from 'react';
import Dropzone from 'react-dropzone';


const DropArea = () => {
    const abc = () => {};
    abc();
    return (
        <section>
            <div className="c-dropzone">
                <Dropzone onDrop={() => {}}>
                    <p>Try dropping some files here, or click to select files to upload.</p>
                </Dropzone>
            </div>
        </section>
    );
};

export default DropArea;
