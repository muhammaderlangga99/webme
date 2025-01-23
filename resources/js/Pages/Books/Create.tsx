import TextGreen from "@/Components/TextGreen";
import InputLabel from "@/Components/ui/InputLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import { Head, Link } from "@inertiajs/react";
import { Button } from "@headlessui/react";
import { Textarea } from "@/Components/ui/textarea";
import { Send } from "lucide-react";
import { useForm } from '@inertiajs/react'
import axios from "axios";
import FileUpload from "@/Components/ui/file-upload";

export default function Create() {

  const { data, setData, post } = useForm({
    judul: '',
    penulis: '',
    penerbit: '',
    tahun_terbit: '',
    jumlah_halaman: '',
    sinopsis: '',
    genre: '',
    rating: 0,
    cover: null,
  });

  const submit = (e: any) => {
    e.preventDefault();
    post('/books', {
      onSuccess: () => {
        router.visit('/books')
      }
    });
  }

  return (
    <AuthenticatedLayout>
      <Head title="Tambahkan rekomendasi" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-3 lg:px-8">
          <TextGreen className="text-3xl">Tambahkan Buku</TextGreen>
          <Link href="" className="text-xs">tetap patuhi pedoman penulisan ya!</Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <form className="mt-8 flex flex-col gap-y-3 max-w-2xl" method="post" onSubmit={submit}>
              {/* <FileUpload
              onChange={(file: any) => setData('cover', file)}
            /> */}
              <InputLabel htmlFor="judul" type="text" required onChange={(e: any) => setData('judul', e.target.value)}>Judul</InputLabel>
              <InputLabel htmlFor="penulis" type="text" required onChange={(e: any) => setData('penulis', e.target.value)}>Penulis</InputLabel>
              <InputLabel htmlFor="penerbit" type="text" required onChange={(e: any) => setData('penerbit', e.target.value)}>Penerbit</InputLabel>
              <InputLabel htmlFor="tahun_terbit" type="number" required onChange={(e: any) => setData('tahun_terbit', e.target.value)}>Tahun Terbit</InputLabel>
              <InputLabel htmlFor="jumlah_halaman" type="number" required onChange={(e: any) => setData('jumlah_halaman', e.target.value)}>Jumlah Halaman</InputLabel>
              <Textarea required onChange={(e: any) => setData('sinopsis', e.target.value)}>Sinopsis</Textarea>
              <InputLabel htmlFor="genre" type="text" required onChange={(e: any) => setData('genre', e.target.value)}>Genre</InputLabel>
              <InputLabel htmlFor="rating" type="number" required onChange={(e: any) => setData('rating', e.target.value)}>Rating</InputLabel>
              <Button type="submit" className="bg-green-800 mt-2 shadow-xl font-semibold dark:bg-green-500 text-white rounded-lg max-w-24 py-1.5 shadow-green-200 dark:shadow-green-950 flex justify-center items-center gap-2">Upload <Send size="15" /></Button>
            </form>
            <div className="relative flex flex-col w-full h-4/6 overflow-hidden mt-10">
              <FileUpload className="h-56 sm:h-full w-full" onChange={(file: any) => setData('cover', file)} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}