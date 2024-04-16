import { useState } from 'react';
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import { toast } from 'react-toastify';

import { createProblem } from '../Apis/problem.apis';

export default function CreateProblem() {
    const [markdown, setMarkdown] = useState('');
    const [title, setTitle] = useState('');

    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            const response = await createProblem(title, markdown);
            console.log(response);
            setTitle('');
            setMarkdown('');
            toast.info("Successfully created the problem!");
        } catch(error) {
            console.log("Something went wrong");
            toast.error("Something went wrong");
        }
        
    }

    return (
        <div className="App bg-gray-100 min-h-screen flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Create a new problem</h1>
            <div className="w-full max-w-4xl p-5 bg-white rounded shadow-lg">
                <form className="grid grid-cols-1 gap-6" onSubmit={onFormSubmit}>
                    <label className="block">
                        <span className="text-gray-700">Problem Title: </span>

                        <input 
                            type="text" 
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 "
                            name="title" 
                            value={title}/>
                    </label>

                    <label>

                        Description:

                        <textarea 
                            name="description"
                            rows={30}
                            onChange={(e) => setMarkdown(e.target.value)}
                            value={markdown}
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 "
                        >

                        </textarea>

                    </label>

                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Description Preview</h2>
                        <div className="mt-2 p-4 bg-gray-200 rounded">
                        <Markdown rehypePlugins={[rehypeRaw]} className="prose">{markdown}</Markdown>
                        </div>
                    </div>

                    <button className="btn btn-wide btn-info">Submit</button>
                </form>
            </div>
            
        </div>
    )
}