import InputLabel from '@/Components/ui/InputLabel';
import Main from '@/Layouts/Main'
import { User, Webs } from "@/types";
import { Head } from '@inertiajs/react';
import {useForm} from '@inertiajs/react';

interface Order {
    id: number;
    user_id: number;
    webs_id: number;
    domain_name: string;
    status: 'pending' | 'waiting_payment' | 'paid' | 'admin_approved' | 'in_progress' | 'completed' | 'cancelled';
    total_harga: number;
    tanggal_order: string;
    created_at: string;
    updated_at: string;
}

export default function Detail({ auth, web }: { auth: { user: User }, web: Webs }) {
    // rupiah currency
    function rupiah(price: number) {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
    }

    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        webs_id: web.id,
        domain_name: '',
        status: 'pending',
        price: web.price,
    })

    const onChange = (e: any) => {
        setData('domain_name', e.target.value)
    }

    const submit = (e: any) => {
        e.preventDefault();

        try {
            post(route('orders.store', data), {
                onFinish: () => {
                    reset('domain_name')
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Main auth={auth}>
            <Head title={web.title} />
            <div className="flex flex-col items-center justify-center">
                <div className="w-1/2">
                    <img src={`/images/${web.image}`} alt={web.title} className="w-full" />
                </div>
                <div className="w-1/2">
                    <h1 className="text-2xl font-bold text-center">{web.title}</h1>
                    <p className="text-center">{web.description}</p>
                    <p className="text-center">{rupiah(web.price)}</p>
                    <a href={web.url} target="_blank" className="text-blue-500 hover:underline">Visit</a>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="w-1/2">
                    <form onSubmit={submit} className="flex flex-col m-auto gap-y-3 max-w-2xl">
                        <InputLabel htmlFor="domain_name" type='text' required name='domain_name' value={data.domain_name} onChange={onChange}>Domain Name</InputLabel>
                        <button type="submit" disabled={processing} className="bg-black text-white rounded-lg px-3 py-1">
                            {
                                !processing ?
                                    'Order' :
                                    'Loading...'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </Main>
    );
}
