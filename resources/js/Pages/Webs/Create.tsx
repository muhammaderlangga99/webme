import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import React from 'react'
import { useForm } from '@inertiajs/react'
import { title } from 'process';
import InputLabel from '@/Components/ui/InputLabel';
import { Button } from '@/Components/ui/button';
import FileUpload from '@/Components/ui/file-upload';
import { Loader, Send } from 'lucide-react';
import axios from 'axios';
import { on } from 'events';

export default function Create() {

    const { data, setData, post, reset, processing } = useForm({
        title: '',
        description: '',
        image: null,
        url: '',
        price: '',
    });

    const handleChange = (e: any) => {
        setData(e.target.name, e.target.value);
    }

    const submit = (e: any) => {
        e.preventDefault();

        try {
            post(route('webs.store', data), {
                onFinish: () => {
                    reset('title', 'description', 'image', 'url', 'price');
                }
            });
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <AuthenticatedLayout>
            <Head title="dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl px-3 lg:px-8">
                    <div className="text-3xl">Create New Web</div>
                    <div className="text-xs">Please fill the form below</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        <form className="mt-8 flex flex-col gap-y-3 max-w-2xl" method='post' onSubmit={submit}>
                            {/* method post */}
                            <div className="flex flex-col w-full h-4/6 overflow-hidden">
                                <FileUpload onChange={(file: any) => setData('image', file)} />
                            </div>
                            <InputLabel htmlFor="title" type="text" required name='title' value={data.title} onChange={handleChange}>Title</InputLabel>                                                                     
                            <InputLabel htmlFor="description" type="text" name='description' value={data.description} required onChange={handleChange}>Description</InputLabel>
                            <InputLabel htmlFor="url" type="text" name='url' required value={data.url} onChange={handleChange}>URL</InputLabel>
                            <InputLabel htmlFor="price" type="number" name='price' value={data.price} required onChange={handleChange}>Price</InputLabel>
                            <Button type="submit" disabled={processing} className="bg-black mt-2 shadow-xl font-semibold dark:bg-zinc-200 text-white dark:text-black rounded-lg max-w-24 py-1.5 shadow-zinc-200 dark:shadow-zinc-800 flex justify-center items-center gap-2">
                                {
                                    !processing ?
                                        <>
                                            <span>Submit</span> <Send size={16} /> 
                                        </> :
                                        <>
                                            <span className='p-1'>Loading</span> <Loader size={16} className='animate-spin' /> 
                                        </>
                                }
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
